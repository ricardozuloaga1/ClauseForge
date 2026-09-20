# ClauseForge — execution task list

7 September 2026 · Source of truth for completion. Checked only with evidence.

## Kickoff M1 — implement now
| ID | Status | Objective / dependencies | Scope / acceptance | Requirements |
|---|---|---|---|---|
| M1-00 | DONE | Consolidate specification | PRD, SRS, UX_FLOW and TASK exist; phase boundaries explicit | All |
| M1-01 | DONE | React/TS build foundation | product/, package lock, strict build; preserve galleries | NFR-06 |
| M1-02 | DONE | Canonical typed fixtures + domain commands; after 01 | Four docs, five clauses/findings; version-safe apply/revisions/undo; deterministic tests | FR-02,05–09 |
| M1-03 | DONE | Entry, matters and app shell; after 01 | Landing styling reused, search empty state, hash navigation | FR-01 |
| M1-04 | DONE | Review workspace; after 02–03 | Anchored issue select, filters, editable suggestion, fallback/apply/dismiss; no duplicate revision | FR-03–07 |
| M1-05 | DONE | Comments, revisions, undo, activity; after 04 | Separate actions, document invariants maintained | FR-07–09 |
| M1-06 | DONE | Adapter, browser save, JSON download; after 04 | Simulated delay/failure/retry; saved/not-saved honest; safe reset; no Word claim | FR-10–12 |
| M1-07 | DONE | Verification and handoff; after 01–06 | Typecheck, domain tests, bundled build, browser review journey; evidence in BUILD_STATUS.md | NFR-01–06 |

## M2 — complete review states and amendment journey (frontend implemented)
- [x] M2-01 New matter and upload/setup simulation. Scope: matter forms, adapters, fixtures. Depends M1. Accept: invalid type, retry, document role and party/context preserved. FR-13.
- [x] M2-02 Incoming revisions, exception approval, empty/partial/missing-anchor review states. Accept: approval separate from apply/dismiss; affected findings stale. FR-07/09/10.
- [x] M2-03 Amendment data contracts + scoped chronology. Depends M2-01. MAT-001/DOC-A1/DOC-A2: date and OF-2025 scope alter interpretation only with evidence; ambiguous chain shows conflict. FR-14.
- [x] M2-04 Source-linked amendment draft. Depends 03. Signed source unchanged; separate draft saved by demo adapter. FR-15.
- [ ] M2-05 Walk journey 2 and remaining review states; update Paper compositions and UX coverage.

## M3 — playbooks and evaluation prototype (frontend implemented; label review pending)
- [x] M3-01 PB-1.2 rule schema and editor; draft validation, save and immutable published snapshot. FR-16.
- [ ] M3-02 Code complete: 20 acceptable/unacceptable/missing/ambiguous cases authored; Ricardo reviews labels. Five canonical topics. FR-17.
- [x] M3-03 Deterministic runner with delay, cancel and infrastructure error; individual expected/actual results and denominators. FR-17.
- [x] M3-04 Compare fallback regression, revise, rerun and publish; pinned old review unchanged. Depends 01–03.
- [ ] M3-05 Walk journey 3, keyboard and tablet audit, finish all prototype controls and design coverage.

## M4 — document-engine gate (not started)
- [ ] M4-01 SuperDoc license/support investigation; record evidence and alternatives only if needed.
- [ ] M4-02 DOCX fixture corpus: tables, lists, comments, revisions, headers, footers, cross-references.
- [ ] M4-03 Adapter spike: unchanged round-trip, targeted mutation, undo, accept/reject and export.
- [ ] M4-04 Open outputs in Word; publish supported/blocked fidelity matrix. No real DOCX button before success. FR-18.

## M5 — real services and release (not started)
- [ ] M5-01 Architecture/security decision record, storage schema, access control and persistent document versions.
- [ ] M5-02 Replace adapters by vertical slice: persistence → engine → playbooks → review → amendments → evaluations.
- [ ] M5-03 Real AI schema/citation validation, failure handling and idempotency; server-only credentials. FR-19.
- [ ] M5-04 Real case report; audit all invariants, accessibility and production performance.
- [ ] M5-05 Portfolio walkthrough, limitations, architecture and deployment. Public publication remains a separate action.

## Task handoff contract
Every task identifies PRD/SRS requirements, UX/Paper references, fixture IDs, editable files, dependencies and observable acceptance. For M1 editable files are product/, build config, package files and documentation; existing galleries/raw sources remain reference artifacts. Tests must target behavior and domain risks, not mirror UI implementation. Keep pending tasks pending when a dependency or capability is not delivered.

## M1 evidence
Completed 7 September 2026. See BUILD_STATUS.md for automated checks, browser walkthrough and limitations. M2/M3 frontend implementation is now recorded below; M4/M5 remain pending.

## Paper-first correction — 7 September 2026
- [x] D-01 Read UX inventory and existing repo/Paper components.
- [x] D-02 Build required page templates in Paper using actual cloned library elements.
- [x] D-03 Add decision dialogs, 45 state specimens, responsive review variants and interaction patterns.
- [x] D-04 Visual checks and frame/route/component/interaction index: design/PRODUCT_PAGES.md.
- [ ] D-05 Implement reusable React components from the Paper compositions and verify parity. All primary compositions implemented. Pixel-parity audit of all 45 state specimens remains a separate verification item.

The earlier M1 DONE entries describe functional behavior only. They do not establish parity with the new Paper designs or final visual approval.

## D-05 implementation slices
- [x] D-05a Port floating navigation/hero, library shell/sidebar/card, and comment composer to React with Paper lineage.
- [x] D-05b Apply product palette and desktop review geometry while retaining M1 domain commands.
- [x] D-05c Finish tablet findings drawer, editor controls and export dialog; verify full review parity.
- [x] D-05d Port remaining page compositions alongside M2/M3 behavior; do not enable placeholder controls.

## Full frontend evidence
See BUILD_STATUS.md and design/IMPLEMENTATION_MAP.md. Browser walks cover matter/setup, amendment scope/draft and playbook regression/publication. Sixteen domain tests and strict build pass. M2-05 and M3-05 retain final all-state/accessibility audits; M3-02 retains human label review. M4/M5 are not represented as completed by a local simulation.
