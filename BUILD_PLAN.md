# UX-first build plan and coding-agent documents

## Stage 1 — product foundation

Current deliverables: product brief, UX inventory, research references, and this plan. Next, write the synthetic document passages and expected review results needed to make every designed screen concrete. Keep a fixture manifest with stable IDs and consistent names, dates, clauses, and issue counts.

Exit: a complete demo script and believable content for all three workflows.

## Stage 2 — Paper design

Design the review workspace first: issue queue, selected issue, proposed redline, applied redline, comments, and export. Use it to establish type, spacing, surfaces, buttons, fields, panels, and document markup.

Then design every page and state in UX_SPEC.md. Review by walking the three journeys, not by judging isolated screenshots. Record accepted design decisions and their Paper frame IDs.

Exit: all first-release pages have approved visual direction, shared tokens/components, and documented interactions. No backend work is required for this stage.

## Stage 3 — clickable frontend

Proposed baseline: React and TypeScript with CSS variables derived from the approved design. Choose exact packages and versions at implementation time. Use a router, shared components, typed domain objects, and a service adapter with deterministic fixtures.

Build the shell and review journey first, then amendments, then playbooks/tests. Mock services must include delay, failure, retry, empty results, and stale document states. Preserve prototype state during navigation; provide Reset demo. Clearly identify simulated review/export behavior while it remains simulated.

Exit: Ricardo can click every workflow, edit data, return to previous screens, and inspect meaningful outcomes. Every visible control either works or is explicitly unavailable with a reason. Refine the UX here before backend integration.

## Stage 4 — document engine validation

Evaluate an existing DOCX editor behind an adapter, starting with SuperDoc as a candidate. Confirm license suitability before adopting it. Compare alternatives only if the candidate fails required behavior.

Use the actual demo documents plus challenging fixtures for lists, tables, comments, existing revisions, headers/footers, and cross-references. Test unchanged import/export, targeted changes, undo, revision acceptance/rejection, and reopening in Word. Record supported and blocked features. Adjust any unsupported UI promise before freezing the engine contract.

Exit: demonstrated Word export fidelity for the declared supported document set. This is a focused implementation gate after UX approval, not a promise of universal Word compatibility.

## Stage 5 — backend and AI integration

Finalize architecture after the frontend domain is understood. Likely needs: API service, relational database, document object storage, and background jobs. Keep model credentials server-side. Separate ingestion, review, mutation, and export responsibilities.

Replace adapters in vertical slices: document persistence → engine mutations/export → playbook persistence → review jobs → amendment analysis → test runner. Validate model output against schemas; source references must resolve before rendering actionable suggestions. Apply edits only through version-checked user commands.

Exit: all three workflows use real services, with errors, retries, idempotency, and source traceability working.

## Stage 6 — portfolio release

Verify keyboard navigation and the approved responsive layouts; run the demo journeys and Word fixtures. Show actual evaluation results with case-level detail. Produce a walkthrough, README, architecture diagram, and a short design case study. Use synthetic documents in the public demo. Describe remaining limitations accurately.

## Document set for agentic implementation

| Document | When to finalize | Contents |
|---|---|---|
| PRODUCT.md | Before Paper | Scope, personas, jobs, workflows, acceptance outcomes |
| UX_SPEC.md | During Paper | Page/state inventory, interactions, routes, frame links |
| DESIGN_SYSTEM.md | After initial Paper direction | Tokens, components, typography, layout, accessibility, examples |
| FIXTURES.md | Before clickable frontend | Sample documents, stable IDs, expected issues and outcomes |
| CONTRACTS.md | Before frontend state implementation | Domain schemas, state transitions, adapter interfaces, errors |
| ARCHITECTURE.md | Draft before frontend; finalize before backend | Boundaries, storage, jobs, security, dependency decisions |
| REDLINER_SPEC.md | Before engine integration | Revision semantics, anchoring, version checks, fidelity matrix, exports |
| EVALUATIONS.md | Before real AI integration | Human-authored cases, scoring rubrics, failure categories, run metadata |
| QUALITY.md | Before coding | Journey checks, accessibility, Word validation, release evidence |
| AGENTS.md | In the eventual app directory before coding | Read order, commands, ownership boundaries, definition of done |
| TASKS.md | After each stage is approved | Small ordered tasks with dependencies and observable acceptance criteria |

Do not fill documents with premature backend decisions. DESIGN_SYSTEM.md must reflect actual approved designs, and REDLINER_SPEC.md must distinguish required behavior from verified engine support.

## Agent task contract

Each coding task includes: objective; required spec sections and Paper frames; editable files; dependencies; fixture IDs; acceptance checks; and expected handoff evidence. A task should implement an observable interaction or coherent component rather than an entire product layer.

Example: “Implement selecting a review issue. Use the approved workspace frame and issue fixtures. Clicking a queue item highlights the corresponding passage and opens its rationale without resetting filters. Support keyboard selection and the missing-anchor state. Verify these behaviors and report changed files and any design deviations.”

Agents should reuse shared components, work within the current stage, and report unresolved decisions. They must not silently replace approved UI patterns, add dependencies without a stated need, or present mocks as working integrations. These are future project instructions; no agents have been started for this planning work.
