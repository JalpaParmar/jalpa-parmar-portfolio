# ReviewPulse V1

Independent portfolio prototype for Jalpa Parmar. Static HTML, CSS and vanilla JavaScript; no backend or external dependencies.

180 independently authored fictional reviews, June–September 2026, iOS/Android, versions 5.0–5.3. Eight primary themes. Labels are assigned scenario fixtures, not classifier predictions. Dates and versions are associated by construction; causal inference is not supported. Reviews are not users, and sample counts are not product failure rates.

Filters update metrics, insights, five charts and the explorer. Search affects the explorer only. Prioritization always uses the full dataset, with non-positive theme frequency / 180 as feedback share and hypothetical impact, relevance, confidence and effort. The XLSX uses the same formula and permits scenario changes. No state is sent or stored.

Run tests: node --test tests/analysis.test.js

Public journey: portfolio → dashboard → case study → four artifacts. No prominent source CTAs. V1 is complete; no expansion without a new request.
