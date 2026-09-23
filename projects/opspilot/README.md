# TriagePilot AI — Version 2

AI-Powered Support & Engineering Operations. An independent portfolio prototype by Jalpa Parmar.

**My role:** Technical Project Manager / Product & Solution Design.

**Focus:** workflow design, requirements, architecture, AI governance, delivery thinking, product thinking and prototype validation. The code makes the case study tangible; it is not a claim of a production SaaS business, former-employer implementation or AI/ML engineering role.

[Launch demo](https://jalpaparmar.github.io/jalpa-parmar-portfolio/projects/opspilot/index.html) · [Case study](../../opspilot.html) · [Portfolio](../../index.html)

## Stable URLs

The public brand is **TriagePilot AI**. The existing `projects/opspilot/` directory and `opspilot.html` case-study filename are retained for backward compatibility, so previously shared links still work. The internal paths are not the product name.

## Problem and hypothesis

Support-to-engineering handoffs often require manual interpretation, rewriting and ownership follow-up. Transparent, editable AI-assisted suggestions may improve handoff consistency when people retain control of important decisions. This prototype demonstrates that interaction model; it does not establish business impact.

## Features and interview flow

1. Open Overview and choose **Start with SUP-101 →** (SUP-101).
2. Inspect the original report, simulated analysis, validation scenarios and routing rationale.
3. Accept suggestions or change summary, priority, queue and owner. Approval creates one Engineering Work Item. Alternatively, return the request with an information note.
4. Open Engineering Work. Move ENG-101 through In Progress, Blocked, Validation or Resolved.
5. Observe the source request’s synchronized state. Resolved becomes **Ready for customer confirmation**, not a closed customer conversation.
6. Read the morning/evening digest and inspect Analytics / AI Recommendation Quality.
7. Use Reset demo to restore the starting scenario. The confirmation dialog supports Escape.

The searchable queue contains 16 original fictional requests across nine categories and four platforms. Five fictional engineers have skill, component and workload profiles. All dashboard views use the same in-memory state. Navigation uses hash routes; return links lead to the main portfolio and case study.

## Architecture and files

```text
data.js → engine.js → app.js → semantic HTML and app.css
fixtures   pure logic  rendering, forms, hash routing
```

`data.js` holds synthetic requests, engineering profiles and category rules. `engine.js` handles analysis, routing, approval validation, one-work-item-per-request, state synchronization, filters and metrics. `app.js` renders the six workspace views and request detail pages. The shared `diagram.css` styles the accessible architecture diagram in the case study and About view. No build or dependency installation is required.

The About view and case study also show a **conceptual** vendor-neutral production architecture: Customer Support Platform → Integration Layer → Normalization / Validation → AI Analysis Engine → Human Review → Routing Engine → Work Management Platform → Engineering Workflow → Status Synchronization → Collaboration / Digest Layer → Analytics, with Audit / Observability across the flow. These external systems are not connected.

## How the simulation works

- Categories are supplied in the synthetic dataset, not inferred by a trained classifier.
- Summaries combine request fields with a fixed template. Category rules select components, queues and validation scenarios.
- Payments and Authentication suggest High priority; Reporting suggests Low; other categories suggest Medium. People may override every suggestion before approval.
- Confidence values are illustrative fixtures, not calibrated probabilities. A single related-category signal is a sample duplicate cue, not actual semantic duplicate detection.
- Routing ranks engineers using queue match (+50), platform match (+30), component match (+20), minus modeled workload divided by five. Ties sort by engineer ID. Workload equals a fictional baseline plus 15 percentage points per open item; the displayed bar caps at 100%, while the numeric value and scoring do not. A reviewer confirms or overrides the recommended owner.
- Digests are templates over current state. The morning format counts arrivals in a stated overnight window but otherwise reflects current state, not a historical morning snapshot.
- The demo clock is fixed at 23 September 2026, 17:00 UTC for repeatable ages and daily metrics. Charts summarize this small fixture set, not historical production traffic.
- Initial engineering items represent fictional, already approved work. They are excluded from session recommendation-quality metrics.

## Human review and feedback definitions

**Accept suggestion** only restores suggested fields; **Approve for engineering** is the consequential demo action. Summary cannot be empty. A return-for-information action requires a note and creates no engineering item. Duplicate approval is rejected. Engineering status changes are explicit user actions; escalation and release decisions are not automated.

Quality metrics count unique requests reviewed during the current session. The latest review replaces earlier feedback for a re-reviewed request. Acceptance means approved with unchanged summary, priority, queue and recommended owner. Routing corrections include owner or queue changes. Returned requests are in the reviewed denominator. Acceptance rate is a feedback signal, not accuracy. The session activity log retains actions even if a later review changes feedback.

## State, accessibility and limitations

State lives only in memory and resets on refresh or Reset demo; nothing is saved or transmitted. Draft edits are not retained when leaving a request view. The fixed scenario does not model ongoing arrivals, customer confirmation, release approval, durable audit, authentication, authorization, retries or integration failure recovery. Status transitions are intentionally unrestricted for exploration. There are no real AI calls, external chart libraries, APIs, analytics beacons or secrets.

Native form controls, visible focus, a skip link, heading focus on navigation, a live status announcement, reset confirmation, chart text equivalents and a keyboard-focusable horizontal queue region support accessible exploration. On narrow screens the board stacks and navigation wraps. JavaScript is required for the demo; the static case study remains available without it.

Production would require access control, server-side validation, redaction before model calls, scoped credentials, durable audit, observability and carefully evaluated model output. No compliance claims are made.

## Run locally / GitHub Pages

From the **repository root**, run a static HTTP server, for example:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/projects/opspilot/index.html`. Serve over HTTP rather than opening `file://` because this app uses JavaScript modules. GitHub Pages serves these files directly, including from the `/jalpa-parmar-portfolio/` subpath. Keep file and directory capitalization unchanged. No special routing fallback or server is needed; routes follow the `#`.

Run the dependency-free engine tests with Node 20+:

```sh
node --test projects/opspilot/tests/engine.test.js
```

Tests cover approval gating, corrections, unique work creation, return validation, re-review counting, status sync, reopened resolution metrics, combined filters, workload-sensitive recommendations and invalid-state rejection. Browser checks should cover both digests, navigation, keyboard focus, responsive widths and return-to-portfolio links.

## Future roadmap

1. Evaluate handoff completeness and decision clarity with representative users using synthetic scenarios.
2. Add saved scenario replay, draft preservation and more robust failure simulations.
3. Build an independently labeled evaluation set for priority, category and routing; measure errors and reviewer corrections before connecting a model.
4. Explore knowledge retrieval, real duplicate detection, historical patterns, release correlation, customer-impact scoring and SLA-risk prediction.
5. Only with a separate design and authorization phase: secure integration adapters, durable storage, role-based access and real LLM integration.

## Synthetic data policy

Portfolio implementation created independently using synthetic/sample data and original code. It demonstrates approaches informed by professional experience without reproducing proprietary employer systems, data or confidential workflows.

All people, requests, numbers and timestamps inside this prototype are fictional. Do not enter real customer information in review fields. No outcomes are presented as professional achievements.

## Final presentation polish

The case study presents five sections: problem, solution, live workflow, architecture/responsible AI, and measurement/learning, with an independent-portfolio My Role summary. The Overview introduces a numbered two-minute path. Detailed architecture and implementation explanations remain in this README.

AI suggests. People decide. A production implementation could connect to an evaluated LLM through a secure server-side service. This portfolio prototype intentionally uses deterministic logic for repeatability, transparency and zero credential exposure.

## Project and product framing

Operational problem → Stakeholders → Requirements → MVP scope → Workflow → Risks and dependencies → Prototype → Success metrics → Learning / next iteration.

Modeled stakeholder needs: Customer Support needs ownership/status visibility; Engineering needs actionable context; QA needs reproducible scenarios; Product needs recurring themes; the Technical Project Manager needs blockers, risk and ownership; Engineering Leadership needs capacity context and escalation decisions. These are generic groups, not stakeholders from a real deployment.

In scope: queue, structured triage, summary, classification, suggested priority and validation, routing, human approval, engineering tracking, status visibility, digests and feedback metrics. Out of scope: real integrations, production LLM, authentication/RBAC, production database, SLA prediction, production duplicate detection, real customer communication and automated release decisions.

Risks and controls: incorrect priority → human approval; wrong owner → transparent rationale and override; duplicate work → one-item-per-request guard; over-reliance → editable output and correction measurement. Production data privacy would require minimization, redaction and secure server-side model access. Planning dependencies include field mappings, engineering ownership, QA acceptance criteria, adapter access and security review. No compliance claims are made.

Demo metrics count synthetic session decisions. Potential production measures are hypotheses: I would measure time to first review/owner, reassignment rate, handoff completeness, blocked-work age and correction rate. No improvement is claimed.
