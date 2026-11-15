# Lift: closing the gap from Grade 1 to first job

*Working names: **Lift** is the whole ladder, and **Stamp** is the first job passport (was "Prove"). Change them freely.*

*First draft, 30 Oct 2026. Next steps and dates are in `LIFT-IMPLEMENTATION-PLAN.md`. Written to be torn up. Mark it up, cross things out, move things around.*

---

## The short version

South Africa loses young people at three points:

1. **Age 7–10: they don't learn to read properly.** Everything after that gets harder.
2. **Age 14–15: they make a subject choice (Grade 9) with nobody to guide them.** It quietly closes doors they didn't know existed.
3. **Age 18–25: they can't get a first job, because every job wants experience.** And they can't get experience without a job.

Most apps and programmes fix one point in isolation. The idea here is a **ladder**: one connected path that catches a young person at each of those three points and hands them to the next step. JayFTech already sits at the top of the ladder, where real work and experience happen.

| Step | Age | Gap | Working name | What it does |
|---|---|---|---|---|
| 1 | 6–11 | Can't read or count well | **Read** | Daily 10-minute reading and maths practice on WhatsApp, in home language |
| 2 | 13–16 | Wrong subject choices, no guidance | **Choose** | Grade 9 subject and career guide, with bursary and TVET routes |
| 3 | 17–25 | No experience, no proof | **Stamp** | A "first job passport" of verified small tasks and references |
| 4 | 18+ | No first job | **Work (JayFTech)** | Real paid jobs under supervision |

**My recommendation:** don't build all four. Build **Stamp** first, because it plugs straight into JayFTech and can make money. Pilot **Read** with one school, using grant funding, because that's where the biggest impact is. Keep **Choose** as a content project you can run cheaply alongside.

---

## Step 1: Read (primary school, ages 6–11)

### The problem
- In PIRLS 2021, roughly 8 in 10 Grade 4 learners could not read for meaning. *(Verify before quoting.)*
- Many children learn to read in a language they don't speak at home.
- Parents want to help but don't know how. Many work long hours, and some can't read well themselves.
- Most learning apps assume data, a tablet, and a child who can already read.

### The idea
A **daily 10-minute habit on WhatsApp**, run through the parent's phone.

- **Each day:** a short story, or a voice note that reads the story aloud, in the child's home language, followed by 3 simple questions.
- **For maths:** 5 quick sums with picture options, like counting fruit or giving change at a spaza.
- **For the parent:** a weekly message such as "Thandi practised 4 days this week. Ask her about the story of the goat." It gives the parent something easy to do, with no teaching required.
- **Streaks and small rewards:** a certificate the teacher can print, airtime vouchers if a sponsor pays for them.

### Why WhatsApp
- WhatsApp is already on almost every household phone.
- Nothing to install, it works on cheap phones, and the data use is small. Some telecom companies zero-rate approved education numbers, which is worth asking about.
- Parents are already on it, so it reaches them too.

### Smallest version to test (one term)
- **Scope:** one school, one grade (Grade 2 or 3), one home language, about 30 families.
- **Content:** 40 short stories and 40 maths sets, written or sourced (see partners).
- **Tech:** WhatsApp Business API through a provider (Twilio, 360dialog, Clickatell, or Turn.io, which many SA NGOs use), plus a simple database.
- **Measure:** a short reading check at the start and end of term, compared against a class that didn't use it.

### Hard parts
- **Shared phones:** the parent may be at work with the phone all day. Let families choose the time slot, for example 18:30.
- **Voice checking:** checking a child reading aloud in isiZulu or Sesotho isn't reliable yet. Start with listen-and-choose, then add voice later.
- **Content quality:** stories must be good and age-right. Don't write them all yourself. Partner (see below).
- **Child data (POPIA):** a parent consents and you hold the bare minimum. A first name and grade are enough. No photos or voice recordings stored until you have proper consent and security.

### Who pays
Parents mostly can't. This is a **grant or sponsor-funded** product:
- corporate social investment (CSI) budgets, especially banks and telecom companies;
- education foundations;
- B-BBEE skills development spend.

---

## Step 2: Choose (high school, ages 13–16)

### The problem
- The Grade 9 choice between Maths and Maths Literacy, and which sciences to take, decides which careers stay open. Many learners and parents don't know this.
- Many learners don't know TVET colleges, learnerships or apprenticeships exist, or how NSFAS and bursaries work.
- School career guidance is thin, or missing entirely.

### The idea
A **simple, honest guide**: a website plus a WhatsApp flow.

- **"I want to be a ___" works backwards:** for example, an electrician needs a trade test, which goes through a TVET college or apprenticeship, which needs these Grade 10 subjects.
- **"I'm taking these subjects" works forwards:** it shows which careers stay open and which close.
- **Money routes:** NSFAS, bursaries by field, and learnerships that pay you to learn.
- **Real stories:** short clips of young South Africans in actual jobs (electrician, IT technician, nurse, coder, plumber) saying what it pays and what a day looks like.

### Smallest version to test
- **Scope:** 30 careers, picked for demand plus a mix of degree and non-degree routes.
- **Format:** a static website (same tech as the JayFTech site) plus a WhatsApp menu.
- **Test:** run a session with one Grade 9 class and see if subject choices change.

### Hard parts
- Information goes out of date, so plan a yearly review.
- It needs to be honest about pay and job availability, not just inspiring.

### Who pays
Cheap to run. Possible sponsors: SETAs, universities and TVETs wanting enrolments (be careful about bias), companies needing artisans.

