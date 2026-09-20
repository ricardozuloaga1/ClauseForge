# ClauseForge — Software requirements specification

Version 1.0 · 7 September 2026

## Architecture and boundary
M1 uses React + TypeScript, a lightweight hash router, CSS variables from src/styles/tokens.css, a pure domain module, and a deterministic review adapter. Product sources live in product/; existing src/ component galleries remain intact. product.html is the application entry. React is chosen for stateful composition; TypeScript makes version/disposition contracts explicit; Vite provides a reproducible bundled build. No state-management/router package is required for five routes. Native node:test runs compiled domain tests. This reduces dependencies without constraining a future router migration.

UI → typed commands → domain transition → state → render. Simulated review service returns fixture findings after delay or a requested failure. No credential, model, database or DOCX package in M1. Later adapters replace review, persistence, document mutations and export independently.

## Data model
- Matter: id, name, represented party, supplier, document IDs, review target.
- Document: id, title, signed/draft status, date, immutable source excerpts.
- Working clause: stable id, topic, source text, current text, revision counter.
- Finding: id, clauseId, targetDocumentId, ruleId/version, anchored clause revision, severity, explanation, preferred, fallback, disposition, reason.
- Revision: id, findingId, clauseId, before, after, pending/accepted/rejected. Application increments document version but is distinct from resolution.
- Comment: id, clauseId, text, author; linked to working document version at creation.
- Review state: schema version, document version, clauses, findings, revisions, comments, activity, previous document snapshots.
- Activity: id, timestamp, label. Undo adds a new activity entry; it does not erase historical events.

All M1 data is synthetic. Canonical fixtures are in product/domain.ts; older gallery excerpts are noncanonical design copy. No real DOCX parsing is inferred from HTML markup.

## Functional requirements
| ID | Requirement and observable acceptance | Phase |
|---|---|---|
| FR-01 | Open demo navigates to MAT-001; Matters search supports match and no results. Browser back/forward works. | M1 |
| FR-02 | Documents shows all four immutable source records and excerpts. Signed source has no edit action. | M1 |
| FR-03 | Review lists five findings; topic and disposition filters preserve selection when possible and expose no-results state. | M1 |
| FR-04 | Selecting finding highlights and scrolls to its stable clause; evidence includes rule and playbook version. | M1 |
| FR-05 | Editing proposal/fallback changes draft only. Empty proposal cannot apply. | M1 |
| FR-06 | Apply requires matching clause revision and proposed disposition. It creates one pending revision, updates working text and marks finding applied. Duplicate commands leave state unchanged. | M1 |
| FR-07 | Accept/reject operates on pending revision; accept commits after-text, reject restores before-text. Affected finding becomes stale until rerun. Cannot resolve twice. | M1 |
| FR-08 | Undo restores the prior document transition and linked finding/revision state, increasing document version to remain monotonic. | M1 |
| FR-09 | Comment requires nonblank text and binds to a clause/version. Dismiss requires reason. Exception approval is a separate future workflow. | M1 / M2 exception |
| FR-10 | Run review shows busy state; deterministic failure allows retry. Rerun evaluates current fixture text; unrecognized custom text becomes stale/manual-check instead of an actionable invented finding. | M1 |
| FR-11 | Download JSON summary includes simulation flag, clauses, review, revisions, comments and version. DOCX is unavailable with visible reason. | M1 |
| FR-12 | Local storage attempts disclose Saved on this browser or Not saved; malformed cached data falls back safely. Reset returns to canonical fixtures. | M1 |
| FR-13 | Create matter validates DOCX uploads, party, role and context; processing, unsupported-content and retry states exposed. | M2 |
| FR-14 | Amendment explorer evaluates explicit scope/precedence evidence at selected date/order; missing source and conflict states block definitive answer; signed documents remain immutable. | M2 |
| FR-15 | Amendment proposals create separate draft artifacts with source links. | M2 |
| FR-16 | Playbook edits create draft; published versions immutable; reviews retain version. Rules carry conditions, fallback and escalation. | M3 |
| FR-17 | Test suite has 20 labelled cases (5 topics × acceptable/unacceptable/missing/ambiguous), stores inputs and results, distinguishes failures from errors, supports comparison. | M3 |
| FR-18 | Real DOCX import/export supports explicit fidelity matrix and blocks silent degradation; verify Word reopen and revision resolution. | M4 |
| FR-19 | Persisted services authorize matter access, validate schemas/citations and make edits idempotent; model inputs treated as content. | M5 |

## State machines
Finding: proposed → applied OR dismissed; edited proposal stays proposed. A conflicting clause mutation → stale. Review rerun → proposed or no finding for supported fixture text; arbitrary edited text → manual check. Revision: pending → accepted OR rejected. Applying does not accept. Dismissing never alters text. Exceptions must not be represented as dismissal in later phases.
Review job: idle → running → complete OR failed → retry. The adapter must never apply document changes. Export M1 is a synchronous JSON download; production export requires queued/running/failed/downloaded lifecycle.

## Nonfunctional requirements
NFR-01 Accessibility: semantic controls, visible focus, labels, non-color del/ins markup, keyboard-operable issue list and form, status announcements. Meet WCAG 2.2 AA before release; M1 performs targeted checks and does not claim certification.
NFR-02 Layout: verify 1440 and 1280 desktop; at tablet width stack panels without clipping. Small mobile is readable but advanced editing remains desktop-oriented.
NFR-03 Integrity: signed fixtures are immutable; versions monotonic; stale and duplicate operations tested. UI must not equate simulated markup with Word revisions.
NFR-04 Security: no raw source-export execution, no dangerous HTML rendering, no browser model secret, no actual private documents in demo. Future backend uses scoped access controls, server validation and audit retention.
NFR-05 Performance: local navigation should feel immediate; review delay explicitly simulated. Before release measure interaction latency and large-document performance rather than inventing benchmarks.
NFR-06 Reproducibility: lock dependencies; npm run build performs strict typecheck and bundle; npm test runs deterministic invariant tests. No unbounded network dependencies in tests.

## Persistence contract
Use a namespaced, schema-versioned localStorage key. Validate structure before loading; fallback with explanatory status on corruption. Catch quota/access failures; keep in-memory work and show not-saved status. M1 undo snapshots may be bounded to 20. Production recovery/history is a separate persistence contract.

## Implementation sequencing and dependencies
TASK.md links each requirement to acceptance evidence. M1 implements only the review kickoff. No production backend setup is required. M4 must precede any claim of working Word export. M5 must precede any claim of real AI findings. Dependency versions are frozen in package-lock.json; the local environment currently has Node 22.16. Vite 6 is used as a cached compatible build tool, not claimed as the newest version; revisit supported tooling before deployment.

Technical references: [React TypeScript](https://react.dev/learn/typescript), [Vite 6 setup and build](https://v6.vite.dev/guide/). Architecture decisions here are project decisions; documentation references do not establish implementation correctness.
