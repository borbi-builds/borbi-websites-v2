'use client';

import { motion } from 'framer-motion';
import { Nav, Footer, Button, Section, TestimonialBlock, MetricsDisplay } from '@borbi/components';
import { ScrollReveal } from '@borbi/components/ScrollReveal';
import { StoryEngine } from '@borbi/components/StoryEngine';
import { getCaseStudiesByArm } from '@borbi/data';
import { easings } from '@borbi/design-tokens';

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const studies = getCaseStudiesByArm('web-services');

const techStack = ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Three.js', 'Vercel', 'Shopify', 'Sanity', 'Figma'];

export default function WebServicesPage() {
  return (
    <>
      <Nav brand="Borbi | Websites" links={navLinks} accentColor="#A855F7" />

      {/* Hero — The Browser Window */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="relative z-10 text-center max-w-[900px]">
          {/* 3D Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 5 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: easings.outExpo as unknown as number[] }}
            className="mb-12 perspective-[1000px]"
          >
            <div className="bg-bg-surface border border-white/[0.08] rounded-borbi-lg overflow-hidden shadow-2xl max-w-2xl mx-auto transform hover:rotate-x-1 transition-transform duration-500">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-bg-elevated border-b border-white/[0.04]">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 ml-4 bg-bg-void rounded-full px-4 py-1 text-xs text-text-muted">yoursite.com</div>
              </div>
              {/* Scrolling content mockup */}
              <div className="h-64 bg-gradient-to-b from-[#A855F7]/10 to-bg-void p-8 relative overflow-hidden">
                <motion.div
                  animate={{ y: [0, -100, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                >
                  <div className="h-8 w-48 bg-white/10 rounded mb-4" />
                  <div className="h-4 w-64 bg-white/5 rounded mb-2" />
                  <div className="h-4 w-56 bg-white/5 rounded mb-8" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-[#A855F7]/10 rounded-lg" />
                    <div className="h-24 bg-[#A855F7]/10 rounded-lg" />
                    <div className="h-24 bg-[#A855F7]/10 rounded-lg" />
                  </div>
                  <div className="mt-8 h-4 w-40 bg-white/5 rounded mb-2" />
                  <div className="h-32 bg-white/5 rounded-lg mt-4" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="font-display text-display text-text-primary"
          >
            Websites That Make<br />People Stop Scrolling
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="text-lg text-text-secondary mt-6 max-w-xl mx-auto"
          >
            Beautifully crafted, blazing fast, conversion-optimized websites built with the latest technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" href="#portfolio">View Our Work</Button>
            <Button variant="text" href="#contact">Start a Project</Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <Section className="!py-16 border-y border-white/[0.04]">
        <MetricsDisplay metrics={[
          { value: 47, suffix: '+', label: 'Sites Launched' },
          { value: 209, suffix: '%', label: 'Avg Conversion Lift' },
          { value: 1.1, suffix: 's', label: 'Avg Load Time', decimals: 1 },
          { value: 98, suffix: '/100', label: 'Lighthouse Score' },
        ]} />
      </Section>

      {/* Tech Stack Ribbon */}
      <Section className="!py-12 overflow-hidden">
        <div className="flex gap-12 animate-scroll">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-text-muted text-sm uppercase tracking-wide whitespace-nowrap hover:text-[#A855F7] transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .animate-scroll { animation: scroll 20s linear infinite; }
        `}</style>
      </Section>

      {/* Portfolio / Case Studies */}
      <Section id="portfolio" className="bg-bg-surface/30">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">Our Work</h2>
        </ScrollReveal>
        {studies.map((study) => (
          <div key={study.id} className="mb-16">
            <StoryEngine study={study} accentColor="#A855F7" />
          </div>
        ))}
      </Section>

      {/* Services */}
      <Section id="services">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">What We Build</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🎨', title: 'Custom Design', desc: 'Bespoke designs that capture your brand. No templates, no shortcuts.' },
            { icon: '⚡', title: 'Performance', desc: 'Sub-second load times. 90+ Lighthouse scores. Blazing fast on every device.' },
            { icon: '🛒', title: 'E-Commerce', desc: 'Shopify, custom storefronts, checkout optimization. Built to convert.' },
            { icon: '📱', title: 'Responsive', desc: 'Beautiful on every screen. Mobile-first design that doesn\'t compromise.' },
            { icon: '🔧', title: 'CMS Integration', desc: 'Sanity, Contentful, or custom. Your content, your control.' },
            { icon: '📈', title: 'CRO Built-In', desc: 'Every design decision backed by conversion data. Pretty AND profitable.' },
          ].map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div className="bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-8 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Process Timeline */}
      <Section id="process" className="bg-bg-surface/30">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">Our Process</h2>
        </ScrollReveal>
        <div className="max-w-2xl mx-auto space-y-12">
          {[
            { step: '01', title: 'Discovery & Strategy', desc: 'We learn your business, your audience, and your goals. Then we plan the architecture.' },
            { step: '02', title: 'Design', desc: 'High-fidelity mockups in Figma. You see everything before a line of code is written.' },
            { step: '03', title: 'Development', desc: 'Next.js, Tailwind, Framer Motion. Built for performance and maintainability.' },
            { step: '04', title: 'Launch & Optimize', desc: 'Deploy, monitor, A/B test, and iterate. Your site gets better every week.' },
          ].map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.08}>
              <div className="flex gap-6">
                <div className="text-sm font-mono text-[#A855F7] pt-1">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-lg text-text-primary mb-2">{s.title}</h3>
                  <p className="text-text-secondary">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="text-center bg-gradient-to-b from-transparent to-[#A855F7]/5">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary mb-4">See What We&apos;d Build For You</h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
            Tell us about your project. We&apos;ll show you what&apos;s possible.
          </p>
          <Button variant="primary" size="lg" href="mailto:websites@borbi.com">Start a Project</Button>
        </ScrollReveal>
      </Section>

      <Footer brand="Borbi | Websites" />
    </>
  );
}
