# ClauseForge architecture

ClauseForge is a synthetic contract-review workspace. It demonstrates the product and domain controls that should surround document analysis; it does not pretend that fixture-backed behavior is a live AI or DOCX pipeline.

```text
Immutable source documents
          │
          ├──────────────► amendment scope resolver ─────► source-linked conclusion
          │
          ▼
Versioned working copy ──► review findings ──────────────► proposal
          │                                                   │
          │                              version guard + pending-revision guard
          │                                                   │
          └───────────────────────────────────────────────────► working revision
                                                                  │
                                                   human accept / reject / exception

Playbook draft ──► 20-case evaluation ──► exact-draft fingerprint ──► publish gate
```

## Invariants

- Source clauses and signed synthetic fixtures are immutable.
- Editing a proposal does not edit a clause.
- Applying a proposal creates a pending revision and is blocked when its source anchor is stale.
- Accepting, rejecting, dismissing, and approving an exception are separate decisions.
- Amendment scope depends on effective date and explicit order scope, not the latest date alone.
- A playbook can publish only after a complete passing run against that exact draft.
- Interrupted browser-local evaluation runs recover as cancelled, never as passed.
- Untrusted browser cache is validated before it is rendered.

## System boundary

The current application is a static React/TypeScript reference implementation. Uploads retain metadata only. Review findings, document excerpts, and evaluation cases are disclosed synthetic fixtures. Browser storage supports a local demonstration and is not an authorized system of record.

The next production layer requires a server-side document service, authenticated tenant context, authorized persistence, queued processing, model and retrieval adapters, source-location evidence, and verified DOCX round trips.
