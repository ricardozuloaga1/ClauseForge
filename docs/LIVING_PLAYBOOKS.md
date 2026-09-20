# Living playbooks and the Legal Knowledge Brain

ClauseForge currently demonstrates versioned playbook rules, regression detection, and publish gates. The next layer turns those playbooks into governed institutional memory shared with CounselOS and other legal workflows.

## Principle

Reviewer behavior is evidence, not policy. Accepting, editing, rejecting, or escalating a recommendation creates a feedback event. Repeated signals may create a proposed rule, exception, fallback, or example, but the released playbook never changes automatically.

## Learning loop

```text
authority + approved guidance
           │
           ▼
knowledge assertions ─► scoped playbook release ─► contract recommendation
                                                        │
                                                        ▼
                                                reviewer decision
                                                        │
                                                        ▼
                                             feedback + rationale
                                                        │
                                                        ▼
                                             learning proposal
                                                        │
                                                        ▼
                                      regression suite + owner approval
                                                        │
                                                        ▼
                                              new playbook release
```

## Required playbook rule fields

- Tenant, jurisdiction, document type, transaction type, business unit, risk tier, counterparty class, and effective dates.
- Trigger and required facts.
- Preferred position and ordered fallback ladder.
- Exceptions and hard-escalation conditions.
- Rationale, source references, and approved positive/negative examples.
- Owner, review date, version, supersession link, and release status.

## Release controls

- Deterministic scope resolution; semantic search may find candidates but cannot select governing policy by itself.
- Visible conflict handling when multiple rules apply.
- Regression tests covering historical matters, exceptions, missing facts, adversarial language, and protected counterexamples.
- Human approval with reason before promotion.
- Immutable releases, reproducible historical recommendations, and rollback.
- Cross-tenant retrieval, unsupported rules, superseded authority, and missed hard escalations block release.

## First synthetic demonstration

Version 1.3 contains a limitation-of-liability rule and fallback ladder. A reviewer repeatedly accepts a narrower fallback for low-risk renewals and records why. The Brain groups those decisions into a proposed exception, links the supporting synthetic matters, runs the candidate through the Control Plane, and asks the playbook owner to approve or reject version 1.4. The UI exposes the version diff, evidence, evaluation failures, approver, and rollback target.
