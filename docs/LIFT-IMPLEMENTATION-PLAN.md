# Lift: how we actually build it

*First draft, 30 Oct 2026. Goes with `YOUTH-DEVELOPMENT-SKETCH.md`. Mark it up and change anything.*

**Assumption to check:** you keep your full-time job, so this plan uses about **6–8 hours a week**: two weeknight evenings plus a Saturday morning. If you have more or less time, the dates stretch or shrink, but the order stays the same.

---

## The short version

| When | Focus | You'll know it's working when… |
|---|---|---|
| **Nov 2026** (weeks 1–4) | Get JayFTech's first 2–3 paying clients | Money in, real jobs done |
| **Dec 2026 – Jan 2027** | Bring in 2–3 juniors; every job they do earns a **Stamp** | 3 juniors, each with 2+ real stamps |
| **Feb – Mar 2027** | Show Stamp to employers | 2–3 employers say "I'd hire from this" |
| **Apr – Jun 2027** | Decide: grow Stamp, and/or apply for funding to pilot **Read** | A yes or no, based on evidence |
| **Any time** | Write **Choose** content in small pieces | 10 careers written up |

**The rule:** each step must show it works before the next one starts. No building ahead of demand.

---

## What's already done (30 Oct 2026)

- JayFTech website with services, wellness check, WhatsApp and email contact.
- **Stamp, version 1, is built as its own separate website** in the `stamp/` folder. It has a home page plus one clearly marked example profile at `/example`. It isn't online yet, because it needs its own Cloudflare Pages project.
  - What it shows: who the person is, each stamp (what was done, skills, who checked it, client feedback), a "Check this stamp" button that messages you on WhatsApp, a "Talk about hiring" button, and a Share button.
  - **How to add a real person:** copy the example in `stamp/src/data/stamps.ts`, change the details, set `isExample: false`, run `npm run build` inside `stamp/`, and upload `stamp/dist` to Cloudflare. A step-by-step is at the top of that file.
  - What it doesn't do yet: no logins, no database, and people can't edit their own profile. You add stamps by hand. **That's on purpose.** Right now you are the verifier, and hand-checking is what makes it trustworthy.

---

## What you need

### People
| Who | Why | When |
|---|---|---|
| **You** | Founder, first technician, verifier of every stamp | Now |
| **2–3 juniors** | First network members; they earn the first real stamps | Dec 2026 |
| **2–3 friendly employers** | To test whether Stamp actually helps people get hired | Feb 2027 |
| **A mentor or advisor** | Someone who has run a small business or worked in youth employment | Whenever you find one |
| **One school contact** | Only for Read, later | Apr 2027+ |

### Tools and money (Stamp phase)
| Item | Cost (rough, verify) | Notes |
|---|---|---|
| Domain(s), e.g. jayftech.co.za, plus one for Stamp | ~R100–R200 a year each | Makes links look trustworthy, e.g. stamp.jayftech.co.za/lerato (a subdomain costs nothing extra) |
| Cloudflare Pages hosting | Free | Already using |
| WhatsApp Business app | Free | Separate business number recommended |
| Google Workspace or Microsoft 365 business email | ~R100–R150 a month | Optional at first |
| Simple tracking sheet for juniors and jobs | Free | Google Sheets |
| **Total to start** | **Under R500** | |

### Paperwork and rules
- **Employment contract:** check the side-work and conflict-of-interest clauses before taking paid clients. *(Do this first.)*
- **Business registration:** fine as a sole proprietor at first. Register a Pty Ltd via CIPC (about R175) once juniors are paid through you.
- **SARS:** declare side income, and keep every invoice and receipt from day one.
- **POPIA:**
  - get written consent (a WhatsApp message counts if it's clear) before publishing anyone's Stamp;
  - name clients only with their OK;
  - let people ask for removal, and act on it.
- **Paying juniors:** use a simple written agreement per job: scope, pay, who's responsible for what. Don't call them employees unless they are.
- **Read (later):** children's data needs parent consent and stricter care. Get proper advice before it goes live.

---

## Month by month

### November 2026: first clients
- [ ] Check your employment contract (side work).
- [ ] Buy a domain and connect it to Cloudflare Pages.
- [ ] Re-upload JayFTech's `dist` so the live site has your contact details.
- [ ] Create a second Cloudflare Pages project for Stamp and upload `stamp/dist`.
- [ ] Message 15–20 people you know who run, or know, small businesses. Offer the wellness check-up.
- [ ] Do 2–3 jobs. Write a short before-and-after note for each (with permission).
- [ ] Set up the tracking sheet: client, job, date, who did what, feedback.

### December 2026 – January 2027: first juniors, first real stamps
- [ ] Pick 2–3 juniors from the "Register interest" messages, or from people you know.
- [ ] Give each one a practical challenge. Mark it, and it becomes their first stamp.
- [ ] Take them on real jobs with you (shadowed stamps).
- [ ] Publish their Stamp profiles (with consent). Replace the example profile.
- [ ] Ask each client one question after a job: "Would you have them back?" The answer becomes the feedback line.

### February – March 2027: test Stamp with employers
- [ ] Find 2–3 employers: IT companies, MSPs, small businesses, maybe someone at work who hires juniors.
- [ ] Show them a junior's Stamp. Ask:
  1. Would this make you more likely to interview them?
  2. What's missing?
  3. Would you pay to find people like this?
- [ ] Write down the answers word for word. They decide what to build next.

### April – June 2027: decide
**If employers say yes:**
- add a proper database and let juniors request stamps through a form you approve;
- add a simple employer search page;
- try charging a placement fee.

**If they say no:** find out why. Fix it, or keep Stamp as a free JayFTech perk.

**Read:** if you have the energy, write a one-page funding proposal for a single-school, one-term pilot, using the sketch and your Stamp results as evidence that you deliver.

---

## Technical roadmap for Stamp (only when demand is proven)

| Version | What | Built with | Trigger to build it |
|---|---|---|---|
| **v1 (done)** | Separate static site; profiles you edit by hand | `stamp/` folder, `stamp/src/data/stamps.ts` | — |
| v2 | Juniors submit a stamp request; you approve or reject it | Form plus a small database (Supabase or Firebase free tier) | More than about 5 people on Stamp |
| v3 | Verifiers confirm by tapping a link sent to them | Email or WhatsApp link with a one-time code | Clients other than you are verifying |
| v4 | Employer search and contact | Search page, employer accounts | 3+ employers asking to search |

---

## Things only you can decide
1. Do the names **Lift** and **Stamp** feel right?
2. Is 6–8 hours a week realistic?
3. Which 15–20 people will you message first in November?
4. Should Stamp stay under JayFTech, or become its own brand later?
