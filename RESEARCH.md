# Product references and engineering implications

Research date: September 7, 2026. Purpose: learn from established implementations to build an excellent portfolio product. Market novelty is not a requirement.

This is desk research using public product documentation. Advertised capabilities are not independently tested performance, and this research does not substitute for hands-on editor validation or user feedback.

## Patterns to adopt

Spellbook documents party selection, deal context, review depth, explanations, locating a finding in the document, editing a suggestion, and applying revisions. These support our review setup and document-plus-issue-panel flow. [Comprehensive Review](https://help.spellbook.legal/en/articles/15656286-how-to-use-comprehensive-review).

Its playbook documentation includes preferred positions, fallbacks, and publishing workflows. Those are useful conventions for a realistic rule editor. [Create Playbooks](https://help.spellbook.legal/en/articles/11327030-create-playbooks).

Ironclad describes precise redlining against preferred terms and distinguishes editing language from approval decisions. Our interface should make those actions explicit and let the lawyer inspect the proposed edit. [AI Precise Redlining](https://support.ironcladapp.com/hc/en-us/articles/28661084734999-Use-AI-Precise-Redlining-to-Review-a-Contract).

Common Paper's agreement structure illustrates why cover terms, order forms, and incorporated standard terms belong together in an agreement workspace. The applicable relationship must come from the documents and confirmed context. [Anatomy of a Common Paper Standard](https://commonpaper.com/blog/the-anatomy-of-a-common-paper-standard/).

## Redliner implementation

SuperDoc's Document API documents tracked-change review, comments, anchored ranges, atomic mutations, and DOCX export modes with degradation reports. This makes it a candidate for an adapter-based editor integration; actual fidelity remains to be tested against our fixtures. [Document API reference](https://docs.superdoc.dev/document-api/reference/).

Microsoft explains OOXML as a means of retaining richer Word content than simpler representations allow. Our requirement is native document revision behavior and reliable exports; a visual HTML diff alone does not satisfy it. [Office Open XML guidance](https://learn.microsoft.com/en-us/office/dev/add-ins/word/create-better-add-ins-for-word-with-office-open-xml).

Ironclad's editor documentation discusses unsupported or unrendered revisions, illustrating why even established editors need explicit limitations. We need a supported-feature matrix and checks for changes that cannot be faithfully represented. [Ironclad Editor](https://support.ironcladapp.com/hc/en-us/articles/12274871100055-Use-Ironclad-Editor).

## Paper-to-code workflow

Paper supports CSS-variable design tokens. Define a shared visual vocabulary there and transfer it into the frontend styles. Keep the design file and code synchronized through documented token changes, rather than assuming automatic synchronization. [Paper tokens](https://paper.design/docs/tokens).

## Product decisions drawn from this research

These are proposed design choices, not claims of competitive advantage:

- Center the product on reading and editing a real document.
- Put supporting evidence and suggested language next to the relevant passage.
- Keep amendment sources easy to inspect.
- Make rules editable and their outcomes testable.
- Use an existing document engine, subject to license and fixture validation.
- Make the frontend fully explorable before connecting production services.

Outstanding validation: editor compatibility and license; Ricardo's review of synthetic legal fixtures; visual direction in Paper; real review/evaluation quality after backend implementation. None blocks starting the UX design.
