import React from 'react';
import { Sprout, Shield, Globe2, RefreshCcw, Quote } from 'lucide-react';
import { Reveal } from './motion';

const PILLARS = [
  {
    icon: Sprout,
    name: 'Foundation',
    text: 'Devices, Wi-Fi and backups that just work, so a broken laptop is an inconvenience, not a disaster.',
  },
  {
    icon: Shield,
    name: 'Protection',
    text: 'Strong logins, two-step verification and basic POPIA hygiene, so one phishing email can’t sink you.',
  },
  {
    icon: Globe2,
    name: 'Presence',
    text: 'A proper email address and a website that works on a phone, so customers trust you at first glance.',
  },
  {
    icon: RefreshCcw,
    name: 'Rhythm',
    text: 'A small, regular check-up instead of waiting for things to break. Healthy tech is a habit, not an event.',
  },
];

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <Reveal className="max-w-3xl">
          <div className="eyebrow mb-5">What I’m starting, and why</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink leading-[1.08]">
            Small businesses don’t fail because of one big tech disaster.
            <span className="text-neutral-400"> They get slowly drained by a hundred small ones.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-[32px] p-7 sm:p-10 h-full space-y-5 text-[15px] leading-relaxed text-neutral-700">
              <p>
                <strong className="text-ink">What I’m starting.</strong> JayFTech Industries is a tech support and
                build service for South African startups and small-to-mid businesses. Right now, that’s me:
                I set up, fix, secure and build the tech that small teams depend on. As the work grows, I bring
                in young graduates and technicians I’ve personally vetted, so businesses get affordable help and
                they get real, paid experience.
              </p>
              <p>
                <strong className="text-ink">Why I’m starting it.</strong> I keep seeing two problems sitting right
                next to each other. Owners lose hours to slow Wi-Fi, lost files, hacked email and websites that
                don’t work on a phone, but they can’t justify a full-time IT salary. Meanwhile, capable young people
                with IT qualifications sit at home because every job ad wants three years of experience. Each side
                has exactly what the other one needs.
              </p>
              <p>
                <strong className="text-ink">Why “wellness”.</strong> Most small businesses only think about tech
                when something breaks, and by then it’s expensive, stressful and urgent. I want to treat tech like
                health: a check-up, a few good habits, and someone you can call. A business with healthy tech
                wastes less time, looks more credible, loses less data and is ready to grow when the opportunity
                comes. That’s a long-term advantage, not just a quick fix.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={120}>
            <div className="glass-dark rounded-[32px] p-7 sm:p-10 h-full flex flex-col justify-between">
              <Quote className="w-8 h-8 text-white/30" />
              <p className="font-display text-xl sm:text-2xl leading-snug mt-4">
                “I’m not trying to sell small businesses more tech. I’m trying to make the tech they already
                have stop holding them back, and open a door for the people who can help.”
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white text-ink flex items-center justify-center font-display font-bold">
                  JM
                </div>
                <div>
                  <p className="font-semibold text-sm">Jordan Maseko</p>
                  <p className="text-xs text-white/50">Founder · Johannesburg</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink">The four pillars of tech wellness</h3>
          <p className="text-neutral-500 mt-2 max-w-2xl">
            Every job I take on improves at least one of these. Together they decide whether a small business’s
            tech is helping it grow or quietly holding it back.
          </p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="glass lift rounded-3xl p-6 h-full">
                <div className="w-10 h-10 rounded-2xl bg-ink text-white flex items-center justify-center">
                  <p.icon className="w-5 h-5" />
                </div>
                <p className="mt-4 font-display font-bold text-lg text-ink">{p.name}</p>
                <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
