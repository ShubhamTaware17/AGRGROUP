import { useCountUp, useReveal } from '@/hooks/useReveal';

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  note: string;
}

export default function StatsBar({ stats, theme = 'light' }: { stats: readonly StatItem[]; theme?: 'light' | 'dark' }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const dark = theme === 'dark';
  return (
    <div ref={ref} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-4">
      {stats.map((s) => (
        <StatCard key={s.label} stat={s} active={visible} dark={dark} />
      ))}
    </div>
  );
}

function StatCard({ stat, active, dark }: { stat: StatItem; active: boolean; dark: boolean }) {
  const value = useCountUp(stat.value, active);
  const bg = dark ? 'bg-ink-950' : 'bg-white';
  const labelColor = dark ? 'text-white/70' : 'text-ink-500';
  const noteColor = dark ? 'text-white/50' : 'text-ink-400';
  const valueColor = dark ? 'text-white' : 'text-brand-700';
  return (
    <div className={`${bg} px-6 py-8 sm:px-8 sm:py-10`}>
      <div className={`font-display text-4xl font-extrabold tracking-tighter2 sm:text-5xl ${valueColor}`}>
        {value}
        <span className="text-gold-400">{stat.suffix}</span>
      </div>
      <div className={`mt-2 text-sm font-semibold ${labelColor}`}>{stat.label}</div>
      <div className={`mt-1 text-xs leading-relaxed ${noteColor}`}>{stat.note}</div>
    </div>
  );
}
