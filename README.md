# ClauseForge

A working React/TypeScript legal-workflow portfolio built from the reusable Paper component foundation. Start with PRD.md, SRS.md, UX_FLOW.md and TASK.md. BUILD_STATUS.md records delivered scope and verification. The earlier product foundation is preserved in PRODUCT.md, UX_SPEC.md, BUILD_PLAN.md and RESEARCH.md.

Run `npm ci`, then `npm run dev`. Open http://127.0.0.1:5174/product.html for the product. Run `npm test` for domain checks and `npm run build` for strict TypeScript validation and the production bundle.

Read [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md),
[`docs/CASE_STUDY.md`](docs/CASE_STUDY.md), and [`SECURITY.md`](SECURITY.md)
for the system invariants, engineering narrative, trust boundaries, and production
gaps. ClauseForge is a synthetic-data, production-minded reference implementation;
it is not approved for confidential documents or unsupervised legal decisions.

The local app includes all primary pages: matter creation/upload metadata/setup, review and decisions, scoped amendment exploration/drafting, playbook editing, versioned tests/results, activity and export. Sixteen domain tests cover the key invariants. Uploads are metadata-only; review and evaluations use disclosed synthetic fixtures. Real AI, DOCX fidelity and backend services remain M4/M5. Undo history lasts only for the current session.

The component galleries remain at index.html, app.html, editor.html and assistant.html. They can also run independently with `python3 -m http.server 4173`; the React product requires Vite or the built dist directory.

- `src/styles/tokens.css`: shared Paper/CSS tokens.
- `src/styles/components.css`: normalized responsive component styles and interaction states.
- `src/components/landing.js`: reusable semantic DOM factories with configurable content.
- `design/sources/`: original supplied Builder exports, preserved byte-for-byte. Not executed or fetched by the gallery.
- `design/sources.json`: hashes, origin and duplicate tracking.
- `design/components.json`: component and Paper index.
- `design/templates/COMPONENT.md`: repeatable specification template.

## Adding the next paste
Preserve its raw export and SHA-256; classify by existing category; identify duplicates; extract reusable declarations; reuse tokens; create only needed variants; document changes; add gallery specimens; clone/update the matching Paper master; review at desktop and mobile widths; update the registry. Keep names stable: Category / Component / Variant / State.

## Adaptation decisions
Craft custom fonts are replaced with Inter and Georgia (Arial fallback in the browser if Inter is unavailable). Huge computed pill radii become 999px; repeated flex/grid gap declarations and zero-value shadow layers are removed. Soft buttons retain the meaningful gradient and shadow. Marketing copy is replaced with clearly marked sample copy. Embedded images, branding, and remote assets remain only in raw sources. Feature imagery is an explicit slot. Mobile display type is reduced to 42/46 rather than the source's 58/58 to prevent cramped layouts. Focus, disabled, loading, hover and pressed states are authored additions, not claims about the original site.

Paper masters are editable, cloneable specimens; they are not linked component instances or a clickable prototype. CSS tokens and Paper tokens are synchronized manually. This library is draft visual material and does not approve the application's review workspace.

## App components · batch 2

Open `app.html` for the signed-in document-library adaptation. Includes scoped app styles, sidebar, search, view switcher, document cards and read-only previews. See `design/APP_COMPONENTS.md` and `design/app-components.json` for provenance, interactions and Paper mappings.

## Editor components · batch 3

Open `editor.html`, or New document in the app gallery. Includes editable title/text specimens, outline, and insert controls. Changes are not saved. See `design/EDITOR_COMPONENTS.md` and `design/editor-components.json`.

## Assistant components · batch 4

Open `assistant.html` for suggestions, context chip and message composer. Replies are fixed demo text; no model is connected. See `design/ASSISTANT_COMPONENTS.md` and `design/assistant-components.json`.
