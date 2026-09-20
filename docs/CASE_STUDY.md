# ClauseForge case study

## Problem

Contract-review interfaces often collapse source text, model output, proposed language, and the lawyer's final decision into one editable surface. That makes it difficult to explain what changed, which source governed, and whether a later run invalidated earlier work.

## Users and legal logic

The primary user is in-house commercial counsel reviewing a proposed order against a customer playbook and a signed agreement stack. The workflow must preserve the source, resolve amendment scope, surface playbook deviations, keep exceptions distinct from edits, and prevent a stale finding from changing a newer document version.

## Implementation

- React and TypeScript product workspace with twelve primary routes.
- Separate immutable source, working clause, finding, revision, comment, exception, and activity records.
- Date- and order-aware amendment-scope function with explicit incomplete and conflicting-source results.
- Versioned playbook editor and twenty-case deterministic evaluator.
- Exact-draft fingerprint and publication gate.
- Responsive layouts verified at 1280, 768, and 390 pixels.

## Evaluation

Sixteen domain tests protect source immutability, proposal isolation, stale-anchor blocking, revision decisions, exception separation, amendment scope, evaluation completeness, regression detection, publication gating, cache validation, upload constraints, and comment relations.

## Boundaries

The current product uses synthetic fixtures. It does not parse uploaded content, call a live model, produce Word-native tracked changes, authenticate users, or persist data on a server. These limits are labeled in the interface and documentation.

## Next production step

Connect a server-side document pipeline that generates paragraph/run source anchors, stores immutable source versions, queues extraction and review work, and round-trips DOCX tracked changes. Keep the existing domain invariants as the acceptance contract for that backend.
