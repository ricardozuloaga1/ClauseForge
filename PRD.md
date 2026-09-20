# ClauseForge — Product requirements

Version 1.0 · 7 September 2026 · Implementation baseline

## Decision and status
The user authorized building from the assembled component library on 7 September. This permits the frontend kickoff without waiting for another full Paper pass. It does not establish real document-engine fidelity, production AI quality, or approval of every composed screen. PRODUCT.md remains the product foundation; this PRD resolves delivery phases. TASK.md is the execution authority; SRS.md contains testable requirements; UX_FLOW.md defines navigation and transitions. When older planning documents disagree on build order, use these four documents.

## Problem and audience
Commercial counsel needs to inspect actual contract language, understand a playbook finding, make a deliberate change, and deliver a defensible review. A legal engineer needs to maintain the rule behind that decision and test its behavior. A portfolio visitor needs to understand both workflows without an account or private documents.

## Outcome
A polished desktop legal workspace demonstrating Ricardo's product design, legal judgment and engineering. Success is completion of a coherent workflow with traceable evidence, not novelty or an unexplained AI score.

## Release scope
| Area | First frontend milestone M1 | Later prototype M2–M3 | Production gate M4–M5 |
|---|---|---|---|
| Entry/matters | Public demo entry, populated matter, search, reset | New matter and upload simulation | Auth and persisted uploads |
| Review | Five fixture findings, source anchoring, editing, fallback, apply, revisions, comments, undo | Full setup, incoming revisions, missing-anchor/error variants | Anchored DOCX engine + real review jobs |
| Documents | Four source records and read-only synthetic excerpts | Relationships and compatibility states | DOCX ingestion and fidelity reporting |
| Amendments | Planned and visibly unavailable | Date/order-aware source explorer and separate draft | Real analysis with verified citations |
| Playbooks/tests | Planned and visibly unavailable | Rule draft, regression run, comparison, publish | Persistent immutable versions and evaluations |
| Export | JSON review summary, clearly labelled | Export dialog simulation | Verified tracked/clean DOCX |

M1 is the concrete kickoff deliverable, not the completed product. Downloading JSON is a useful prototype artifact and is not described as a Word export. The existing component galleries remain available as design references.

## Main journeys
1. Visitor opens populated demo → counsel selects liability finding → inspects clause/rule → adjusts proposed wording → applies simulated tracked change → comments → inspects revisions → downloads review summary.
2. Counsel selects amendment date/order → inspects source language and scope → resolves or records ambiguity → creates a separate draft (M2).
3. Legal engineer changes fallback → runs fixed labelled cases → inspects regression → revises and reruns → publishes version (M3).

## Canonical demo
Matter MAT-001: Harbor Cloud renewal. Customer: Northstar Analytics. Supplier: Harbor Cloud. Four documents: DOC-MSA (12 Jan 2025), DOC-A1 (1 Jun 2025, liability amendment), DOC-A2 (1 Mar 2026, payment for OF-2025 only), DOC-REN (7 Sep 2026, proposed renewal). Renewal covers five topics: liability, indemnity, payment, termination, confidentiality. Review RV-001 pins customer playbook PB-1.2. Fixture wording and expected outcomes are authored draft examples awaiting Ricardo's legal review; they are not model-generated authority.

## Non-negotiable behavior
Signed sources never mutate. Proposal application, revision acceptance, issue dismissal, and legal exception approval remain separate decisions. Every finding has a document version and clause anchor. Changed text invalidates findings for that range; repeated apply does not duplicate a revision. Model output cannot authorize edits. Document content is data, never instructions to an agent. Show actual save/job/export states and limitations.

## Design direction
Reuse landing serif typography and soft pill CTA for the public entry. Use the cool white app theme, Inter controls, rounded document canvas, narrow outline and right inspector in the workspace. The assistant is secondary and deferred from M1; it does not replace issue evidence. Preserve accessible text labels, focus rings and non-color revision marks. No copied customer endorsements or third-party product claims.

## Acceptance and success measures
M1: one reviewer completes journey 1 without a dead enabled control; sources/rule version are visible; applying twice creates one revision; undo restores text and issue disposition; state survives navigation; unavailable persistence is disclosed; supported browsers compile and render; domain tests and browser walkthrough pass.
Full release: all three journeys complete; keyboard and tablet reading work; supported DOCX fixtures reopen in Word with usable comments/revisions; run reports show failures and denominators; portfolio walkthrough and limitations are published. No numerical model-accuracy target is set before labelled evaluation data exists.

## Out of scope
Billing, e-signature, CRM, live multiplayer editing, Word add-in, OCR, broad jurisdiction research, production legal advice, automatic approval of exceptions. Public hosting is a later task, not implied by running the local build.

## Risks and decision gates
Editor license and OOXML support require an explicit implementation spike. Synthetic fixtures require human legal review before portfolio publication. The shared design library is a starting point and composed workspace details can change after review. Local prototype storage is not suitable for real client documents. Choose backend and provider only when M4/M5 requirements can be measured.
