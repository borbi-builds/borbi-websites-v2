'use client';

import { motion } from 'framer-motion';
import { Nav, Footer, Button, Section, StatCard, FeatureCard, TestimonialBlock } from '@borbi/components';
import { caseStudies } from '@borbi/data';
import { CaseStudyCard } from '@borbi/components/StoryEngine';
import { AnimatedCounter } from '@borbi/components/AnimatedCounter';
import { ScrollReveal } from '@borbi/components/ScrollReveal';
import { easings, durations } from '@borbi/design-tokens';
import { ConstellationHero } from '../components/ConstellationHero';
import { HubVisualization } from '../components/HubVisualization';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Results', href: '#results' },
  { label: 'How We Work', href: '#process' },
  { label: 'About', href: '#about' },
];

const arms = [
  { name: 'Marketing', color: '#FF6B2C', icon: '📈', desc: 'Lead gen, paid media, SEO, and growth systems that fill your pipeline.', href: '/marketing' },
  { name: 'Website Services', color: '#A855F7', icon: '🌐', desc: 'High-converting websites that make people stop scrolling.', href: '/web-services' },
  { name: 'Automation', color: '#22D3EE', icon: '⚡', desc: 'Workflow automation that eliminates manual work and scales operations.', href: '/automation' },
  { name: 'Equity Research', color: '#10B981', icon: '📊', desc: 'Institutional-grade research and due diligence at startup speed.', href: '/equity-research' },
  { name: 'Training & Agents', color: '#F59E0B', icon: '🤖', desc: 'AI agent training and deployment for teams ready to level up.', href: '/training' },
];

const stats = [
  { value: 2.4, suffix: 'M+', label: 'Revenue Generated', prefix: '$' },
  { value: 47, suffix: '+', label: 'Projects Delivered' },
  { value: 93, suffix: '%', label: 'Client Retention' },
  { value: 340, suffix: '%', label: 'Average ROI' },
];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We audit your current state, identify gaps, and map opportunities across all five capability areas.' },
  { step: '02', title: 'Strategy', desc: 'We design a custom playbook — marketing funnels, site architecture, automation flows, research frameworks, or training curricula.' },
  { step: '03', title: 'Execute & Scale', desc: 'We build, launch, and optimize. Every system is designed to compound — getting better the longer it runs.' },
];

export default function HomePage() {
  return (
    <>
      <Nav brand="Borbi" links={navLinks} ctaLabel="Book a Call" ctaHref="#contact" />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <ConstellationHero />
        <div className="relative z-10 max-w-[900px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="font-display text-display text-text-primary leading-[1.05] tracking-[-0.03em]"
          >
            We don&apos;t just consult.<br />
            We build the machine.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto"
          >
            AI-powered consulting across marketing, web, automation, research &amp; training.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" href="#results">See Our Work</Button>
            <Button variant="text" href="#contact">Book a Call</Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5A5E6E" strokeWidth="1.5"><path d="M7 10l5 5 5-5" /></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <Section className="!py-16 border-y border-white/[0.04]">
        <ScrollReveal stagger>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <motion.div key={s.label} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easings.outExpo as unknown as number[] } } }} className="text-center">
                <div className="font-display text-h1 text-text-primary">
                  <AnimatedCounter end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
                </div>
                <div className="text-sm uppercase tracking-[0.04em] text-text-muted mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* Platform / Hub */}
      <Section id="platform">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-h1 text-text-primary">One Platform. Infinite Leverage.</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Five specialized arms. Thirteen revenue streams. One integrated system that compounds.
            </p>
          </div>
        </ScrollReveal>
        <HubVisualization arms={arms} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {arms.map((arm, i) => (
            <ScrollReveal key={arm.name} delay={i * 0.06}>
              <a href={arm.href} className="block bg-bg-surface border border-white/[0.04] rounded-[20px] p-12 group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,107,44,0.15)]" style={{ borderTopColor: arm.color, borderTopWidth: '2px' }}>
                <div className="text-3xl mb-4">{arm.icon}</div>
                <h3 className="font-semibold text-xl text-text-primary mb-2">{arm.name}</h3>
                <p className="text-text-secondary">{arm.desc}</p>
                <span className="inline-block mt-4 text-sm group-hover:translate-x-1 transition-transform" style={{ color: arm.color }}>
                  Explore →
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Results / Case Studies */}
      <Section id="results" className="bg-bg-surface/50">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-h1 text-text-primary">Results That Speak</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Real companies. Real metrics. Real transformation.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.slice(0, 4).map((cs, i) => (
            <ScrollReveal key={cs.id} delay={i * 0.06}>
              <CaseStudyCard study={cs} />
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="secondary" href="/case-studies">View All Case Studies</Button>
        </div>
      </Section>

      {/* How We Work */}
      <Section id="process">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-h1 text-text-primary">How We Work</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.08}>
              <div className="relative">
                <div className="text-sm font-mono text-accent-primary mb-4">{step.step}</div>
                <h3 className="font-semibold text-xl text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Why Borbi */}
      <Section className="bg-bg-surface/30">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-h1 text-text-primary">Why Borbi</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🔗', title: 'Integrated, Not Siloed', desc: 'Most agencies do one thing. We connect marketing, web, automation, research, and training into one compounding system.' },
            { icon: '🤖', title: 'AI-Native', desc: 'Every workflow we build leverages AI — not as a buzzword, but as a force multiplier that makes everything faster and smarter.' },
            { icon: '📊', title: 'Metrics-Obsessed', desc: 'We don\'t do "brand awareness." We do revenue, leads, time saved, and ROI. Every engagement has measurable outcomes.' },
            { icon: '🏗️', title: 'We Build, Not Just Advise', desc: 'No 200-page decks that collect dust. We build the systems, launch the campaigns, deploy the automations. Then we optimize.' },
          ].map((prop, i) => (
            <ScrollReveal key={prop.title} delay={i * 0.06}>
              <FeatureCard icon={<span>{prop.icon}</span>} title={prop.title} description={prop.desc} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="text-center">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary mb-4">Ready to Build Your Machine?</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
            Book a 30-minute strategy call. We&apos;ll audit your current state and show you exactly where the leverage is.
          </p>
          <Button variant="primary" size="lg" href="mailto:hello@borbi.com">
            Book a Strategy Call
          </Button>
        </ScrollReveal>
      </Section>

      <Footer />
    </>
  );
}
