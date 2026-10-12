# Dictionary data attribution

This application includes a 40-entry excerpt from **JMdict**, created and maintained by the **Electronic Dictionary Research and Development Group (EDRDG)**, distributed as JSON by **scriptin/jmdict-simplified**.

- Original project: https://www.edrdg.org/jmdict/j_jmdict.html
- JSON distribution: https://github.com/scriptin/jmdict-simplified
- Release used for the bundled excerpt: `3.6.2+20261005200550`
- License: Creative Commons Attribution-ShareAlike 4.0 International, https://creativecommons.org/licenses/by-sa/4.0/
- EDRDG license statement: https://www.edrdg.org/edrdg/licence.html

Changes: selected an excerpt for offline demonstration; stored normalized relational records and search indexes; added Vietnamese translations to selected first senses. Source English definitions and source metadata are preserved. Vietnamese dictionary translations are distributed under the same CC BY-SA 4.0 terms. They are sample translations and are not an endorsement by EDRDG.

The downloader retrieves the latest official English release from GitHub, checks its SHA-256 against the release asset digest when available, and records the version, source URL, and digest next to the downloaded file and in the database. Full datasets and generated databases are not intended to be committed to Git.

The app uses original N5 grammar explanations and examples, without copying textbook content. Writing practice uses system/font-rendered glyphs, not a stroke-order dataset. The app does not perform handwriting recognition.

UI fonts: Be Vietnam Pro and Noto fonts (SIL Open Font License), loaded from Google Fonts when available; local sans-serif fallbacks remain usable offline. Lucide icons: ISC license. UI primitives use Radix and the shadcn composition pattern, with a custom visual theme.
