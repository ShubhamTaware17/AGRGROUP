import { Link } from 'react-router-dom';

export interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="AGRGROUPS - Building Value Across Industries"
    >
      {/* Emblem */}
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-900 via-brand-950 to-ink-950 p-0.5 shadow-md ring-1 ring-gold-400/40 transition-all duration-300 group-hover:ring-gold-400 group-hover:shadow-[0_0_20px_rgba(211,165,65,0.35)]">
        {/* Subtle inner highlight */}
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-gradient-to-br from-brand-950 via-ink-950 to-brand-950">
          <svg viewBox="0 0 40 40" className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
            {/* Outer Hexagon with Gold Gradient */}
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5ecd2" />
                <stop offset="50%" stopColor="#d3a541" />
                <stop offset="100%" stopColor="#a66f24" />
              </linearGradient>
            </defs>
            <path
              d="M20 4 L34 12 L34 28 L20 36 L6 28 L6 12 Z"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Inner Modern Geometric Motif */}
            <path
              d="M20 12 L28 17 L28 27 L20 22 Z"
              fill="url(#goldGrad)"
              opacity="0.85"
            />
            <path
              d="M20 12 L12 17 L12 27 L20 22 Z"
              fill="url(#goldGrad)"
              opacity="0.45"
            />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5 font-display text-xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
            AGR
          </span>
          <span className={isLight ? 'text-white' : 'text-ink-900'}>
            GROUPS
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-gold-400" />
          <span
            className={`text-2xs font-semibold tracking-[0.22em] uppercase transition-colors ${
              isLight ? 'text-white/70 group-hover:text-gold-300' : 'text-ink-500 group-hover:text-brand-700'
            }`}
          >
            Building Value
          </span>
        </div>
      </div>
    </Link>
  );
}
