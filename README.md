# khvdigital.com

Static site for KHV Digital, featuring the Comms: Pilot Training app.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (GitHub Pages via Actions)

This repo includes a workflow that builds with Vite and deploys to GitHub Pages on pushes to `main`.

### Steps

1. Create a new GitHub repository and push this code.
2. In the repo Settings → Pages, ensure Source is set to "GitHub Actions".
3. Add a custom domain `khvdigital.com` in Pages settings.
4. Configure DNS A/AAAA records at your registrar to point the apex domain to GitHub Pages.

The `public/CNAME` file is included so the CNAME is preserved on deploy.
