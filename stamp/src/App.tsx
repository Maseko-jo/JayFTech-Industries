import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BadgeCheck, Briefcase, GraduationCap, MapPin, MessageCircle, Share2, ShieldCheck } from 'lucide-react';
import { CloudBackground } from './components/CloudBackground';
import { Reveal } from './components/motion';
import { STAMP_PROFILES, findStampProfile } from './data/stamps';
import { whatsappLink } from './data/contact';
import { Stamp, StampProfile } from './types';

// Two kinds of page: "/" explains Stamp, "/<slug>" shows one person's profile.
const currentSlug = () => decodeURIComponent(window.location.pathname.replace(/^\/+|\/+$/g, ''));

export const App: React.FC = () => {
  const slug = currentSlug();
  const profile = slug ? findStampProfile(slug) : undefined;

  return (
    <div className="min-h-screen relative overflow-x-clip">
      <CloudBackground />
      <div className="relative z-10">
        <header className="max-w-5xl mx-auto px-4 sm:px-8 pt-6">
          <div className="glass rounded-full pl-3 pr-2 py-2 flex items-center justify-between">
            <a href="/" className="font-display font-bold text-lg flex items-center gap-2">
              <StampMark /> Stamp
            </a>
            {slug ? (
              <a href="/" className="btn-glass px-4 py-2 text-sm">
                <ArrowLeft className="w-4 h-4" /> All profiles
              </a>
            ) : (
              <a href={whatsappLink(JOIN_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-ink px-5 py-2.5 text-sm">
                Get stamped
              </a>
            )}
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          {!slug && <Home />}
          {slug && profile && <ProfileView profile={profile} />}
          {slug && !profile && <NotFound />}
        </main>

        <footer className="max-w-5xl mx-auto px-4 sm:px-8 pb-10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-neutral-400">
          <span>© {new Date().getFullYear()} Stamp · Started by Jordan Maseko, JayFTech Industries</span>
          <span>Every stamp is checked by a real person</span>
        </footer>
      </div>
    </div>
  );
};

const JOIN_MESSAGE = "Hi Jordan, I'd like to start earning stamps. Here's what I studied and what I can do:";
const EMPLOYER_MESSAGE = "Hi Jordan, I hire junior tech people and I'd like to hear more about Stamp.";

const StampMark: React.FC = () => (
  <span className="w-8 h-8 rounded-full bg-ink text-white inline-flex items-center justify-center font-display font-bold text-sm">S</span>
);

/* ---------------------------------- Home --------------------------------- */

const HOW = [
  ['Do real work', 'A client job, a job shadowed with an experienced tech, or a practical challenge that gets marked.'],
  ['Someone checks it', 'The person who saw the work confirms it. No stamp without a named checker.'],
  ['It goes on your Stamp', 'What you did, the skills it proves, and what the client said about you.'],
  ['Share one link', 'Send it with your CV. Anyone can check a stamp by quoting its code.'],
];

const RULES = [
  ['No stamp without a checker', 'Every stamp names who confirmed it and how. If nobody saw it, it isn’t a stamp.'],
  ['Every stamp can be checked', 'Each one has a code. Quote it and you’ll get a straight answer about it.'],
  ['Your profile, your say', 'Nothing goes up without your OK, and you can ask for it to come down at any time.'],
  ['Clients stay private', 'Stamps describe the kind of business, not its name, unless the client agrees.'],
];

const Home: React.FC = () => (
  <>
    <Reveal className="text-center max-w-3xl mx-auto">
      <div className="eyebrow mb-6">
        <BadgeCheck className="w-3.5 h-3.5" /> A first job passport for young South African techs
      </div>
      <h1 className="font-display font-bold tracking-tight text-5xl sm:text-7xl text-ink leading-[1.02]">
        Proof you can
        <br />
        do the work.
      </h1>
      <p className="mt-6 text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
        Every job wants experience. Nobody gives you the first one. Stamp is a profile where every entry is real
        work, checked by the person who saw it done. A CV that can’t lie.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-9">
        <a href={whatsappLink(JOIN_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-ink px-7 py-4 text-sm">
          <MessageCircle className="w-4 h-4" /> Start earning stamps
        </a>
        <a href={`/${STAMP_PROFILES[0].slug}`} className="btn-glass px-7 py-4 text-sm">
          See a sample profile <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </Reveal>

    <section className="mt-24">
      <Reveal className="mb-8">
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl">How a stamp is earned</h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {HOW.map(([title, text], i) => (
          <Reveal key={title} delay={i * 70}>
            <div className="glass lift rounded-[28px] p-6 h-full">
              <span className="text-xs text-neutral-400 font-display">Step {i + 1}</span>
              <p className="font-display font-bold text-lg mt-1">{title}</p>
              <p className="text-sm text-neutral-600 mt-1.5 leading-relaxed">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="mt-24">
      <Reveal className="mb-8 flex items-end justify-between gap-4">
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl">Profiles</h2>
        <p className="text-sm text-neutral-500 max-w-xs text-right hidden sm:block">Real profiles go up as people earn their first stamps.</p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-3">
        {STAMP_PROFILES.map(p => (
          <Reveal key={p.slug}>
            <a href={`/${p.slug}`} className="glass lift press rounded-[28px] p-5 flex items-center gap-4">
              <Avatar initials={p.initials} />
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold flex items-center gap-2">
                  {p.name} {p.isExample && <ExampleTag />}
                </p>
                <p className="text-sm text-neutral-500 truncate">{p.headline}</p>
                <p className="text-xs text-neutral-400 mt-1">{p.stamps.length} checked stamps · {p.area}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="mt-24 grid lg:grid-cols-2 gap-4">
      <Reveal>
        <div className="glass-dark rounded-[32px] p-7 sm:p-9 h-full flex flex-col">
          <GraduationCap className="w-7 h-7 text-white/70" />
          <p className="font-display font-bold text-2xl mt-4">Studied tech but stuck at “experience required”?</p>
          <p className="text-white/60 text-sm mt-2 leading-relaxed flex-1">
            Start with a practical challenge. Then shadow real jobs, then take your own. Each step earns a stamp,
            and your profile grows with every one.
          </p>
          <a href={whatsappLink(JOIN_MESSAGE)} target="_blank" rel="noopener noreferrer" className="press mt-6 self-start inline-flex items-center gap-2 rounded-full bg-white text-ink font-semibold px-6 py-3.5 text-sm hover:bg-neutral-100">
            Start earning stamps <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <div className="glass-strong rounded-[32px] p-7 sm:p-9 h-full flex flex-col">
          <Briefcase className="w-7 h-7 text-neutral-500" />
          <p className="font-display font-bold text-2xl mt-4">Hiring juniors?</p>
          <p className="text-neutral-600 text-sm mt-2 leading-relaxed flex-1">
            Don’t guess from a CV. See exactly what someone has done, who checked it and what the client said.
            Tell me what you’re looking for and I’ll point you to people who fit.
          </p>
          <a href={whatsappLink(EMPLOYER_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-ink mt-6 self-start px-6 py-3.5 text-sm">
            <MessageCircle className="w-4 h-4" /> Talk to me
          </a>
        </div>
      </Reveal>
    </section>

    <section className="mt-24">
      <Reveal className="mb-8">
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl">How we keep it honest</h2>
        <p className="text-neutral-600 mt-2 max-w-xl">A stamp is only worth something if people can trust it. These rules don’t bend.</p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-3">
        {RULES.map(([title, text], i) => (
          <Reveal key={title} delay={i * 70}>
            <div className="glass rounded-[28px] p-6 h-full flex gap-4">
              <ShieldCheck className="w-6 h-6 shrink-0 text-ink" />
              <div>
                <p className="font-display font-bold">{title}</p>
                <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </>
);

/* --------------------------------- Profile -------------------------------- */

const ProfileView: React.FC<{ profile: StampProfile }> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const skills = Array.from(new Set(profile.stamps.flatMap(s => s.skills)));

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${profile.name} on Stamp`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // the visitor closed the share sheet; nothing to do
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Reveal>
        <div className="glass-strong rounded-[32px] p-6 sm:p-9">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <Avatar initials={profile.initials} large />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display font-bold text-3xl sm:text-4xl">{profile.name}</h1>
                {profile.isExample && <ExampleTag />}
              </div>
              <p className="text-neutral-600 mt-1">{profile.headline}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm text-neutral-500">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {profile.area}</span>
                <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4" /> {profile.studied}</span>
              </div>
            </div>
          </div>
          <p className="text-neutral-700 mt-6 leading-relaxed">{profile.about}</p>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="glass rounded-3xl p-4">
              <p className="font-display font-bold text-3xl">{profile.stamps.length}</p>
              <p className="text-xs text-neutral-500">checked stamps</p>
            </div>
            <div className="glass rounded-3xl p-4">
              <p className="font-display font-bold text-3xl">{skills.length}</p>
              <p className="text-xs text-neutral-500">skills shown in real work</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-5">
            {skills.map(s => (
              <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/80 border text-neutral-600">{s}</span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-2 mt-7">
            <a
              href={whatsappLink(`Hi Jordan, I saw ${profile.name}'s Stamp profile and would like to talk about work for them.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink py-3.5 text-sm"
            >
              <MessageCircle className="w-4 h-4" /> Talk about hiring
            </a>
            <button onClick={share} className="btn-glass py-3.5 text-sm">
              <Share2 className="w-4 h-4" /> {copied ? 'Link copied' : 'Share this Stamp'}
            </button>
          </div>
        </div>
      </Reveal>

      <h2 className="font-display font-bold text-2xl mt-12 mb-4">Stamps</h2>
      <div className="relative space-y-4 before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-px before:bg-neutral-300">
        {[...profile.stamps].reverse().map((s, i) => (
          <Reveal key={s.id} delay={i * 70}>
            <StampCard stamp={s} owner={profile.name} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

const StampCard: React.FC<{ stamp: Stamp; owner: string }> = ({ stamp, owner }) => (
  <div className="flex gap-4">
    <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-ink text-white flex items-center justify-center">
      <BadgeCheck className="w-5 h-5" />
    </div>
    <div className="glass lift rounded-[28px] p-5 sm:p-6 flex-1">
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
        <span>{stamp.kind}</span>
        <span>·</span>
        <span>{formatMonth(stamp.date)}</span>
        <span className="ml-auto font-mono normal-case tracking-normal">{stamp.id}</span>
      </div>
      <p className="font-display font-bold text-lg mt-2">{stamp.title}</p>
      <p className="text-sm text-neutral-500">{stamp.where}</p>
      <ul className="mt-3 space-y-1 text-sm text-neutral-700 list-disc pl-5">
        {stamp.whatWasDone.map(w => <li key={w}>{w}</li>)}
      </ul>
      {stamp.feedback && (
        <blockquote className="mt-4 rounded-2xl bg-white/70 border px-4 py-3 text-sm italic text-neutral-700">
          “{stamp.feedback}”
        </blockquote>
      )}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {stamp.skills.map(s => (
          <span key={s} className="text-[11px] px-2 py-0.5 rounded-full bg-white/80 border text-neutral-600">{s}</span>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <span className="flex items-center gap-1.5 text-neutral-600">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Checked by <strong className="font-semibold">{stamp.verifiedBy}</strong>, {stamp.verifierRole}</span>
        </span>
        <a
          href={whatsappLink(`Hi Jordan, I'd like to check stamp ${stamp.id} on ${owner}'s Stamp profile.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="press text-neutral-500 hover:text-ink underline underline-offset-2 shrink-0"
        >
          Check this stamp
        </a>
      </div>
    </div>
  </div>
);

/* --------------------------------- Bits ---------------------------------- */

const NotFound: React.FC = () => (
  <div className="glass rounded-[32px] p-10 text-center max-w-xl mx-auto">
    <p className="font-display font-bold text-2xl">No Stamp profile here</p>
    <p className="text-neutral-600 mt-2">The link might be wrong, or the profile was taken down.</p>
    <a href="/" className="btn-ink px-6 py-3 text-sm mt-6">See all profiles</a>
  </div>
);

const Avatar: React.FC<{ initials: string; large?: boolean }> = ({ initials, large }) => (
  <div
    className={`${large ? 'w-20 h-20 text-2xl rounded-3xl' : 'w-12 h-12 rounded-2xl'} shrink-0 bg-gradient-to-br from-neutral-200 to-white border flex items-center justify-center font-display font-bold text-neutral-500`}
  >
    {initials}
  </div>
);

const ExampleTag: React.FC = () => (
  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-neutral-200/70 text-neutral-500">
    Example
  </span>
);

const formatMonth = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return new Date(y, m - 1).toLocaleDateString('en-ZA', { month: 'short', year: 'numeric' });
};

export default App;
