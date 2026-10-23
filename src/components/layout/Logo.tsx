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
      className={`group inline-flex items-center gap-2 sm:gap-2.5 lg:gap-3 select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="AGRGROUPS - Building Value Across Industries"
    >
      {/* Emblem */}
      <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-brand-800 via-brand-900 to-ink-950 p-0.5 shadow-md ring-1 ring-gold-400/50 transition-all duration-300 group-hover:ring-gold-400 group-hover:shadow-[0_0_20px_rgba(214,111,70,0.35)]">
        {/* Subtle inner highlight */}
        <div className="flex h-full w-full items-center justify-center rounded-[7px] sm:rounded-[10px] bg-gradient-to-br from-brand-900 via-ink-950 to-brand-950">
          <svg viewBox="0 0 40 40" className="h-5 w-5 sm:h-5.5 sm:w-5.5 lg:h-6 lg:w-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
            {/* Outer Hexagon with Terracotta/Caramel Gradient */}
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8E8DF" />
                <stop offset="50%" stopColor="#D66F46" />
                <stop offset="100%" stopColor="#A44222" />
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
              opacity="0.9"
            />
            <path
              d="M20 12 L12 17 L12 27 L20 22 Z"
              fill="url(#goldGrad)"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1 sm:gap-1.5 font-display text-base sm:text-lg lg:text-xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
            AGR
          </span>
          <span className={isLight ? 'text-white' : 'text-ink-900'}>
            GROUPS
          </span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="h-1 w-1 rounded-full bg-gold-500" />
          <span
            className={`text-[9px] sm:text-2xs font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase transition-colors ${
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
