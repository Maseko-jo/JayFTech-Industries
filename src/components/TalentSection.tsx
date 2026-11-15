import React from 'react';
import { SAMPLE_PROFILES } from '../data/mockData';
import { MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { Reveal } from './motion';

interface TalentSectionProps {
  onOpenTalentModal: () => void;
}

const STEPS = [
  ['Apply', 'Tell me what you studied, what you can do and where you are.'],
  ['Meet & test', 'A conversation plus a short practical task. Skills matter more than certificates.'],
  ['Shadow', 'Your first jobs are alongside me, so clients get quality and you get confidence.'],
  ['Go solo', 'Take your own jobs, build ratings from real work, and grow into bigger contracts.'],
];

export const TalentSection: React.FC<TalentSectionProps> = ({ onOpenTalentModal }) => {
  return (
    <section id="talent" className="py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow mb-5">The network</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink">Who I’m building this with.</h2>
          <p className="mt-4 text-neutral-600">
            Graduates and technicians who have the skills but not the break yet. These are the kinds of profiles
            the network is looking for. Real profiles go up as people join.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {SAMPLE_PROFILES.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <div className="glass lift rounded-[28px] p-5 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-200 to-white border flex items-center justify-center font-display font-bold text-neutral-500">
                    {p.initials}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-neutral-200/70 text-neutral-500">
                    Example
                  </span>
                </div>
                <p className="mt-4 font-display font-bold text-ink">{p.title}</p>
                <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" /> {p.background}
                </p>
                <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {p.city}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t flex-1 content-start">
                  {p.skills.map(s => (
                    <span key={s} className="text-[11px] px-2 py-0.5 rounded-full bg-white/80 border text-neutral-600">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass-dark rounded-[32px] p-7 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div className="max-w-xl">
                <p className="font-display font-bold text-2xl sm:text-3xl">Studied IT but can’t get past “3 years experience required”?</p>
                <p className="text-white/60 mt-2 text-sm">
                  Join the founding group. Spots are limited because I personally work with everyone in the first intake.
                </p>
              </div>
              <button onClick={onOpenTalentModal} className="press inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink font-semibold px-6 py-3.5 text-sm hover:bg-neutral-100 shrink-0">
                Register interest
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {STEPS.map(([title, text], i) => (
                <div key={title} className="rounded-3xl bg-white/[0.06] border border-white/10 p-5">
                  <span className="text-xs text-white/40 font-display">Step {i + 1}</span>
                  <p className="font-semibold mt-1">{title}</p>
                  <p className="text-xs text-white/60 mt-1.5 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
