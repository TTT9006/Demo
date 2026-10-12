# Komorebi · Học tiếng Nhật mỗi ngày

**Đã phục hồi cấu hình npm và mã nguồn ngày 12/10/2026.** Với database hiện có trong `D:\Demo`, chỉ cần chạy `npm run dev`, rồi mở http://127.0.0.1:5173. Không cần khởi tạo lại database hoặc nhập lại JMdict. Xem [báo cáo phục hồi và kiểm tra](docs/RECOVERY.md).

A local Japanese learning application with a Vietnamese interface. The visual design uses warm white, muted green, natural paper tones, a restrained pink accent, and Japanese typography. No gradients, stock illustrations, or decorative AI imagery.

## Run locally

Muốn gửi link Internet cho người khác dùng thử: chạy `npm run share`. Xem [hướng dẫn chia sẻ](docs/SHARING.md). Bản dùng thử có database riêng và giữ nguyên dữ liệu trên máy.

Requires **Node.js 24+** and npm. From this folder:

```sh
npm install
npm run db:setup
npm run dev
```

Open **http://127.0.0.1:5173**. The API runs at **http://127.0.0.1:3001**. Vite proxies `/api` to Express. The setup command creates `.env` from `.env.example` when needed, applies committed migrations, generates Prisma Client, and seeds the demo. It is safe to run again and does not reset learner data.

On this Windows workspace, `./start-local.ps1` also starts the app using the available bundled Node runtime when Node is not on PATH. On another machine, install Node 24+ and use the commands above.

Choose **Dùng tài khoản mẫu**, or sign in with:

- Email: `demo@komorebi.local`
- Password: `Komorebi2026!`

The demo account is shared locally and contains clearly marked sample activity. Register a new account for a clean personal learning history. No email verification or password recovery is claimed.

## Implemented workflows

- Registration, login, logout, hashed passwords, HTTP-only sessions, profile, avatar selection, password change, learning goals and theme preferences.
- Dashboard and progress reports calculated from persisted cards, reviews, grammar completion, writing practice and test attempts.
- Deck/card creation, editing, deletion, filtering, notes, dictionary import, PDF text extraction with review before saving, pronunciation when a Japanese voice is available.
- SM-2 review queue with four ratings, due dates, intervals, ease, repetitions and review history.
- Japanese dictionary search by Kanji, Hiragana, Katakana, romaji, English and available Vietnamese glosses. Ranked exact/prefix/partial search, FTS5, pagination, search history, separate senses, detail view, copy, speech and sense selection when saving cards.
- Eight original N5 grammar lessons, search, JLPT filters, bookmarks, completion, examples and answer-checked exercises.
- Grammar mini/medium tests, vocabulary tests, mixed tests, typed answers and sentence ordering, server-side scoring, timer, history and review of incorrect answers.
- Hiragana, Katakana and basic Kanji canvas practice, optional glyph guide, undo/clear and saved drawings.
- Optional Gemini learning assistant and a separate offline dictionary translation agent. Ordinary searches never call AI.
- Responsive desktop/mobile layout, keyboard-accessible dialogs, loading/error/empty states, light/dark/system themes.

## Dictionary data

Fresh setups include a **40-entry official JMdict excerpt**, with selected first-sense Vietnamese translations. This lets the core workflow run without network access or paid credentials. The full English dictionary can be downloaded and imported separately:

```sh
npm run dictionary:download
npm run dictionary:import
npm run dictionary:verify
```

For a faster first download, `npm run dictionary:download -- --common` selects the official common-only distribution. The default selects the full `jmdict-eng` release. Importing the full distribution later expands the database; it does not restrict searches to common words.

The downloader records release metadata and verifies the SHA-256 release digest when published. The importer streams JSON, validates source fields, commits bounded 250-entry transactions, preserves original IDs and English glosses, and records import progress. Re-running skips unchanged entries and safely updates changed ones. It creates indexed forms/readings, relational senses/glosses, Unicode FTS5, trigram search and short Japanese token indexes. The full dataset is never bundled in browser code.

