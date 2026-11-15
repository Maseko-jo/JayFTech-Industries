import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './motion';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

// Indicative South African figures, used for comparison only.
const FULL_TIME_MONTHLY = 24000 + 4500; // salary + UIF, equipment, licences
const RETAINER_MONTHLY = 9500; // typical small-office IT support contract
const ON_DEMAND_RATE = 350; // blended hourly rate

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  const [hours, setHours] = useState(8);
  const onDemand = hours * ON_DEMAND_RATE;
  const annualSaving = Math.max(0, FULL_TIME_MONTHLY - onDemand) * 12;

  const rows = [
    { label: 'Full-time IT hire', value: FULL_TIME_MONTHLY, dark: false },
    { label: 'Monthly IT retainer', value: RETAINER_MONTHLY, dark: false },
    { label: 'JayFTech, pay per job', value: onDemand, dark: true },
  ];
  const max = Math.max(...rows.map(r => r.value));

  return (
    <section id="calculator" className="py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow mb-5">Cost comparison</div>
          <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl text-ink">Only pay for the hours you need.</h2>
        </Reveal>

        <Reveal>
          <div className="glass-strong rounded-[32px] p-6 sm:p-10 max-w-4xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="hours" className="text-sm font-semibold text-ink">Tech help needed per month</label>
                <span className="font-display font-bold text-2xl text-ink">{hours}h</span>
              </div>
              <input id="hours" type="range" min={2} max={40} value={hours} onChange={e => setHours(Number(e.target.value))} className="w-full" />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
                <span>Odd fixes</span>
                <span>Regular care</span>
                <span>Big rollout</span>
              </div>

              <div className="mt-8 space-y-4">
                {rows.map(r => (
                  <div key={r.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className={r.dark ? 'font-semibold text-ink' : 'text-neutral-600'}>{r.label}</span>
                      <span className={`font-display font-bold ${r.dark ? 'text-ink' : 'text-neutral-500'}`}>
                        R{r.value.toLocaleString('en-ZA')}/mo
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-neutral-200/70 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${r.dark ? 'bg-ink' : 'bg-neutral-400'}`}
                        style={{ width: `${(r.value / max) * 100}%`, transition: 'width 0.7s cubic-bezier(0.32,0.72,0,1)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 glass-dark rounded-[28px] p-7 text-center">
              <p className="text-xs uppercase tracking-wider text-white/50">Saved per year vs a full-time hire</p>
              <p className="font-display font-bold text-4xl mt-2">R{annualSaving.toLocaleString('en-ZA')}</p>
              <p className="text-xs text-white/60 mt-3 leading-relaxed">
                Money that can go into stock, marketing or your people instead.
              </p>
              <button onClick={onOpenBooking} className="press mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink font-semibold py-3 text-sm hover:bg-neutral-100">
                Get a quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
        <p className="text-center text-[11px] text-neutral-400 mt-5">
          Estimates only, based on typical SA salaries and IT contract prices. Your numbers will differ.
        </p>
      </div>
    </section>
  );
};
