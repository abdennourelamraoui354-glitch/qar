import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function GlowButton({
  href,
  onClick,
  children,
  variant = 'primary',
  className,
  type = 'button',
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-[#5a8779] via-[#6b9e8f] to-[#7aad9c] text-white glow-sm hover:glow-md',
    green: 'bg-gradient-to-r from-emerald-500 to-green-500 text-white glow-green',
    ghost: 'glass text-white/80 hover:bg-white/10',
    outline: 'border border-white/15 bg-white/[0.04] text-white/90 hover:bg-white/[0.08] hover:border-[#6b9e8f]/30',
  };

  const classes = cn(
    'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl',
    'text-sm font-semibold transition-all duration-300 overflow-hidden group',
    variants[variant],
    className,
  );

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/12 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <span className="relative flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className={classes}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className={classes}>
      {content}
    </motion.button>
  );
}
