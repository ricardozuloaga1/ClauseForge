# Build status — 7 September 2026

## Portfolio release verification — 19 September 2026

- Added architecture, security-boundary, and case-study documentation.
- Added CI gates for the 16-test domain suite and strict production build.
- Reconfirmed that the public claim remains a synthetic, production-minded reference implementation. No live AI, document parsing, DOCX fidelity, authentication, or server persistence is claimed.

## Current delivery: full primary-page frontend
All primary app pages and the three portfolio journeys are implemented using reusable React ports of the Paper/library components. See design/IMPLEMENTATION_MAP.md for source lineage and explicit boundaries.

Implemented:
- Entry, searchable matter library, new matter with party/context and upload metadata validation, processing/failure/retry, document source viewer, and review setup.
- Independent per-matter synthetic review state. Five anchored findings, filters, find/zoom/source view, proposal edits, fallback, guarded apply, revisions, accept/reject, undo, exceptions, comments/replies/resolve/reopen, activity, partial/failure/cancel scenarios and missing-anchor blocking.
- Date/order-aware amendment explorer, read-only source dialogs, missing/conflict scenarios, separate editable drafts, saved artifacts and scratch recovery.
- Published playbook library, draft editor, validation, scratch recovery, new rule authoring, version snapshots, fixed 20-case evaluator, cancellation, infrastructure error, missing outputs, retry copies, comparison, regression detection and publish gate.
- Export dialog with real JSON/plain-text download, option handling and simulated failure. DOCX unavailable. Revision history and exception dialogs. Tablet findings drawer. Optional deterministic source navigator.

## Verification
- `npm test`: 16 domain tests pass. Existing source/version/revision invariants plus scoped amendments, regression detection, exact-draft publication gate, cache validation, upload constraints, exceptions, incoming revisions, comment resolution and reply-parent binding.
- `npm run build`: strict TypeScript and Vite production bundle pass. No new runtime dependency.
- Browser journey: create Atlas matter → documents → review setup → named review; amendment OF-2025 selection exposes applicable payment override → separate draft → save with source context.
- Browser upload: invalid extension rejected; simulated failed file retried; matter created with role/date/context; metadata remains after reload.
- Browser playbook: threshold changed to 3 → 19 pass / 1 fail → publish disabled; threshold corrected to 12 → 20 pass. Passing draft published as v1.3 alongside unchanged v1.2.
- Browser review: apply produces pending revision; revision history displays it; JSON export success; exception records separate owner/reason; tablet findings dialog opens; Escape restores focus to trigger. Earlier apply/comment/reject and keyboard clause-selection checks retained.
- Targeted checks show no console errors. Review and amendments fit 768px and 390px without horizontal overflow. All 12 app routes passed width checks at 1280px, 768px and 390px (36 route/viewport combinations), with no horizontal overflow. Script: work/check-routes.sh.
- Browser failure states: run cancellation retains partial results; infrastructure failure retries to completion; missing output shows 19/19 evaluated, then retry restores 20/20; simulated export failure recovers to successful download.
- Screenshots inspected for upload, source documents, amendment draft, playbook editor, test results and tablet drawer. Corrected disabled primary-button styling and native dialog focus restoration.

## Run
`npm ci`, then `npm run dev`; open http://127.0.0.1:5174/product.html. `npm run build` preserves the original gallery entry points alongside the product build.

## Remaining release gates
This completes the local primary-page frontend, not the production legal product. Upload content is not parsed, review uses canonical synthetic text, evaluation is deterministic, and the assistant is not AI. Real DOCX import/export with verified Word round-trips remains M4. Authentication, authorized remote persistence, server-side AI and production deployment remain M5. Evaluation labels still require Ricardo’s legal review. The 20-case baseline does not cover newly authored topics. A full accessibility audit and pixel-parity audit of every Paper state specimen remain release checks.
