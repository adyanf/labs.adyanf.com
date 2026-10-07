# Adya Labs landing page — design

**Date:** 2026-10-07 · **Status:** approved

## Goal

A single-page "studio" site at labs.adyanf.com presenting Adya Labs: what it is,
how it works, what is being built, and how to get in touch. It must look like a
sibling of blog.adyanf.com (AstroPaper theme).

## Stack

- Astro 7 (static output) + Tailwind CSS 4 via `@tailwindcss/vite`.
- No UI framework, no client JS beyond the theme toggle script copied from the blog.

## Visual system (copied from the blog)

- Font: IBM Plex Mono (Google Fonts), used everywhere.
- Colour tokens as CSS variables on `html[data-theme]`:
  - light: fill `251 254 251`, text `40 39 40`, accent `0 108 172`, card `230 230 230`, border `236 233 233`
  - dark: fill `33 39 55`, text `234 237 243`, accent `255 107 1`, card `52 63 96`, border `171 75 8`
- Layout: one centred column, `max-w-3xl`, `px-4`; sections separated by a thin `<hr>`.
- Links: dashed underline, accent on hover. Same header/footer proportions.
- `public/toggle-theme.js` copied verbatim (localStorage + prefers-color-scheme).

## Page sections

1. **Header** — "Adya Labs" wordmark (links to `/`), `Blog ↗` link to blog.adyanf.com, theme toggle.
2. **Hero** — "Adya Labs" heading + two short paragraphs of intro copy.
3. **How the lab works** — three one-line principles.
4. **Building now** — project cards rendered from `PROJECTS` in `src/config.ts`.
   Initial entry: "Finance app (name TBA)", status *Building*, "helping people reach financial freedom".
5. **Say hi** — invitation copy, email link, social icons.
6. **Footer** — socials + "© Adya Naufal Fikri, {year}".

Plus a `404.astro` matching the blog's 404.

## Data

`src/config.ts` exports `SITE`, `SOCIALS` (same four as the blog) and
`PROJECTS: { name; status: "Concept" | "Building" | "Beta" | "Launched" | "Archived"; description; href? }[]`.

## Verification

- `astro check` and `astro build` pass with no errors.
- Visual check in a browser at phone (375px) and desktop widths, in light and dark themes.
