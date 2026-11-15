import React, { useEffect, useRef } from 'react';

// A field of small ink dashes that hover gently on their own ("antigravity"),
// then part around the cursor, darken and line up around it as it passes.

interface Particle {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  spin: number;
  len: number;
  phase: number;
  floatAmp: number;
  floatSpeed: number;
  heat: number; // 0 = resting, 1 = right next to the cursor
}

const RADIUS = 170; // how far the cursor's influence reaches, in px
const PUSH = 1.6; // how strongly particles move out of the way
const SPRING = 0.018; // how quickly they float back home
const DAMPING = 0.9;

export const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Jittered grid so the field looks even but not mechanical.
      const gap = width < 640 ? 46 : 38;
      particles = [];
      for (let y = gap / 2; y < height; y += gap) {
        for (let x = gap / 2; x < width; x += gap) {
          const hx = x + (Math.random() - 0.5) * gap * 0.8;
          const hy = y + (Math.random() - 0.5) * gap * 0.8;
          particles.push({
            homeX: hx,
            homeY: hy,
            x: hx,
            y: hy,
            vx: 0,
            vy: 0,
            angle: Math.random() * Math.PI,
            spin: (Math.random() - 0.5) * 0.004,
            len: 3 + Math.random() * 5,
            phase: Math.random() * Math.PI * 2,
            floatAmp: 2 + Math.random() * 5,
            floatSpeed: 0.4 + Math.random() * 0.6,
            heat: 0,
          });
        }
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = 'round';

      for (const p of particles) {
        // Gentle hovering around the home spot
        const floatX = Math.cos(t * 0.001 * p.floatSpeed + p.phase) * p.floatAmp * 0.6;
        const floatY = Math.sin(t * 0.001 * p.floatSpeed + p.phase) * p.floatAmp;

        p.vx += (p.homeX + floatX - p.x) * SPRING;
        p.vy += (p.homeY + floatY - p.y) * SPRING;

        let targetHeat = 0;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < RADIUS) {
            const force = 1 - dist / RADIUS;
            p.vx += (dx / dist) * force * PUSH;
            p.vy += (dy / dist) * force * PUSH;
            targetHeat = force;
            // Turn to sit tangent to the cursor, so they swirl around it
            const tangent = Math.atan2(dy, dx) + Math.PI / 2;
            let diff = tangent - p.angle;
            diff = Math.atan2(Math.sin(diff), Math.cos(diff));
            p.angle += diff * 0.15 * force;
          }
        }

        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        p.heat += (targetHeat - p.heat) * 0.08;

        const len = p.len * (1 + p.heat * 1.4);
        const cos = Math.cos(p.angle) * len * 0.5;
        const sin = Math.sin(p.angle) * len * 0.5;
        ctx.strokeStyle = `rgba(10, 10, 11, ${0.13 + p.heat * 0.6})`;
        ctx.lineWidth = 1.6 + p.heat * 1.2;
        ctx.beginPath();
        ctx.moveTo(p.x - cos, p.y - sin);
        ctx.lineTo(p.x + cos, p.y + sin);
        ctx.stroke();
      }
    };

    const loop = (t: number) => {
      draw(t);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    const onResize = () => {
      build();
      if (reduceMotion) draw(0);
    };

    build();
    if (reduceMotion) {
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerleave', onLeave);
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />;
};
