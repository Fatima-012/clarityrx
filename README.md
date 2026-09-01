# ClarityRx — Next.js site

A Next.js (App Router) rebuild of the ClarityRx site, built for Vercel. The
contact form posts to a real Vercel serverless function
(`app/api/contact/route.js`) instead of a third-party form service.

## Run it locally

```
npm install
npm run dev
```

Open http://localhost:3000. Edit any file under `app/` or `components/` and
the page updates automatically.

To test a production build locally (closer to what Vercel actually runs):

```
npm run build
npm start
```

## Deploy to Vercel

**Option A — Vercel CLI (fastest):**

```
npm install -g vercel
vercel
```

Follow the prompts (log in, link/create a project). Running `vercel` deploys
a preview; `vercel --prod` deploys to your production URL
(`your-project.vercel.app` by default, or a custom domain you add later).

**Option B — Git-connected (better for ongoing edits):**

1. Push this folder to a new GitHub/GitLab/Bitbucket repo (don't commit
   `node_modules` or `.next` — the included `.gitignore` already excludes
   them).
2. In the Vercel dashboard: **Add New → Project**, import the repo.
3. Framework preset auto-detects as **Next.js** — leave build settings as
   the defaults. Deploy.
4. Every future push updates the live site automatically.

## Turn on real contact-form emails

The form works immediately (submissions are logged to the function's
console output), but to actually receive them by email:

1. Create a free account at [resend.com](https://resend.com) (100
   emails/day, 3,000/month free, no card required) and generate an API key.
2. In your Vercel project: **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` — the key from Resend.
   - `CONTACT_TO_EMAIL` — the inbox you want submissions sent to.
3. Redeploy (Vercel → Deployments → ⋯ → Redeploy, or just push again if
   Git-connected) so the new environment variables take effect.

Until you add a verified sending domain in Resend, emails send from
`onboarding@resend.dev`, which works fine for receiving notifications — just
not for sending "as" your own domain. Resend's dashboard walks you through
verifying a domain whenever you're ready for that.

If a submission ever seems to go missing, check **Vercel → your project →
Logs** for the `/api/contact` function — successful/failed sends and
un-configured-key submissions all get logged there.

## Editing the content yourself

- **Text content** — almost everything lives in `app/page.js`, broken into
  commented sections (Hero, What I Do, How It Works, Why ClarityRx,
  Samples, Drafts, Academic Integrity, Contact). Search for `EDIT:` to find
  the spots meant to change as the business evolves.
- **Colors** — `app/globals.css`, inside the `:root { ... }` block at the
  top. Every button, accent, and highlight color pulls from these
  variables.
- **Fonts** — the Google Fonts `<link>` in `app/layout.js`'s `<head>`, plus
  the matching `--font-serif` / `--font-sans` / `--font-mono` values in
  `app/globals.css`.
- **Logo / favicons** — everything lives in `public/assets/`. Replace
  `logo.png` with a same-aspect-ratio image to swap the logo everywhere
  (header, footer, thank-you page, preloader doesn't use the image file —
  it's a hand-drawn pencil icon in `components/Preloader.js`).
- **Footer email** — `hello@clarityrx.com` in `components/SiteFooter.js` is
  a placeholder; swap it for your real inbox.

### Adding a new section

Copy an existing `<section className="section" id="...">...</section>`
block in `app/page.js`, give it a new `id`, and add a matching link in the
nav arrays at the top of `components/SiteHeader.js` and
`components/SiteFooter.js` (`NAV_LINKS` / `FOOTER_LINKS`). Reveal-on-scroll
and section spacing apply automatically to any element with `className="reveal"`.

## What's different from a plain static site

- **Real backend** — `/api/contact` is a genuine serverless function
  (runs on Vercel's infrastructure), not a client-side-only form.
- **Opening intro** — the pencil "writes" the ClarityRx wordmark on load
  (`components/Preloader.js`), then hands off to the rest of the page's
  scroll animations. Skips instantly for visitors with reduced motion
  enabled, and degrades gracefully with JavaScript off (the form still
  works via a normal POST either way).
- **Custom pill cursor** — `components/PageFX.js`, active only on devices
  with a real mouse; touch devices never load this behavior.
- **Server-rendered pages** — the homepage and thank-you page are rendered
  by Next.js (some parts server-side, some client-side for interactivity),
  rather than being static files Netlify/Cloudflare would just hand back
  unchanged.

## Notes

- No database or persistent storage is set up — submissions are only ever
  emailed (once configured) or logged; nothing is stored for you to browse
  later in a dashboard. If you want submissions saved somewhere queryable,
  the most common next step is adding Vercel Postgres or a service like
  Airtable, but that's a bigger addition than what's here now.
- Samples and Drafts sections are intentionally placeholder ("Coming Soon")
  cards for now — swap them for real anonymized work whenever it's ready.