Additional options:

```sh
npm run dictionary:download -- --common --file data/raw/common.json
npm run dictionary:import -- --file data/raw/common.json --limit 1000
```

Do not run two import processes at once. An interrupted import can be resumed by repeating the same command. Large generated files and databases are ignored by Git. The installed data counts and test results for this workspace are recorded in `docs/VERIFICATION.md` after verification.

## Translation agent and optional AI

Set these **backend-only** variables in `.env`:

```dotenv
GEMINI_API_KEY=your-key
GEMINI_MODEL=an-available-model-for-your-account
TRANSLATION_BUDGET_ITEMS=100
TRANSLATION_DELAY_MS=2000
```

The model is deliberately configurable. No model ID is assumed to remain available. The web app starts without either Gemini setting. The learning assistant becomes available after both are configured; it is limited to 10 questions per 15 minutes. Questions are sent to the configured provider only when the user presses Send.

```sh
npm run dictionary:translate -- --dry-run
npm run dictionary:translate:common -- --limit 100 --batch-size 8
npm run dictionary:translate:resume -- --limit 100
```

`TRANSLATION_BUDGET_ITEMS` must be positive before any translation request. `--limit` is capped by that budget; batch size is capped at 20. This is an item budget, not a monetary cost estimate. Provider charges depend on the selected model. Supported provider: `gemini` via `--provider gemini`.

The agent groups nearby glosses, includes headwords/readings/sense metadata, validates exact requested IDs, retries temporary failures, stores results immediately, tracks jobs, and reuses compatible translations by a contextual source hash. It leaves manually reviewed translations untouched. A changed source hash marks a translation stale instead of displaying it as current. Without Vietnamese, the UI displays the original English with an explicit untranslated label. `/admin/dictionary` shows coverage and job status to administrators.

## Commands and checks

```sh
npm run build       # strict type check, Vite production build, API bundle
npm run test        # Vitest + Supertest, isolated test database
npm run test:e2e    # Playwright desktop and mobile workflows
npm run lint
npm run format
npm start          # serve the built app and API from port 3001
```

Playwright is configured to use installed Microsoft Edge on Windows. On another OS, adjust the browser channel or install Playwright Chromium and remove `channel: 'msedge'`. The tests cover account creation, dictionary → card → review, grammar exercises, test submission, drawing and preference persistence. The API tests do not modify the real learning database.

## Project map

```text
apps/web/src/        React pages, app shell, reusable UI, styles, state and API client
apps/api/src/        Express routes, authentication, dictionary and AI services
packages/shared/    Original lesson content and SM-2 scheduler
prisma/             Schema, committed migrations and idempotent seed
scripts/            Setup, dictionary download/import/verify, translation commands
data/processed/     Small licensed JMdict fixture (safe to commit)
data/raw/           Downloaded full dictionary (ignored)
tests/              Unit/API tests and browser end-to-end tests
docs/               Architecture, attribution and verification report
```

## Content and verification limits

- N4–N1 are supported as goals and filters; lessons currently cover N5 only.
- Vietnamese coverage is partial. A full import is a full **English** dictionary, not a fully translated Japanese–Vietnamese dictionary.
- Translation jobs currently translate glosses. Source usage notes are preserved in English; a separate note/example translation pipeline is not implemented.
- PDF input must contain selectable text. Scanned PDF OCR is not available.
- Writing is self-assessed. There is no automatic handwriting recognition, accuracy score or licensed stroke-order dataset.
- Matching exercises currently match a single word to a meaning; a multi-pair matching board is not implemented.
- Live Gemini verification requires the user's credentials. Mock-provider tests verify validation, caching, persistence and recovery without external calls.
- This is a local app. Review production deployment settings before exposing it publicly. The demo account is intended for local use.

See [architecture](docs/ARCHITECTURE.md) and [data attribution](docs/ATTRIBUTION.md). JMdict and derivative Vietnamese dictionary data use **CC BY-SA 4.0** with EDRDG and scriptin attribution.
