import React from 'react';
import { ROADMAP_MILESTONES } from '../data/mockData';
import { Reveal } from './motion';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow mb-5">Roadmap</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink">Grow it the honest way.</h2>
          <p className="mt-4 text-neutral-600">
            Each phase only starts once the one before it is working. No pretending to be bigger than I am.
          </p>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-ink via-neutral-300 to-transparent" />
          <div className="space-y-5">
            {ROADMAP_MILESTONES.map((m, i) => {
              const active = m.status === 'in_progress';
              return (
                <Reveal key={m.id} delay={i * 80}>
                  <div className="relative pl-14">
                    <div
                      className={`absolute left-0 top-6 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                        active ? 'bg-ink text-white shadow-lg' : 'glass text-neutral-500'
                      }`}
                    >
                      {i}
                    </div>
                    <div className={`${active ? 'glass-strong' : 'glass'} lift rounded-[28px] p-6 sm:p-7`}>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">{m.phase}</span>
                        <span
                          className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                            active ? 'bg-emerald-100 text-emerald-700' : 'bg-neutral-200/70 text-neutral-500'
                          }`}
                        >
                          {m.timing}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-ink">{m.title}</h3>
                      <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{m.description}</p>
                      <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 mt-4 pt-4 border-t">
                        {m.deliverables.map(d => (
                          <div key={d} className="flex items-center gap-2 text-xs text-neutral-600">
                            <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-ink' : 'bg-neutral-300'}`} />
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
