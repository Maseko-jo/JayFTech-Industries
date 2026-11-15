import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenTalent: () => void;
}

const LINKS = [
  { href: '#story', label: 'Why' },
  { href: '#wellness', label: 'Wellness check' },
  { href: '#founder', label: 'Starts with me' },
  { href: '#services', label: 'Services' },
  { href: '#roadmap', label: 'Roadmap' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenTalent }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3">
      <div
        className={`glass mx-auto rounded-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? 'max-w-5xl px-3 py-2' : 'max-w-6xl px-4 py-3'
        }`}
      >
        <a href="#" className="press flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center shadow-md">
            <span className="font-display font-bold text-sm text-white">JF</span>
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-[15px] tracking-tight text-ink">JayFTech</span>
            <span className="hidden sm:block text-[10px] text-neutral-500 font-medium">Industries · South Africa</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-neutral-600">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="press px-3 py-1.5 rounded-full hover:bg-white/80 hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button onClick={onOpenTalent} className="press px-4 py-2 text-xs font-semibold rounded-full text-neutral-700 hover:bg-white/80">
            Join as a tech
          </button>
          <button onClick={onOpenBooking} className="btn-ink px-4 py-2 text-xs">
            Get help
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="press lg:hidden ml-1 w-9 h-9 rounded-full flex items-center justify-center text-ink hover:bg-white/80"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden pop-in glass-strong mt-2 max-w-6xl mx-auto rounded-3xl p-4">
          <div className="flex flex-col text-sm font-medium text-neutral-700">
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="press px-4 py-3 rounded-2xl hover:bg-white"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 grid grid-cols-2 gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenTalent(); }}
                className="btn-glass py-3 text-xs"
              >
                Join as a tech
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="btn-ink py-3 text-xs"
              >
                Get help
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
