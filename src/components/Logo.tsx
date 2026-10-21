import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const text = variant === 'light' ? 'text-white' : 'text-ink-900';
  const sub = variant === 'light' ? 'text-white/60' : 'text-ink-400';
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="AGRGROUPS home">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-950 ring-1 ring-brand-800 transition-transform group-hover:scale-105">
        <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden="true">
          <path d="M12 10 L20 6 L28 10 L28 19 L20 23 L12 19 Z" fill="none" stroke="#c08d2e" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 14 L20 12 L24 14 L24 19 L20 21 L16 19 Z" fill="#c08d2e" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tightish ${text}`}>AGRGROUPS</span>
        <span className={`text-2xs font-medium tracking-[0.16em] uppercase ${sub}`}>Building Value</span>
      </span>
    </Link>
  );
}