---

## Step 3: Stamp (young people, ages 17–25) ← **recommended first build**

### The problem
- Young people have certificates but **nothing that proves they can do the work**.
- Employers don't trust CVs and won't take a chance on someone without experience.
- Volunteer work, side jobs and small gigs aren't recorded anywhere credible.

### The idea
A **"first job passport"**: a phone-friendly profile where every entry is **verified by someone real**.

- **Verified tasks:** "Set up Microsoft 365 for a 6-person office". Verified by Jordan (JayFTech), with a client rating.
- **Practical challenges:** short real-world tasks such as "fix this broken network config" or "build this one-page site". These are checked, not just submitted.
- **References:** a supervisor or client confirms with one tap.
- **Shareable link:** something to send to an employer instead of, or with, a CV.

### Why start here
- **JayFTech creates the evidence.** Every junior who shadows or does a job builds a passport entry. The two businesses feed each other.
- **It can make money.** Employers or recruiters pay to search verified juniors, or pay a placement fee.
- **It's small enough for you to build** with the skills you already have (web app, forms, a database).
- It's easy to explain: "a CV that can't lie."

### Smallest version to test
- **Scope:** only JayFTech's own juniors at first, about 5–10 people.
- **Features:** a profile, a list of verified jobs, a one-tap reference request, and a public share link.
- **Tech:** start very simple (a Google Form plus Sheet, or Airtable) to prove people want it. Build the real app only once 2–3 employers say "yes, I'd use this to hire."

### Hard parts
- **Trust:** the passport is only worth something if verification is strict. If anyone can fake an entry, it's dead.
- **Chicken and egg:** youth need employers looking at it, and employers need enough youth on it. JayFTech solves the youth side early, so you'd have to find 2–3 friendly employers yourself.
- **Competition:** SAYouth.mobi and Harambee do matching at scale. Your difference is that you **verify real work**, not just list profiles. Consider partnering with them instead of competing.

### Who pays
- employers and recruiters (search or placement fee);
- later, learnership providers who want proof their programme worked.

---

## Step 4: Work (JayFTech)
Already in motion. See `BUSINESS-PLAN.md`. The link is simple: **every JayFTech job is also a Stamp entry.**

---

## How it fits together

```
Primary school        High school          School leaver / grad        Working
     |                     |                        |                      |
   READ   ------->      CHOOSE    ------->        STAMP     ------->     WORK
 (can read,          (right subjects,         (verified proof        (JayFTech jobs,
  can count)          knows the routes)        of real work)          paid experience)
     ^                                              |                      |
     |                                              +---- feeds back ------+
     +-- young techs from WORK can later mentor or volunteer in READ ----+
```

The loop at the end matters. Young people who got their start through JayFTech could later volunteer, tutor or build features for Read and Choose. That's the "for South Africa's youth" story, and it's true, not marketing.

---

## Partners worth talking to
*(These are people to approach, not confirmed relationships.)*

- **Content:** Funda Wande, Nal'ibali (reading for pleasure, home-language stories), Book Dash (free openly licensed children's books), African Storybook (openly licensed stories in many African languages).
- **Youth employment:** Harambee, SAYouth.mobi.
- **Practice platforms:** Siyavula (high school maths and science).
- **Funding:** bank and telecom CSI programmes, SETAs (especially MICT SETA for tech), the National Youth Development Agency (NYDA).
- **Schools:** start with one school you have a personal link to. A principal who knows you is worth more than any cold email.

---

## Risks across the whole idea

| Risk | Why it matters | What to do |
|---|---|---|
| Spreading too thin | Four products is four businesses | Build one at a time. Stamp first. |
| Child data (POPIA) | Under-18s are high-risk data | Parent consent, minimal data, get advice before Read goes live |
| "App won't fix it" | Tech alone rarely fixes education | Pair it with people: parents, teachers, mentors |
| Funding dependency | Read relies on sponsors | Keep Stamp and JayFTech as the money makers |
| Your time | You have a full-time job | Check your contract; keep pilots tiny |
| Stats in public | Wrong numbers kill credibility | Verify every figure before using it |

---

## Suggested order (rough)

1. **Now – 3 months:** JayFTech first clients. Track every junior's work in a simple sheet (this is Stamp version 0).
2. **3–6 months:** turn that sheet into a basic Stamp profile page. Find 2–3 employers to test it.
3. **6–12 months:** if Stamp works, apply for small grants or CSI funding to pilot Read at one school for one term.
4. **Alongside, whenever there's time:** build Choose as content on a simple site.

---

## Questions for you to decide

1. **Which step pulls at you most?** Your energy matters more than my ranking.
2. **Business or social enterprise?** Read is probably a non-profit or grant project. Stamp and JayFTech can be businesses. Do you want one company or two?
3. **Which school or community** could you pilot Read in? Do you have a personal link?
4. **Which home language** first?
5. **Under the JayFTech name, or a separate brand?** A kids' reading tool under an IT company name may confuse people.
6. **How many hours a week** can you honestly give this right now?

---

## Things to verify before anything goes public
- PIRLS 2021 reading figure (roughly 81% of Grade 4 learners below the reading-for-meaning benchmark).
- Current youth unemployment rate (Stats SA QLFS, latest quarter).
- Matric dropout or completion rate.
- Whether WhatsApp education numbers can be zero-rated with SA networks, and the cost.
- WhatsApp Business API pricing for the chosen provider.
