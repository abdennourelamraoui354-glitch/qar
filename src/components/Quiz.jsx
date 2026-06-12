import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Briefcase, Building, Calendar, Check, Clock,
  Dumbbell, File, HelpCircle, Layers, MapPin, MessageCircle, Palette,
  RefreshCw, Scissors, Smile, Sparkles, Stethoscope, TrendingDown,
  User, Utensils, XCircle, Zap, Camera,
} from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/constants';
import { QUIZ_ICONS } from '../lib/i18n/translations';
import { useLanguage } from '../lib/i18n/LanguageContext';
import SectionHeader from './ui/SectionHeader';
import GlowButton from './ui/GlowButton';
import { cn } from '../lib/utils';

const ICON_MAP = {
  stethoscope: Stethoscope, smile: Smile, scissors: Scissors, utensils: Utensils,
  building: Building, dumbbell: Dumbbell, briefcase: Briefcase,
  'x-circle': XCircle, clock: Clock, refresh: RefreshCw, camera: Camera,
  'trending-down': TrendingDown, file: File, layers: Layers,
  'message-circle': MessageCircle, palette: Palette, sparkles: Sparkles,
  zap: Zap, calendar: Calendar, 'help-circle': HelpCircle,
};

const STEP_KEYS = ['businessType', 'websiteStatus', 'need', 'timeline'];
const INITIAL = { businessType: '', websiteStatus: '', need: '', timeline: '', name: '', whatsapp: '', instagram: '', location: '', notes: '' };

const slide = {
  enter: (d) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
};

