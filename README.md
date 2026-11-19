# pristis

Source of the PristisManagement website (www.pristismanagement.com).

A one-page site in English. The first commit holds a copy of the earlier
Google Sites version; the current layout replaced it.

## Commands

```bash
npm install
npm run dev     # http://localhost:3001
npm run build   # static export to out/
npm run start   # serve out/ on http://localhost:3001
npm run lint
```

## Structure

- `app/site.ts` – all copy: contact e-mail, LinkedIn link, menu, and the text
  of every section (hero, who we help, services, steps, about)
- `app/page.tsx` – the page layout, section by section; menu entries jump to
  the sections' `id`s
- `app/components/SiteHeader.tsx` – sticky top bar with the menu
- `app/components/Icon.tsx` – outline icons for the service cards
- `app/globals.css` – colour tokens (navy from the logo, teal accent)
- `public/images/` – logo (`logo.png` original, `logo-128.png`/`logo-512.png`
  resized), used as favicon and link preview; the logo artwork has a typo
  ("Managemeent"), so the header shows the name as text

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
