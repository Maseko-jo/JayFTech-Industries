import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FOUNDER_SKILLS } from '../data/mockData';
import { Reveal } from './motion';

interface FounderSectionProps {
  onOpenBooking: () => void;
}

const PROMISES = [
  'You deal with me directly, not a call centre',
  'We talk first and agree the scope together before any work starts',
  'A written handover at the end of every job',
  'If I can’t do it well, I’ll tell you, and point you to someone who can',
];

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="founder" className="py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="eyebrow mb-5">The twist: it starts with me</div>
            <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink leading-[1.08]">
              Before it’s a network, it’s one person doing the work properly.
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              I’m not launching a big marketplace with no customers and no reputation. I’m starting by doing the
              jobs myself. That way I learn exactly what small businesses need, what they’ll pay, and what “good”
              looks like before I trust anyone else with a client. Every technician who joins later works to the
              standard these first jobs set.
            </p>

            <div className="glass rounded-3xl p-6 mt-8 space-y-3">
              {PROMISES.map(p => (
                <div key={p} className="flex items-start gap-3 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-ink shrink-0" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <button onClick={onOpenBooking} className="btn-ink mt-8 px-7 py-4 text-sm group">
              Work with me
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>

          <div className="space-y-3">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1 px-1">What I can do for you today</p>
            </Reveal>
            {FOUNDER_SKILLS.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="glass lift rounded-3xl p-6 flex gap-5">
                  <span className="font-display font-bold text-2xl text-neutral-300 w-8 shrink-0">0{i + 1}</span>
                  <div>
                    <p className="font-display font-bold text-lg text-ink">{s.title}</p>
                    <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
