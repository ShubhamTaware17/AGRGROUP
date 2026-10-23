import { useCountUp, useReveal } from '@/hooks/useReveal';
import type { StatItem } from '@/types';

export default function StatsBar({ stats, theme = 'light' }: { stats: readonly StatItem[]; theme?: 'light' | 'dark' }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const dark = theme === 'dark';
  const borderBg = dark ? 'border-white/10 bg-white/10' : 'border-ink-100 bg-ink-200/80';
  return (
    <div ref={ref} className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border ${borderBg} sm:grid-cols-2 lg:grid-cols-4`}>
      {stats.map((s) => (
        <StatCard key={s.label} stat={s} active={visible} dark={dark} />
      ))}
    </div>
  );
}

function StatCard({ stat, active, dark }: { stat: StatItem; active: boolean; dark: boolean }) {
  const value = useCountUp(stat.value, active);
  const bg = dark ? 'bg-brand-950/80 backdrop-blur-sm' : 'bg-white';
  const labelColor = dark ? 'text-white/90' : 'text-ink-700';
  const noteColor = dark ? 'text-brand-100/60' : 'text-ink-500';
  const valueColor = dark ? 'text-white' : 'text-brand-700';
  return (
    <div className={`${bg} p-4 sm:p-6 lg:p-8 flex flex-col justify-between`}>
      <div>
        <div className={`font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight sm:tracking-tighter2 ${valueColor}`}>
          {value}
          <span className="text-gold-400">{stat.suffix}</span>
        </div>
        <div className={`mt-2 text-xs sm:text-sm font-semibold leading-snug ${labelColor}`}>{stat.label}</div>
      </div>
      <div className={`mt-2 text-[11px] sm:text-xs leading-relaxed ${noteColor}`}>{stat.note}</div>
    </div>
  );
}
