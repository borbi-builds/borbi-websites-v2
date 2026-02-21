'use client';

import { motion } from 'framer-motion';
import { scrollReveal, stagger } from '@borbi/design-tokens';
import { AnimatedCounter } from './AnimatedCounter';
import { TestimonialBlock } from './TestimonialBlock';
import { Button } from './Button';

export interface CaseStudy {
  id: string;
  company: string;
  arm: 'marketing' | 'web-services' | 'automation' | 'equity-research' | 'training';
  category: string;
  headline: string;
  heroStat: { value: number; suffix: string; context: string };
  challenge: string;
  solution: string;
  result: string;
  metrics: Array<{
    label: string;
    before: string;
    after: string;
    value: number;
    suffix?: string;
    prefix?: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
    rating: number;
  };
}

interface StoryEngineProps {
  study: CaseStudy;
  accentColor?: string;
  className?: string;
}

export function StoryEngine({ study, accentColor, className = '' }: StoryEngineProps) {
  return (
    <article className={`bg-bg-void ${className}`}>
      {/* Hero Banner */}
      <div className="relative bg-bg-surface py-borbi-11 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-void/80" />
        <div className="relative z-10 max-w-content mx-auto px-borbi-5 lg:px-borbi-7">
          <div className="flex items-center justify-between mb-borbi-7">
            <span className="font-display text-h2 text-text-primary">{study.company}</span>
            <span className="text-small uppercase tracking-wide text-text-muted bg-bg-elevated px-4 py-2 rounded-full">
              {study.category}
            </span>
          </div>
        </div>
      </div>

      {/* Headline Stat */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollReveal}
        className="text-center py-borbi-10"
      >
        <div className="font-display text-[clamp(4rem,10vw,8rem)] text-text-primary leading-none">
          <AnimatedCounter
            end={study.heroStat.value}
            suffix={study.heroStat.suffix}
            duration={2}
          />
        </div>
        <p className="text-body-lg text-text-secondary mt-borbi-4">{study.heroStat.context}</p>
      </motion.div>

      {/* Story Strip */}
      <div className="max-w-content mx-auto px-borbi-5 lg:px-borbi-7">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: stagger.default } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-borbi-5"
        >
          {[
            { icon: '⚡', title: 'Challenge', text: study.challenge },
            { icon: '🔧', title: 'Solution', text: study.solution },
            { icon: '📈', title: 'Result', text: study.result },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={scrollReveal}
              className="bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-borbi-7"
              style={{ borderTopColor: accentColor ?? 'var(--accent-primary)', borderTopWidth: '2px' }}
            >
              <div className="text-2xl mb-borbi-3">{item.icon}</div>
              <h3 className="font-body font-semibold text-h3 text-text-primary mb-borbi-3">
                {item.title}
              </h3>
              <p className="text-body text-text-secondary">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Metrics Dashboard */}
      <div className="max-w-content mx-auto px-borbi-5 lg:px-borbi-7 py-borbi-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: stagger.default } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-borbi-4"
        >
          {study.metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={scrollReveal}
              className="bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-borbi-5 text-center"
            >
              <div className="text-small text-text-muted line-through mb-borbi-2">{m.before}</div>
              <div className="font-display text-h2 text-accent-primary">
                <AnimatedCounter end={m.value} suffix={m.suffix} prefix={m.prefix} />
              </div>
              <div className="text-small uppercase tracking-wide text-text-muted mt-borbi-2">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonial */}
      <div className="max-w-3xl mx-auto px-borbi-5 lg:px-borbi-7 pb-borbi-10">
        <TestimonialBlock {...study.testimonial} />
      </div>

      {/* CTA Bar */}
      <div
        className="text-center py-borbi-9"
        style={{
          background: `linear-gradient(135deg, ${accentColor ?? 'var(--accent-primary)'}10, transparent)`,
        }}
      >
        <h3 className="font-display text-h2 text-text-primary mb-borbi-5">
          Ready for results like these?
        </h3>
        <Button variant="primary" size="lg" href="#contact">
          Book a Strategy Call
        </Button>
      </div>
    </article>
  );
}

/** Compact card for grid listings */
export function CaseStudyCard({ study, className = '' }: { study: CaseStudy; className?: string }) {
  return (
    <a
      href={`/case-studies/${study.id}`}
      className={`block bg-bg-surface border border-white/[0.04] rounded-borbi-lg overflow-hidden group transition-all duration-base ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_0_40px_var(--accent-glow)] ${className}`}
    >
      {/* Image placeholder */}
      <div className="h-48 bg-bg-elevated flex items-center justify-center transition-transform duration-base group-hover:scale-[1.05]">
        <span className="font-display text-h2 text-text-muted/30">{study.company[0]}</span>
      </div>
      <div className="p-borbi-6">
        <div className="text-small uppercase tracking-wide text-text-muted mb-borbi-2">
          {study.category}
        </div>
        <h3 className="font-body font-semibold text-h3 text-text-primary mb-borbi-2">
          {study.company}
        </h3>
        <p className="text-body text-text-secondary mb-borbi-4">{study.headline}</p>
        <span className="text-small text-accent-primary group-hover:underline">
          Read Case Study →
        </span>
      </div>
    </a>
  );
}
