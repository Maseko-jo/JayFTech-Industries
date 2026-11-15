import React, { useMemo, useState } from 'react';
import { HeartPulse, RotateCcw, ArrowRight, Check, X } from 'lucide-react';
import { WELLNESS_QUESTIONS } from '../data/mockData';
import { Reveal } from './motion';

interface WellnessCheckProps {
  onOpenBooking: () => void;
}

type Answer = 'yes' | 'no';

// Each question is phrased so that "yes" means a risk.
export const WellnessCheck: React.FC<WellnessCheckProps> = ({ onOpenBooking }) => {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});

  const answered = Object.keys(answers).length;
  const total = WELLNESS_QUESTIONS.length;
  const risks = WELLNESS_QUESTIONS.filter(q => answers[q.id] === 'yes');
  const score = Math.round(((answered - risks.length) / total) * 100);
  const done = answered === total;

  const verdict = useMemo(() => {
    if (score >= 85) return { label: 'In good shape', tone: 'text-emerald-600', note: 'A light check-up now and then will keep it that way.' };
    if (score >= 55) return { label: 'Some weak spots', tone: 'text-amber-600', note: 'Nothing on fire, but a few fixes would save you a bad day.' };
    return { label: 'Needs attention', tone: 'text-rose-600', note: 'Your tech is likely costing you time and putting data at risk.' };
  }, [score]);

  const ringOffset = 2 * Math.PI * 52 * (1 - (done ? score : (answered / total) * 100) / 100);

  return (
    <section id="wellness" className="py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow mb-5">
            <HeartPulse className="w-3.5 h-3.5" />
            Tech Wellness Check
          </div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink">How healthy is your tech?</h2>
          <p className="mt-4 text-neutral-600">Eight honest yes/no questions. No sign-up, nothing is sent anywhere.</p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3 space-y-3">
            {WELLNESS_QUESTIONS.map((q, i) => {
              const a = answers[q.id];
              return (
                <Reveal key={q.id} delay={i * 40}>
                  <div className={`glass rounded-3xl p-5 transition-all duration-500 ${a === 'yes' ? 'ring-1 ring-rose-200' : ''}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">{q.pillar}</span>
                        <p className="text-sm sm:text-[15px] font-semibold text-ink mt-0.5">{q.question}</p>
                      </div>
                      <div className="flex shrink-0 gap-1.5">
                        {(['yes', 'no'] as const).map(opt => (
                          <button
                            key={opt}
                            onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt }))}
                            className={`press w-14 py-2 rounded-full text-xs font-semibold capitalize ${
                              a === opt ? 'bg-ink text-white shadow-md' : 'bg-white/70 text-neutral-600 hover:bg-white'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    {a === 'yes' && (
                      <p className="pop-in mt-3 text-xs text-neutral-600 leading-relaxed pl-3 border-l-2 border-rose-300">
                        {q.whyItMatters}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <Reveal>
              <div className="glass-strong rounded-[32px] p-7 text-center">
                <div className="relative w-36 h-36 mx-auto">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(10,10,11,0.07)" strokeWidth="10" />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="#0a0a0b"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 52}
                      strokeDashoffset={ringOffset}
                      style={{ transition: 'stroke-dashoffset 0.9s cubic-bezier(0.32,0.72,0,1)' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display font-bold text-4xl text-ink">{done ? score : answered}</span>
                    <span className="text-[11px] text-neutral-500">{done ? 'out of 100' : `of ${total} answered`}</span>
                  </div>
                </div>

                {done ? (
                  <div className="pop-in mt-5">
                    <p className={`font-display font-bold text-xl ${verdict.tone}`}>{verdict.label}</p>
                    <p className="text-sm text-neutral-600 mt-1">{verdict.note}</p>

                    <div className="mt-5 text-left space-y-1.5">
                      {WELLNESS_QUESTIONS.map(q => (
                        <div key={q.id} className="flex items-center gap-2 text-xs text-neutral-600">
                          {answers[q.id] === 'yes' ? (
                            <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                          ) : (
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          )}
                          <span className="truncate">{q.question}</span>
                        </div>
                      ))}
                    </div>

                    <button onClick={onOpenBooking} className="btn-ink w-full mt-6 py-3.5 text-sm">
                      {risks.length > 0 ? `Help me fix ${risks.length === 1 ? 'this' : 'these'}` : 'Book a check-up anyway'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setAnswers({})}
                      className="press mt-2 inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-ink px-3 py-2 rounded-full"
                    >
                      <RotateCcw className="w-3 h-3" /> Start again
                    </button>
                  </div>
                ) : (
                  <p className="mt-5 text-sm text-neutral-500">
                    Answer all eight to see your score and what to fix first.
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
