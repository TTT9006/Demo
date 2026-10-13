import fs from 'node:fs';
import { createHash } from 'node:crypto';
const dir='data/raw/kanji';fs.mkdirSync(dir,{recursive:true});
const manifest=[];
async function download(url,file,digest){const r=await fetch(url);if(!r.ok)throw Error(`${r.status}: ${url}`);const data=Buffer.from(await r.arrayBuffer());const sha=createHash('sha256').update(data).digest('hex');if(digest&&digest!==`sha256:${sha}`)throw Error('Checksum mismatch');fs.writeFileSync(`${dir}/${file}`,data);manifest.push({url,file,sha256:sha});}
const release=await (await fetch('https://api.github.com/repos/scriptin/jmdict-simplified/releases/latest')).json();
const kanji=release.assets.find(a=>a.name.startsWith('kanjidic2-en-')&&a.name.endsWith('.json.zip'));
await download(kanji.browser_download_url,'kanjidic.zip',kanji.digest);
const vg=await(await fetch('https://api.github.com/repos/KanjiVG/kanjivg/releases/latest')).json();
const asset=vg.assets.find(a=>a.name.endsWith('-main.zip'));
await download(asset.browser_download_url,'kanjivg.zip',asset.digest);
await download('https://www.unicode.org/Public/17.0.0/ucd/UnicodeData.txt','UnicodeData.txt');
await download('https://www.unicode.org/Public/17.0.0/ucd/CJKRadicals.txt','CJKRadicals.txt');
await download('https://www.unicode.org/license.txt','UNICODE-LICENSE.txt');
fs.writeFileSync(`${dir}/sources.json`,JSON.stringify({kanjidicVersion:release.tag_name,kanjivgVersion:vg.tag_name,files:manifest},null,2));console.log(manifest.map(m=>m.file));
