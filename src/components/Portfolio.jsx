import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_META } from '../lib/i18n/translations';
import { PORTFOLIO_VISUALS } from '../lib/portfolioVisuals';
import { useLanguage } from '../lib/i18n/LanguageContext';
import SectionHeader from './ui/SectionHeader';
import WebsiteScreenshot from './ui/WebsiteScreenshot';
import { cn } from '../lib/utils';

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 26 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 26 });
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    setCanTilt(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  if (!canTilt) {
    return <div className={cn('group', className)}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={cn('perspective-1200 group', className)}>
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const { isAr } = useLanguage();
  const visual = PORTFOLIO_VISUALS[project.id];
  const [hovered, setHovered] = useState(false);

  return (
    <TiltCard>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative rounded-[2rem] overflow-hidden depth-3 border border-white/[0.08] card-shine bg-[#0a0e14]/80"
      >
        <div className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${visual?.accent}25, transparent 70%)` }} />
        <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', project.gradient)} />

        <div className="relative">
          <div className="relative p-4 sm:p-5 pb-0">
            <WebsiteScreenshot project={project} />
          </div>

          <div className="relative px-5 sm:px-7 py-5 sm:py-6 border-t border-white/[0.06] bg-[#0d1218]/90 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <motion.span
                    animate={hovered ? { scale: 1.04 } : { scale: 1 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border border-[#22c55e]/25 bg-[#22c55e]/10 text-[#22c55e]"
                  >
                    <TrendingUp size={11} /> {project.metric}
                  </motion.span>
                </div>

                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1" style={{ color: visual?.accent }}>
                  {project.category}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-[#64748b] text-sm">{project.location}</p>
              </div>

              <motion.div
                animate={hovered ? { rotate: 45, scale: 1.1, backgroundColor: 'rgba(107,158,143,0.2)' } : { rotate: 0, scale: 1 }}
                className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center border border-white/[0.1] shrink-0"
              >
                <ArrowUpRight size={20} className="text-[#8bb8a8]" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.article>
    </TiltCard>
  );
}

export default function Portfolio() {
  const { t } = useLanguage();
  const pf = t.portfolio;
  const projects = PORTFOLIO_META.map((meta, i) => ({ ...meta, ...pf.items[i] }));

  return (
    <section id="portfolio" className="relative z-10 py-28 sm:py-44 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#6b9e8f]/8 blur-[90px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader eyebrow={pf.eyebrow} title={pf.title} subtitle={pf.subtitle} />

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
