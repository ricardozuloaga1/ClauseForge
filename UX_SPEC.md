# UX specification and Paper coverage

## Design direction to explore

A calm, precise document workspace. Neutral surfaces, generous document reading space, restrained accent color, and clear typography. Red and green communicate deletions and insertions with additional strike/underline treatment, never color alone. Risk badges use text labels. Avoid dashboard decoration that competes with the contract.

Start at a 1440px desktop canvas; verify a 1280px layout and a tablet reading state. Final typography, colors, density, and spacing remain design decisions to explore in Paper.

## Navigation

Global navigation: Matters, Playbooks, Test runs. Inside a matter: Review, Amendments, Documents, Activity. Review stays one workspace rather than fragmenting into separate issue-detail pages.

## Page and state inventory

| Screen | Main content and actions | Required variants |
|---|---|---|
| Demo entry | Explain the product and open a populated sample matter | Ready; resetting sample |
| Matters | Search, recent matters, status, create matter | Populated; empty; no search results |
| New matter | Name, party, context, uploads and document roles | Valid; invalid type; upload failure; retry |
| Documents | Versions, signed/draft status, relationships, review target | Processing; ready; missing metadata; unsupported content |
| Review setup | Target version, party, playbook version, context, review depth | Complete; missing fields; unavailable playbook |
| Review workspace | Outline, document, issue panel, review controls | Running; results; no findings; partial failure; saved; unsaved/error |
| Issue detail within review | Source, rule, explanation, before/after, actions | Proposed; edited; applied; dismissed; stale; exception recorded |
| Revision/comment panel | Revision author and text; comments; accept/reject | Incoming revision; newly applied revision; resolved comment |
| Amendment explorer | Document chronology, topic comparison, source panel | Clear chain; scope-specific change; unresolved conflict; missing source |
| Draft amendment | Source-linked proposed amendment document | New draft; edited; saved |
| Playbook library | Search, status, version, duplicate/create | Populated; empty; draft and published |
| Playbook editor | Rule list, editable rule, conditions and fallback | New rule; validation error; unsaved; saved; published |
| Test suite/run | Cases, expected behavior, run controls, progress | Ready; running; cancelled; failed; completed |
| Test results | Case-level outcomes and evidence, run comparison | Pass; failure; changed result; missing output |
| Export dialog | Marked-up or clean DOCX, comments options, summary | Ready; compatibility issue; exporting; failure; downloaded |
| Activity | Document changes, review runs, playbook version and exports | Populated; empty |

Design these as reusable page templates and state variants. A modal or drawer need not become a separate full page.

## Review workspace layout

- Top bar: matter name, document/version selector, save status, Review and Export actions.
- Left rail: collapsible clause outline and source documents.
- Center: readable paginated document, zoom, find, markup visibility, and selection controls.
- Right panel: issue queue with filters; selected issue expands into its evidence and proposed edit.
- Keep the selected issue, highlighted passage, and document scroll position synchronized. Let users resize/collapse panels.

## Interaction contracts

| Action | Visible result | State rule |
|---|---|---|
| Select issue | Highlight and scroll to its passage; show rationale | Preserve filters and queue position |
| Edit proposed wording | Editable replacement with preview | Does not change the document until applied |
| Apply as tracked change | Insertion/deletion appears; issue marked applied | Guard document version; prevent repeat application |
| Accept/reject revision | Update document text and revision count | Distinct from issue disposition; invalidate affected findings |
| Approve exception | Record reason and show disposition | Does not change contract wording |
| Undo document edit | Restore prior document state | Restore/invalidate linked issue state consistently |
| Open amendment source | Show exact passage with document identity | Keep selected date and order scope |
| Change playbook rule | Show draft changes | Existing reviews keep published version |
| Run tests | Progress and case results | Store input versions and distinguish errors from failures |
| Export clean copy | Explain resulting treatment of pending revisions | Create output without altering the working original |

## Three clickable journeys

1. Open demo → review renewal → filter liability → inspect rule/source → edit suggestion → apply tracked change → add comment → export.
2. Open amendments → select payment → select order/date → inspect amendment passage → inspect an unresolved conflict → create separate amendment draft.
3. Open playbook → change fallback → save draft → run cases → inspect regression → revise rule → rerun → publish.

## Paper handoff requirements

Name frames by page and state, for example `Review / Issue selected` and `Review / Stale suggestion`. Maintain a frame-to-route/state index. Design shared components once and reuse them.

For every actionable control record its trigger, visible response, state mutation, error behavior, and next destination. Paper defines visual intent; the interaction specification and coded prototype establish behavior.

Include keyboard focus, disabled controls with explanations, long document/rule names, panel overflow, loading skeletons, empty states, retry states, and toasts. Dialogs restore focus when closed. All core journeys must be possible without a mouse.

Review the centerpiece workspace first. Once its direction is approved, apply its components across the full inventory before backend implementation.
