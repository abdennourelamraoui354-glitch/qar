import { Lock, Wifi } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function BrowserFrame({
  url,
  children,
  className,
  chromeClassName,
  glow,
}) {
  return (
    <div className={cn('relative', className)}>
      {glow && (
        <div
          className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-40 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${glow}30, transparent 70%)` }}
        />
      )}
      <div className="relative rounded-2xl overflow-hidden depth-2 border border-white/[0.1] bg-[#0d1218]">
        <div className={cn('flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.07] bg-white/[0.03]', chromeClassName)}>
          <div className="flex gap-1.5">
            {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
              <span key={c} className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="flex-1 mx-2 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/[0.06] text-[10px] text-[#94a3b8]">
            <Lock size={9} className="text-[#22c55e] shrink-0" />
            <Wifi size={9} className="shrink-0 opacity-60" />
            <span className="truncate flex-1 text-center">{url}</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export function FloatingBadge({ icon: Icon, label, sub, className, delay = 0, color = 'teal' }) {
  const colors = {
    teal: 'border-[#6b9e8f]/35 bg-[#6b9e8f]/10 text-[#8bb8a8]',
    green: 'border-[#22c55e]/35 bg-[#22c55e]/10 text-[#22c55e]',
    gold: 'border-[#b8a88a]/35 bg-[#b8a88a]/10 text-[#d4c4a8]',
    blue: 'border-[#6b8cae]/35 bg-[#6b8cae]/10 text-[#8bb0d4]',
  };

  return (
    <div
      className={cn(
        'absolute z-20 flex items-center gap-2 px-3 py-2 rounded-xl border shadow-lg depth-1',
        colors[color],
        className,
      )}
    >
      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
        <Icon size={14} />
      </div>
      <div>
        <p className="text-[11px] font-bold leading-none">{label}</p>
        {sub && <p className="text-[9px] opacity-70 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}
