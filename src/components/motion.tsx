import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Glides its children up into view the first time they scroll on screen.
export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Drives a native <dialog class="sheet"> so it slides in and also animates out
// before actually closing.
export function useSheet(isOpen: boolean, onClose: () => void) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.classList.remove('closing');
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.classList.add('closing');
      const timer = window.setTimeout(() => {
        dialog.classList.remove('closing');
        dialog.close();
      }, 300);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen]);

  const dialogProps = {
    ref,
    className:
      'sheet p-0 bg-transparent w-[calc(100%-24px)] max-w-xl m-auto rounded-[28px] overflow-visible focus:outline-none',
    onClick: (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === ref.current) onClose();
    },
    onCancel: (e: React.SyntheticEvent) => {
      e.preventDefault();
      onClose();
    },
  };

  return dialogProps;
}

// iOS-style segmented control with a sliding ink pill behind the active option.
export function Segmented<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current;
      const active = wrap?.querySelector<HTMLButtonElement>(`[data-value="${CSS.escape(value)}"]`);
      if (!wrap || !active) return;
      setPill({ left: active.offsetLeft, top: active.offsetTop, width: active.offsetWidth, height: active.offsetHeight });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [value, options]);

  return (
    <div ref={wrapRef} className="segmented">
      <span className="segmented-pill" style={pill} />
      {options.map(opt => (
        <button
          key={opt}
          data-value={opt}
          onClick={() => onChange(opt)}
          className={`press relative z-10 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full ${
            value === opt ? 'text-white' : 'text-neutral-600 hover:text-ink'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
