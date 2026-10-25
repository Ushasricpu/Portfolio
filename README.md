# Ushasri Mogadali — Portfolio

A responsive personal portfolio built with React + Vite. Includes light/dark themes, project cards, experience, skills, publications, achievements, and contact links.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed in the terminal.

## Create a production build
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## Personalize before publishing
1. Replace `public/images/profile-placeholder.svg` with your own portrait, or add `profile.jpg` and update the image path in `src/main.jsx`.
2. Put your resume PDF in `public/resume.pdf`. A copy of the resume supplied for this project is included as `public/resume.pdf`.
3. Update the LinkedIn and GitHub URLs in `src/main.jsx` to your actual profile URLs.
4. Add verified public project/demo/repository URLs to the project data. Buttons are intentionally omitted when a URL is not configured.
5. Confirm you have permission to publish any project screenshots or client-related details.

## Deploy to GitHub Pages
1. Create a GitHub repository and push this project.
2. In the repository, open **Settings → Pages**.
3. Choose **GitHub Actions** as the build and deployment source.
4. Add the workflow below as `.github/workflows/deploy.yml` (create the folders if needed).
5. Push to your default branch. After the workflow succeeds, GitHub Pages will show the site URL.

If deploying to a repository URL such as `https://username.github.io/repository-name/`, set `base` in `vite.config.js` to `'/repository-name/'` instead of `'./'` if required by your deployment setup. For a user/organization site (`https://username.github.io/`), use `'/'`.

## GitHub Pages workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy portfolio
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Project content
Project descriptions and experience summaries are based on the supplied resume. Project links are not invented; add them only when verified.
