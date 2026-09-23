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
- Add your GitHub profile URL when available.
- Add a portfolio-safe resume file if you want a Resume button.
- Replace/expand case-study pages as the working demos and screenshots are created.

All portfolio case studies are independent implementations using synthetic/public data and original artifacts.


## Phase 1 website

The site uses plain HTML and CSS, with no build step, runtime JavaScript or external font dependencies. Keep the HTML pages and style.css at the repository root. Links are relative so the site works under the GitHub Pages repository path.

Project pages are concept overviews; working demos are planned. A resume download should be added only after a portfolio-safe file is supplied. Professional facts come from PORTFOLIO_CONTEXT.md and the existing site.

### Local preview and checks
Serve the repository root with a static HTTP server (for example, python -m http.server 8000), then visit localhost:8000. Check all four project links and their return links, keyboard Tab navigation and the skip link, and layouts at 320px, 390px, 768px and 1440px. Navigation stays visible without JavaScript. Reduced-motion and print styles are included.

Canonical and social URLs use https://jalpaparmar.github.io/jalpa-parmar-portfolio/. Update those and sitemap.xml if the deployment domain changes.
