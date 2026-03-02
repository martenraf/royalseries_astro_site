# The Royal Series — Astro Site (EN/NL)

## Quick start
- `npm install`
- `npm run dev`
Open: http://localhost:4321

## Images
Put your images here:
- `public/img/book.jpg`  (book cover)
- `public/img/author.jpg` (author portrait)

## Build for hosting
- `npm run build`
Upload everything inside `dist/` to your web host (SFTP).

## Routes
- `/` redirects based on browser language (nl → /nl/, else /en/)
- `/en/` and `/nl/`
- Blog: `/en/blog/` and `/nl/blog/`
