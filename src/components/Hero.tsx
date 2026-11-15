import React from 'react';
import { ArrowRight, HeartPulse, MapPin, Wallet, Users } from 'lucide-react';
import { Reveal } from './motion';

interface HeroProps {
  onOpenBooking: () => void;
  onStartCheck: () => void;
}

const POINTS = [
  { icon: HeartPulse, title: 'Tech wellness first', text: 'Prevention, not panic fixes' },
  { icon: Wallet, title: 'No lock-in', text: 'Help when you need it, no retainers' },
  { icon: MapPin, title: 'Joburg + remote', text: 'On-site in Gauteng, remote anywhere' },
  { icon: Users, title: 'Built to grow', text: 'A network of young SA tech talent' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onStartCheck }) => {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        <Reveal>
          <div className="eyebrow mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Founder-led · Taking first clients now
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display font-bold tracking-tight text-ink text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl max-w-4xl mx-auto">
            Healthy tech for small businesses.
            <span className="block text-neutral-400">Real work for young techs.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            JayFTech helps South African startups and small businesses get their tech set up properly and
            kept healthy, without hiring a full-time IT person. It starts with me doing the work myself, and
            grows into a trusted network of graduates and technicians who need a first real break.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={onOpenBooking} className="btn-ink w-full sm:w-auto px-7 py-4 text-sm group">
              Get help with your tech
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button onClick={onStartCheck} className="btn-glass w-full sm:w-auto px-7 py-4 text-sm">
              <HeartPulse className="w-4 h-4" />
              Take the 1-minute wellness check
            </button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            {POINTS.map(p => (
              <div key={p.title} className="glass lift rounded-3xl p-4 sm:p-5">
                <div className="w-9 h-9 rounded-2xl bg-ink text-white flex items-center justify-center mb-3">
                  <p.icon className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-ink">{p.title}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{p.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
