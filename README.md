# pristis

Source of the PristisManagement website (www.pristismanagement.com).

A one-page site in English. The first commit holds a copy of the earlier
Google Sites version; later layouts replaced it.

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
  of every section (hero, problems, service pillars, AI + R&D relief, packages,
  results, steps, about, FAQ, contact)
- `app/page.tsx` – the page layout, section by section; menu entries jump to
  the sections' `id`s
- `app/components/SiteHeader.tsx` – sticky top bar; the mobile menu is an
  overlay that closes after a link is chosen or on Escape
- `app/components/BrCalculator.tsx` – estimate of the R&D relief (ulga B+R)
  tax saving: staff costs at 200%, other qualifying costs at 100%, times the
  chosen tax rate
- `app/components/Logo.tsx` – ship mark (Latin *pristis*: a fast-sailing
  warship; sleek hull with a ram, forward-leaning sail, wake) and wordmark;
  the same mark
  is `public/images/icon.svg` (favicon)
- `app/components/Icon.tsx` – outline icons
- `app/globals.css` – colour tokens (paper, navy, copper) and fonts
  (Fraunces for headings, Manrope for text, self-hosted by next/font)
- `public/images/` – portraits resized from the originals in
  `C:\HAI\PristisManagement\zdjecia` and `og.jpg` (1200x630 link preview)

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
