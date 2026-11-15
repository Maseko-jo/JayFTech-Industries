import React, { useEffect, useRef } from 'react';
import { ParticleField } from './ParticleField';

// Each cloud sits at a different "depth": deeper ones move more with the mouse,
// which gives the background a soft 3D parallax feel.
const CLOUDS = [
  { className: 'w-[620px] h-[620px] -top-40 -left-40 bg-white', depth: 30, delay: '0s' },
  { className: 'w-[520px] h-[520px] top-[30%] -right-40 bg-neutral-300/60', depth: -45, delay: '-8s' },
  { className: 'w-[480px] h-[480px] bottom-[-120px] left-[20%] bg-slate-200/80', depth: 60, delay: '-16s' },
  { className: 'w-[360px] h-[360px] top-[55%] left-[-80px] bg-white', depth: -25, delay: '-4s' },
  { className: 'w-[300px] h-[300px] top-[12%] left-[55%] bg-slate-300/40', depth: 80, delay: '-12s' },
];

export const CloudBackground: React.FC = () => {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Target follows the mouse instantly; current eases towards it every frame,
    // so the motion stays smooth and slightly lazy, like iOS parallax.
    const target = { x: 0, y: 0, px: window.innerWidth / 2, py: window.innerHeight / 3 };
    const current = { ...target };
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
      target.px = e.clientX;
      target.py = e.clientY;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      current.px += (target.px - current.px) * 0.12;
      current.py += (target.py - current.py) * 0.12;

      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = CLOUDS[i].depth;
        el.style.transform = `translate3d(${current.x * d * 2}px, ${current.y * d * 2}px, 0)`;
      });
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.px - 300}px, ${current.py - 300}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      {CLOUDS.map((c, i) => (
        <div key={i} ref={el => (layerRefs.current[i] = el)} className="absolute inset-0 will-change-transform">
          <div className={`cloud-blob ${c.className}`} style={{ animationDelay: c.delay }} />
        </div>
      ))}
      {/* Soft light that trails the cursor */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full will-change-transform"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 65%)' }}
      />
      <ParticleField />
    </div>
  );
};
