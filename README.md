# pristis

Source of the PristisManagement website (www.pristismanagement.com).

The content was imported on 2026-11-19 from the Google Sites version of the
site (`sites.google.com/pristismanagement.com/www-pristismanagement-com`),
page by page, together with its images.

## Commands

```bash
npm install
npm run dev     # http://localhost:3001
npm run build   # static export to out/
npm run start   # serve out/ on http://localhost:3001
npm run lint
```

## Structure

- `app/site.ts` – site name, contact e-mail, LinkedIn link, navigation menu
- `app/components/PageHeader.tsx` – grey banner with the menu and page title
- `app/page.tsx` – home page; every other page is `app/<slug>/page.tsx`
  (`about`, `services`, `mentoring`, `for-startups`, `contact`)
- `public/images/` – logo (`logo.png` original, `logo-128.png`/`logo-512.png`
  resized), service banners `service-1..6.jpg`, header background `header-bg.jpg`

The site is built as a static export (`output: "export"` in `next.config.ts`),
so `out/` can be hosted on any static host.

## Publishing

Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds
and deploys `out/` to GitHub Pages.

While the site lives at https://bajorman.github.io/pristis/ the repository
variable `PAGES_BASE_PATH` is `/pristis`, so links and images get that prefix.
Once `www.pristismanagement.com` points at GitHub Pages, delete the variable
(`gh variable delete PAGES_BASE_PATH`) and set the custom domain in the
repository's Pages settings.
