# mathE Calculator

Simple Angular app that displays calculator results "backwards" — digits reversed. Example: result 1,234 becomes 4,321.

Quick start

1. Install dependencies:

```bash
cd mathE-calculator
npm install
```

2. Run locally:

```bash
npm start
# open http://localhost:4200
```

3. Build and deploy to GitHub Pages:

Set `homepage` or adjust base-href for your repository in the `predeploy` script if desired. Then:

```bash
npm run predeploy
npm run deploy
```

The project uses `angular-cli-ghpages` via the `deploy` script.

Static (no-Node) deploy option

If you'd rather avoid installing Node and Angular locally, open `static/index.html` — it contains a complete single-page mathE Calculator implemented in plain HTML/JS/CSS. To preview locally:

```bash
cd mathE-calculator/static
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

To deploy to GitHub Pages using the repository's `docs/` folder:

```bash
cp -r static/* ../docs/
git add docs
git commit -m "Add static mathE Calculator for GitHub Pages"
git push
```

Then in your GitHub repository settings, set Pages to serve from the `docs/` folder on the default branch.
