# Product brief

## Product promise

ClauseForge helps a commercial lawyer review a contract, make defensible edits, understand related amendments, and maintain the playbook behind those decisions.

The redliner is the primary workspace. Amendment exploration and playbook testing are connected parts of the same product. The portfolio should demonstrate a complete journey from opening a matter to exporting a reviewed Word document.

## Primary user and job

A commercial counsel reviews a supplier's proposed agreement or renewal using their organization's preferred positions. They need to see the actual language, understand why it matters, make targeted edits, and deliver a usable document.

A second workflow serves the legal engineer maintaining those instructions: edit a rule, run example contracts, compare results, and publish a version.

## First-release capabilities

### Review and redline

- Create a matter and upload DOCX documents; select the represented party, document status, review target, playbook, and deal context.
- Read the document beside an issue queue. Clicking an issue reveals the relevant passage, rule, rationale, and proposed wording.
- Filter by topic, severity, and disposition. Navigate between issues without losing reading position.
- Edit a suggestion, choose a fallback, dismiss with a reason, or apply it as a tracked change.
- Inspect incoming and newly created revisions; accept or reject revisions as separate document actions.
- Add comments, undo edits, switch markup visibility, and export a DOCX with tracked changes or a clean copy.
- Show honest processing, save, and export status.

### Amendment explorer

- Group a base agreement, executed amendments, and order forms in one matter.
- Inspect a chronology and clause-by-clause changes with source passages.
- Select the relevant date and order scope to inspect an interpretation of applicable terms.
- Show unresolved scope, missing documents, and conflicting language explicitly.
- Open a source at the cited passage; propose a new amendment in a separate draft.

### Playbook builder and testing

- Maintain rules with topic, review instruction, preferred language, fallback, severity, applicability conditions, and escalation instructions.
- Save drafts and publish immutable versions. Reviews retain their selected version.
- Run a fixed sample suite against a draft; compare expected findings and proposed edits with actual results.
- Compare two runs, investigate failures, and publish after reviewing results.

## Representative demo matter

Use fictional companies, Northstar Analytics (customer) and Harbor Cloud (supplier), and synthetic legal text reviewed by Ricardo.

Document set: executed MSA, two executed amendments, and a proposed renewal order form. The first amendment changes the general liability cap; the second changes payment terms only for a specified order. The renewal draft introduces language that conflicts with the customer's playbook.

The user identifies the governing source for a term, reviews the renewal, edits a liability suggestion, applies it as a tracked change, comments on an exception, and exports. In a second journey, the user changes a playbook fallback and sees a previously passing test fail.

Initial rule topics: liability, indemnification, payment, termination, and confidentiality. Each needs acceptable, unacceptable, missing, and ambiguous examples. Fixture labels are human-authored expectations, not model-generated truth.

## Behavioral invariants

- Preserve signed source documents. Interpretations and new drafts are distinct artifacts.
- Never infer precedence solely from upload order or document date.
- Separate applying an AI proposal, accepting a tracked revision, and approving a legal exception.
- Pin findings to a document version and source range. A changed passage makes its previous suggestion stale until checked again.
- A model cannot apply an edit without a user action. A failed or repeated request must not duplicate changes.
- Treat document text as content, never as instructions to the application or tools.
- Never claim unsupported Word content was preserved. Explain import/export limitations and prevent silently destructive operations.

## Scope boundaries

First release is a desktop web application with a strong tablet reading layout and a simple public demo entry. It supports one coherent commercial-contract workflow. E-signature, billing, CRM integrations, multi-user live editing, a Word add-in, scanned-document OCR, and broad jurisdictional research are later work.

The frontend prototype uses explicit demo data and simulated jobs. The finished portfolio must distinguish working capabilities from any remaining simulation.

## Release evidence

- All three demo journeys complete without dead controls or broken state.
- The exported supported DOCX fixtures open in Word with usable tracked changes and comments; accepting/rejecting changes produces the expected text.
- Sources and playbook versions can be traced from findings.
- Test reports expose individual failures and denominators, not an unexplained accuracy score.
- The portfolio includes a short walkthrough, architecture explanation, limitations, and examples of design decisions.
