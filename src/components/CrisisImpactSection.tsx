import React from 'react';
import { SA_STATISTICS } from '../data/mockData';
import { X, Check } from 'lucide-react';
import { Reveal } from './motion';

const OLD_WAY = [
  ['The experience trap', 'Graduates are turned away from entry-level IT jobs that demand years of experience.'],
  ['Retainers that don’t fit', 'IT companies want monthly contracts that a 5-person business can’t justify.'],
  ['The cousin who “knows computers”', 'Informal help is cheap until nothing is documented and nobody is accountable.'],
  ['Offshore freelancers', 'Priced in dollars, can’t come on site, and don’t know local tools or POPIA.'],
];

const NEW_WAY = [
  ['A first real break', 'Graduates earn on real jobs, build a track record and get references they can use.'],
  ['Pay for what you need', 'Fixed prices in rands, per job. Monthly care plans only when they make sense.'],
  ['Accountable, written down', 'Every job ends with a short handover: what was done, logins, what to watch.'],
  ['Local and hands-on', 'Someone who can walk into your office and understands how SA businesses run.'],
];

export const CrisisImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow mb-5">The gap</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink">
            Two problems that solve each other.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {SA_STATISTICS.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="glass lift rounded-3xl p-6 h-full flex flex-col">
                <div className="font-display font-bold text-4xl text-ink tracking-tight">{item.stat}</div>
                <p className="mt-2 text-sm font-semibold text-ink">{item.label}</p>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed flex-1">{item.subtext}</p>
                <p className="mt-4 text-[10px] uppercase tracking-wider text-neutral-400">{item.source}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Reveal>
            <div className="glass rounded-[32px] p-7 sm:p-9 h-full">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-5">How it works today</p>
              <ul className="space-y-5">
                {OLD_WAY.map(([title, text]) => (
                  <li key={title} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-neutral-200/70 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 text-neutral-500" />
                    </span>
                    <span className="text-sm text-neutral-600">
                      <strong className="text-ink">{title}.</strong> {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-dark rounded-[32px] p-7 sm:p-9 h-full">
              <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-5">How JayFTech works</p>
              <ul className="space-y-5">
                {NEW_WAY.map(([title, text]) => (
                  <li key={title} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-ink" />
                    </span>
                    <span className="text-sm text-white/70">
                      <strong className="text-white">{title}.</strong> {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
