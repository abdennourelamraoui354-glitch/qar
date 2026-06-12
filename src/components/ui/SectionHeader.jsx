import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 sm:mb-16 max-w-3xl ${alignClass}`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full beam-border glass-strong text-[#8bb8a8] text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
        >
          <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#6b9e8f] shadow-[0_0_6px_#6b9e8f]" />
          {eyebrow}
        </motion.span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.02em] leading-[1.08] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
