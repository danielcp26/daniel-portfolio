# Daniel Portfolio (Vite + React + Tailwind)

## 1) Add/replace images
- Put your images in `public/images/`.
- Update `src/App.jsx` -> the `projects` array -> `image: './images/your-file.png'`.
- Add your profile photo to `public/images/profile.png`.
- Put your CV at `public/CV_DanielCP.pdf`.
- Use relative paths (`./images/...`) so GitHub Pages works on a subpath.

## 2) Install & Run locally
```bash
npm install
npm run dev
```

## 3) Build
```bash
npm run build
```

## 4) Deploy to GitHub Pages
- If this is a **project site** at `https://username.github.io/REPO_NAME/`,
  edit `vite.config.js` and set:
  ```js
  base: '/REPO_NAME/'
  ```
- Push the repo to GitHub.
- Use GitHub Actions:
  - Go to **Settings → Pages → Source: GitHub Actions**.
  - Commit the workflow below at `.github/workflows/deploy.yml`.

## 5) GitHub Actions workflow
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run build
      - run: cp dist/index.html dist/404.html
      - uses: actions/upload-pages-artifact@v3
        with: { path: 'dist' }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Notes
- To change project filters, edit the `filters` array in `src/App.jsx`.
- Dark mode state persists via `localStorage` key `dc_dark`.
