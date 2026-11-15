# Stamp

A first job passport for young South African techs. Every entry is real work, checked by the person who saw it done.

Its own website, separate from the JayFTech site. Same look (cloud white, ink black, frosted glass).

## Run it

```
npm install
npm run dev      # preview at http://localhost:5174
npm run build    # makes the dist folder
```

## Pages

- `/` explains Stamp, lists profiles, and has a section for employers and one for the honesty rules.
- `/<slug>` shows one person, e.g. `/example`.

## Add a real person

Edit `src/data/stamps.ts`. The steps are at the top of that file. Then `npm run build` and upload the new `dist`.

## Go live

Create a **new, separate** Cloudflare Pages project (not the JayFTech one) and drag in **only the `dist` folder**.
Profile links like `/lerato` work because Cloudflare serves `index.html` for any page it doesn't find.
