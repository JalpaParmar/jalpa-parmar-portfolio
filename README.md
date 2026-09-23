# Jalpa Parmar — GitHub Pages Portfolio

Original professional portfolio for Technical Project Management, Product Management and AI/Automation roles.

## Publish on GitHub Pages
1. Create a new public repository, e.g. `jalpa-parmar-portfolio`.
2. Upload all files from this folder to the repository root.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then Save.
6. GitHub will show the public portfolio URL after deployment.

## Before publishing
- Professional profile links are included.
- Add a portfolio-safe resume file if you want a Resume button.
- Replace/expand case-study pages as the working demos and screenshots are created.

TriagePilot AI is a working browser prototype; other project previews remain independent concept studies. All use synthetic/sample data and original artifacts.


## Phase 1 website

The site uses plain HTML/CSS and a small progressive-enhancement script, with no build step or external font dependencies. Keep the HTML pages and style.css at the repository root. Links are relative so the site works under the GitHub Pages repository path.

TriagePilot includes a case study and working demo; other project pages are concept overviews. A resume download should be added only after a portfolio-safe file is supplied. Professional facts come from PORTFOLIO_CONTEXT.md and the existing site.

### Local preview and checks
Serve the repository root with a static HTTP server (for example, python -m http.server 8000), then visit localhost:8000. Check all four project links and their return links, keyboard Tab navigation and the skip link, and layouts at 320px, 390px, 768px and 1440px. Navigation stays visible without JavaScript. Reduced-motion and print styles are included.

Canonical and social URLs use https://jalpaparmar.github.io/jalpa-parmar-portfolio/. Update those and sitemap.xml if the deployment domain changes.


## Light editorial redesign

The homepage includes a professional portrait, synthetic project previews, an accessible sticky navigation, career timeline and capability groups. Case studies share the same styles and preview components. Dashboard values are explicitly synthetic, not professional impact metrics.

Keep site.js alongside the root HTML and style.css. JavaScript only enhances the mobile menu (including Escape and link-close behavior). With scripting disabled all navigation links remain available. CSS hover transitions respect reduced motion; content never depends on reveal animations.

Resume links are intentionally not rendered until a valid file is supplied; insertion points are documented in index.html. The supplied professional portrait is stored in assets/images. No certification logos, API keys or third-party runtime dependencies are required. Career date ranges are preserved from the previous homepage; no separate dates are invented for roles grouped within those periods. Flutter and React Native remain labeled as exposure.

## TriagePilot AI Version 2

[Launch the interactive demo](projects/opspilot/index.html) · [Case study](opspilot.html) · [Technical README](projects/opspilot/README.md).

Static, dependency-free HTML/CSS/JavaScript. Human review gates engineering creation; all fixtures and metrics are synthetic. No AI API or external integration is called.
