# Source and license notice

These files are derived data, not generated Japanese readings or translations.

- **KANJIDIC2**, Electronic Dictionary Research and Development Group (EDRDG), distributed through [scriptin/jmdict-simplified](https://github.com/scriptin/jmdict-simplified): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). [EDRDG license](https://www.edrdg.org/edrdg/licence.html). See `sources.json` for the exact release and SHA-256. Character meanings, Japanese and Vietnamese readings, stroke counts and classical radical numbers are extracted from this source.
- **KanjiVG**, Ulrich Apel and contributors: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), [project](https://kanjivg.tagaini.net/). SVG paths and explicit component attributes have been extracted into JSON. Variant component paths can retain their position in the source Kanji, identified by `sourceCharacter`. These derivative stroke files remain CC BY-SA 3.0.
- **Unicode 17.0.0**, Unicode, Inc.: Unicode License v3, reproduced in `UNICODE-LICENSE.txt`. The 214 numbered Kangxi radicals and their English names come from CJKRadicals.txt / UnicodeData.txt. These names describe radicals; KANJIDIC2 `meanings` separately describe the character.

Changes: select fields; join by character and official classical radical number; sort examples by source frequency; extract KanjiVG paths and explicit variant/component relationships. No inferred decomposition or machine-translated Vietnamese definitions. `vietnameseNames` means source Vietnamese character readings, not independently verified everyday Vietnamese meanings. Japanese `readings` for radicals are radical names when KANJIDIC2 provides them; `characterReadings` are not radical names.

Stroke counts correspond to the sourced Japanese form, not an assertion that every variant or every regional Kangxi glyph has that count. Missing metadata is null/empty. 戶 (#63) and 靑 (#174) currently have no sourced stroke count. 訁 has no standalone stroke asset. Examples are Kanji classified under that radical, not every character that merely contains the component.

Regeneration (explicit, never run by `npm run dev`):

```text
npm run kanji:download
python scripts/prepare-kanji-data.py
```

Downloading uses current official releases and records checksums. Regenerating for another release changes the data version and requires reviewing this notice, resulting counts and tests. The checked-in data run without downloading anything.
