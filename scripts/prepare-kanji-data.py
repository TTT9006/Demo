"""Derive local learning data from licensed Unicode/KANJIDIC2/KanjiVG sources.
No machine-generated translations or inferred kanji decomposition.
Run after node scripts/download-kanji-data.mjs. Python 3 standard library only.
"""
import json, zipfile, pathlib, xml.etree.ElementTree as ET, re, shutil
root=pathlib.Path('data/raw/kanji'); out=pathlib.Path('data/kanji'); out.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(root/'kanjidic.zip') as z: source=json.loads(z.read(z.namelist()[0]))
characters={}
for c in source['characters']:
    groups=(c.get('readingMeaning') or {}).get('groups',[])
    characters[c['literal']]={'character':c['literal'],'radicalId':next((r['value'] for r in c['radicals'] if r['type']=='classical'),None),
      'strokes':c['misc']['strokeCounts'][0] if c['misc']['strokeCounts'] else None,'grade':c['misc'].get('grade'),'frequency':c['misc'].get('frequency'),
      'readings':[r['value'] for g in groups for r in g['readings'] if r['type'] in ['ja_on','ja_kun']],
      'vietnameseNames':[r['value'] for g in groups for r in g['readings'] if r['type']=='vietnam'],
      'radicalNames':c['misc'].get('radicalNames',[]),
      'meanings':[m['value'] for g in groups for m in g['meanings'] if m['lang']=='en'], 'components':[]}
names={}
for line in (root/'UnicodeData.txt').read_text().splitlines():
    row=line.split(';'); names[int(row[0],16)]=row[1]
radicals=[]
for line in (root/'CJKRadicals.txt').read_text().splitlines():
    line=line.split('#')[0].strip()
    if not line: continue
    num,code,ideograph=[p.strip() for p in line.split(';')]
    if not num.isdigit():continue
    char=chr(int(ideograph,16)); c=characters.get(char,{})
    radicals.append({'id':int(num),'character':char,'name':names.get(int(code,16),'').replace('KANGXI RADICAL ','').lower(),
      'vietnameseNames':c.get('vietnameseNames',[]),'readings':c.get('radicalNames',[]),'characterReadings':c.get('readings',[]),
      'meanings':c.get('meanings',[]),'strokes':c.get('strokes'),'variants':[],'examples':[]})
assert len(radicals)==214
bychar={r['character']:r for r in radicals}; strokes={}; variants={}
def attr(g,name):return next((v for k,v in g.attrib.items() if k.endswith('}'+name)),None)
def paths(g):return [p.attrib['d'] for p in g.iter() if p.tag.endswith('}path') and 'd' in p.attrib]
with zipfile.ZipFile(root/'kanjivg.zip') as z:
  for filename in z.namelist():
    stem=pathlib.PurePosixPath(filename).stem
    if not re.fullmatch('[0-9a-f]{5}',stem):continue
    char=chr(int(stem,16)); tree=ET.fromstring(z.read(filename)); p=paths(tree)
    if not p:continue
    strokes[char]={'character':char,'paths':p,'sourceCharacter':char}
    groups=[g for g in tree.iter() if g.tag.endswith('}g') and attr(g,'element')]
    top=next((g for g in groups if attr(g,'element')==char),None)
    if char in characters and top is not None:
      characters[char]['components']=[{'character':attr(g,'element'),'original':attr(g,'original'),'radical':attr(g,'radical'),'position':attr(g,'position')} for g in top if attr(g,'element')]
      general=next((attr(g,'element') for g in groups if attr(g,'radical') in ['general','tradit']),None)
      if general:characters[char]['radicalForm']=general
    for g in groups:
      original=attr(g,'original'); variant=attr(g,'element')
      if original in bychar and variant!=original and attr(g,'variant')=='true':
        vp=paths(g)
        if len(variant)==1 and vp:
          variants.setdefault((original,variant),{'character':variant,'strokes':len(vp),'sourceCharacter':char})
          strokes.setdefault(variant,{'character':variant,'paths':vp,'sourceCharacter':char})
for (original,variant),v in variants.items():bychar[original]['variants'].append(v)
for r in radicals:
  if r['strokes'] is None and r['character'] in strokes:r['strokes']=len(strokes[r['character']]['paths'])
  examples=sorted([c for c in characters.values() if c['radicalId']==r['id']],key=lambda c:(c['frequency'] or 99999,c['strokes'] or 99,c['character']))
  r['examples']=[c['character'] for c in examples[:8]]
# Glyph 訁 is a Unicode radical form; if it has no standalone KanjiVG paths, keep a truthful fallback.
if not any(v['character']=='訁' for v in bychar['言']['variants']):
  c=characters.get('訁',{});bychar['言']['variants'].append({'character':'訁','strokes':c.get('strokes'),'sourceCharacter':None})
selected=set('休語海')|set(bychar)|{v['character'] for r in radicals for v in r['variants']}|{c for r in radicals for c in r['examples']}
svgdir=out/'strokes';svgdir.mkdir(exist_ok=True)
for c in selected:
  if c in strokes:(svgdir/(format(ord(c),'x')+'.json')).write_text(json.dumps(strokes[c],ensure_ascii=False,separators=(',',':')),encoding='utf8')
for c in characters.values():c['hasStrokes']=c['character'] in selected and c['character'] in strokes
(out/'radicals.json').write_text(json.dumps(radicals,ensure_ascii=False,separators=(',',':')),encoding='utf8')
(out/'characters.json').write_text(json.dumps(characters,ensure_ascii=False,separators=(',',':')),encoding='utf8')
shutil.copyfile(root/'sources.json',out/'sources.json');shutil.copyfile(root/'UNICODE-LICENSE.txt',out/'UNICODE-LICENSE.txt')
print(json.dumps({'radicals':len(radicals),'characters':len(characters),'strokeAssets':len(list(svgdir.glob('*.json'))),'missingRadicalStrokes':[r['id'] for r in radicals if r['strokes'] is None],'variants':{c:[v['character'] for v in bychar[c]['variants']] for c in '水手心人言火艸'}},ensure_ascii=False))
