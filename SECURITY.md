# Security posture

## Intended use

ClauseForge is a public synthetic-data reference implementation. Do not upload or paste client agreements, personal information, privileged material, credentials, or confidential business data.

## Controls demonstrated

- React text rendering keeps fixture and user-entered text inert rather than interpreting it as HTML.
- Browser cache is treated as untrusted and structurally validated before rendering.
- Immutable fixture checks reject modified source records.
- Version and pending-revision guards prevent stale or duplicate edits.
- Playbook publication requires a complete passing run against the exact draft fingerprint.
- Failed, partial, cancelled, and missing-output evaluation states cannot satisfy the release gate.

## Known security boundaries

The current build has no authentication, authorization, server-side tenant isolation, encrypted document storage, malware scanning, retention controls, production logging, or external audit ledger. Browser-local state can be changed by the user and carries no evidentiary status.

Before real-document use, implement authenticated tenant context, role authorization, encrypted and isolated storage, upload inspection, source provenance, request and cost limits, retention and deletion controls, security monitoring, incident response, and independent penetration testing.

Report vulnerabilities privately to `rzuloaga@canaimaintl.com`. Do not attach confidential legal documents.
