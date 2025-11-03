## Repository quick orientation

- Purpose: This repo is a simple static podcast site (single-page `index.html`) with optional scaffolding for a future JS/Next.js build.
- Layout to reference when editing: see `README.md` / `structure.txt`. Important paths:
  - `index.html` — main entry, currently uses Tailwind via CDN.
  - `src/components/player.js` — intended audio player code (placeholder in structure).
  - `public/manifest.json`, `public/favicon.ico` — static web metadata.

## Big-picture architecture (what to know)

- No backend in this repo by default: deliverable is static HTML/CSS/JS.
- Asset & component locations follow the `src/` convention in `structure.txt`: assets → `src/assets`, components → `src/components`, pages → `src/pages`.
- The project is intentionally minimal so contributors can later adopt Next/Vite. If `package.json` appears, treat it as an opt-in build system.

## Developer workflows (concrete, repo-specific)

- Local preview (default): open `index.html` in a browser or use VS Code Live Server. There is no build step unless a `package.json` is present.

  Example (when no build system):
  - Open `index.html` in browser or use Live Server extension.

  If `package.json` exists (opt-in):
  - npm install
  - npm run dev  # common conventions; inspect `package.json` scripts first

- CSS: project currently uses Tailwind via CDN (check `<link>` in `index.html`). If converting to local Tailwind, update `tailwind.config.js` and add a build step.

## Project-specific conventions & patterns

- Keep site copy in Thai (see `README.md`) — language is Thai by default for UI text.
- Minimal JS lives under `src/components` and should be ES module style (importable by pages). Example path: `src/components/player.js`.
- Static assets go in `src/assets` and `public/` for web manifest and icons.
- Avoid adding heavy backend code in this repo; prefer linking to external services (e.g., Firebase, Supabase) if needed.

## Integration points & external dependencies

- Tailwind (CDN) used for styling. If you see `tailwind.config.js` and `package.json`, the project may be switched to a local Tailwind setup.
- Future integrations called out in `README.md`: OpenAI API, Next.js, Firebase, Supabase. No keys or live credentials are present in repo — add secrets via environment variables or platform secrets.

## Examples (how to change common things)

- Add a new page: create `src/pages/my-page.html` and add a link to `index.html` navigation.
- Wire a component: import `src/components/player.js` in the page script tag or via bundler entry if the project is migrated to a build tool.

## Requests for AI agents (what I expect from you)

- Work only with discoverable files. If you need configuration or secrets, open an issue rather than guessing values.
- When proposing changes that add a build step, include a minimal `package.json` and a short README snippet describing how to run `npm install` and `npm run dev`.
- Keep copy language (UI text) in Thai unless explicitly asked to add English translations.

## Project preference: LLM & assistant configuration

- Preference note: "Enable Claude Sonnet 4.5 for all clients" — record this as a repository preference. This file documents the preference but does not perform platform-side enabling.

  If you (or the maintainer) want this actually enabled on the hosting/assistant platform, open an issue titled `Enable Claude Sonnet 4.5 for all clients` and include the admin steps required by your chat/assistant platform (this repo cannot change platform configuration).

## Where to look for examples

- See `README.md` and `structure.txt` for the intended folder layout and copy style.
- Inspect `index.html` for Tailwind CDN usage and the navigation structure to match new pages.

## If something is unclear

- Ask: what build system (if any) do you want? If you want Claude Sonnet 4.5 enabled platform-side, I can add an issue template or PR that documents the necessary admin steps — tell me which option you prefer.

----
Small, focused, and actionable — tell me what to add or change (CI, specific build, or admin steps for Claude Sonnet 4.5) and I will update this file.