export default function Quiz() {
  const { t, isAr } = useLanguage();
  const q = t.quiz;
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState(INITIAL);

  const steps = useMemo(() => STEP_KEYS.map((key, i) => ({
    key,
    title: q.steps[i].title,
    subtitle: q.steps[i].subtitle,
    options: q[key].map((label, j) => ({ label, icon: QUIZ_ICONS[key][j] })),
  })), [q]);

  const totalSteps = steps.length + 1;
  const select = (key, val) => setAnswers((p) => ({ ...p, [key]: val }));
  const update = (key, val) => setAnswers((p) => ({ ...p, [key]: val }));

  const canProceed = () => {
    if (step < steps.length) return Boolean(answers[steps[step].key]);
    return answers.name.trim() && answers.whatsapp.trim();
  };

  const go = (next) => { setDirection(next > step ? 1 : -1); setStep(next); };
  const handleSubmit = () => {
    if (!canProceed()) return;
    window.open(buildWhatsAppUrl(t.wa.quiz(answers)), '_blank', 'noopener,noreferrer');
  };

  const progress = Math.round(((step + 1) / totalSteps) * 100);
  const isContact = step >= steps.length;
  const gridCols = step === 0 ? 'sm:grid-cols-2' : step === 1 || step === 2 ? 'sm:grid-cols-1' : 'sm:grid-cols-2';

  return (
    <section id="quiz" className="relative z-10 py-28 sm:py-40 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6b9e8f]/10 blur-[120px] rounded-full"
          animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity }} />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader eyebrow={q.eyebrow} title={q.title} subtitle={q.subtitle} />

        <div className="beam-border rounded-[1.75rem] depth-3 overflow-hidden">
          <div className="rounded-[1.75rem] bg-[#0d1218]/95 backdrop-blur-2xl">
            {/* SaaS top bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6b9e8f] to-[#5a8779] flex items-center justify-center">
                  <Sparkles size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">Nounmotion Quiz</p>
                  <p className="text-[10px] text-[#64748b]">Qatar Website Brief</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#64748b] hidden sm:inline">{progress}%</span>
                <div className="w-20 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-[#6b9e8f] to-[#8bb8a8] rounded-full"
                    animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              {/* Step pills */}
              <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-1">
                {steps.map((s, i) => (
                  <div key={s.key} className="flex items-center gap-1 shrink-0">
                    <motion.div
                      animate={{ scale: i === step ? 1.05 : 1 }}
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors',
                        i < step ? 'bg-[#6b9e8f] border-[#6b9e8f] text-white' :
                        i === step ? 'bg-[#6b9e8f]/20 border-[#6b9e8f]/50 text-[#8bb8a8]' :
                        'bg-white/[0.03] border-white/[0.08] text-[#64748b]',
                      )}
                    >
                      {i < step ? <Check size={14} /> : i + 1}
                    </motion.div>
                    {i < steps.length - 1 && (
                      <div className={cn('w-6 sm:w-10 h-px', i < step ? 'bg-[#6b9e8f]/50' : 'bg-white/10')} />
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-1 shrink-0 ml-1">
                  <div className={cn('w-6 h-px', isContact ? 'bg-[#22c55e]/50' : 'bg-white/10')} />
                  <div className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center border',
                    isContact ? 'bg-[#22c55e]/20 border-[#22c55e]/40 text-[#22c55e]' : 'bg-white/[0.03] border-white/[0.08] text-[#64748b]',
                  )}>
                    <MessageCircle size={14} />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                {!isContact ? (
                  <motion.div key={`s-${step}`} custom={direction} variants={slide} initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="mb-6">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b9e8f] font-bold mb-2">
                        {q.step} {step + 1} {q.of} {totalSteps}
                      </p>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{steps[step].title}</h3>
                      <p className="text-[#64748b] text-sm mt-2">{steps[step].subtitle}</p>
                    </div>
                    <div className={cn('grid gap-3', gridCols)}>
                      {steps[step].options.map((opt) => {
                        const key = steps[step].key;
                        const selected = answers[key] === opt.label;
                        const Icon = ICON_MAP[opt.icon];
                        return (
                          <motion.button key={opt.label} type="button" onClick={() => select(key, opt.label)}
                            whileHover={{ scale: 1.015, y: -2 }} whileTap={{ scale: 0.99 }}
                            className={cn(
                              'relative flex items-center gap-4 w-full p-5 rounded-2xl text-left border transition-all overflow-hidden group',
                              selected ? 'border-[#6b9e8f]/50 bg-[#6b9e8f]/10 depth-1 glow-sm' : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#6b9e8f]/20',
                            )}>
                            {selected && (
                              <motion.div layoutId="quiz-glow" className="absolute inset-0 bg-gradient-to-r from-[#6b9e8f]/10 to-transparent pointer-events-none" />
                            )}
                            <div className={cn('relative w-11 h-11 rounded-xl flex items-center justify-center shrink-0',
                              selected ? 'bg-[#6b9e8f]/25 text-[#8bb8a8]' : 'bg-white/[0.05] text-[#64748b] group-hover:text-[#8bb8a8]')}>
                              <Icon size={20} />
                            </div>
                            <span className="relative font-semibold text-sm flex-1">{opt.label}</span>
                            {selected && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative w-6 h-6 rounded-full bg-[#6b9e8f]/30 flex items-center justify-center">
                                <Check size={14} className="text-[#8bb8a8]" />
                              </motion.div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="contact" custom={direction} variants={slide} initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="mb-6">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#22c55e] font-bold mb-2">{q.complete}</p>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{q.steps[4].title}</h3>
                      <p className="text-[#64748b] text-sm mt-2">{q.steps[4].subtitle}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field icon={User} label={q.fields.name} value={answers.name} onChange={(v) => update('name', v)} placeholder={q.placeholders.name} className="sm:col-span-2" />
                      <Field icon={MessageCircle} label={q.fields.whatsapp} value={answers.whatsapp} onChange={(v) => update('whatsapp', v)} placeholder={q.placeholders.whatsapp} />
                      <Field icon={Camera} label={q.fields.instagram} value={answers.instagram} onChange={(v) => update('instagram', v)} placeholder={q.placeholders.instagram} />
                      <Field icon={MapPin} label={q.fields.location} value={answers.location} onChange={(v) => update('location', v)} placeholder={q.placeholders.location} className="sm:col-span-2" />
                      <div className="sm:col-span-2">
                        <label className="block text-[10px] text-[#64748b] mb-2 uppercase tracking-[0.15em]">{q.fields.notes}</label>
                        <textarea value={answers.notes} onChange={(e) => update('notes', e.target.value)} placeholder={q.placeholders.notes} rows={3}
                          className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-sm placeholder:text-[#64748b] focus:outline-none focus:border-[#6b9e8f]/50 focus:ring-1 focus:ring-[#6b9e8f]/20 resize-none transition-all" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.06]">
                <button type="button" onClick={() => go(step - 1)} disabled={step === 0}
                  className={cn('flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all',
                    step === 0 ? 'text-[#64748b]/40 cursor-not-allowed' : 'text-[#94a3b8] hover:text-white hover:bg-white/5')}>
                  <ArrowLeft size={16} className={isAr ? 'rotate-180' : ''} /> {q.back}
                </button>
                {step < totalSteps - 1 ? (
                  <GlowButton onClick={() => canProceed() && go(step + 1)} className={cn(!canProceed() && 'opacity-40 pointer-events-none', '!px-7')}>
                    {q.continue} <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
                  </GlowButton>
                ) : (
                  <GlowButton variant="green" onClick={handleSubmit} className={cn(!canProceed() && 'opacity-40 pointer-events-none', '!px-7')}>
                    <MessageCircle size={16} /> {q.send}
                  </GlowButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, value, onChange, placeholder, className = '' }) {
  return (
    <div className={className}>
      <label className="flex items-center gap-1.5 text-[10px] text-[#64748b] mb-2 uppercase tracking-[0.15em]">
        <Icon size={11} /> {label}
      </label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-sm placeholder:text-[#64748b] focus:outline-none focus:border-[#6b9e8f]/50 focus:ring-1 focus:ring-[#6b9e8f]/20 transition-all" />
    </div>
  );
}
