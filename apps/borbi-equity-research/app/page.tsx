'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Nav, Footer, Button, Section, TestimonialBlock, MetricsDisplay } from '@borbi/components';
import { ScrollReveal } from '@borbi/components/ScrollReveal';
import { StoryEngine } from '@borbi/components/StoryEngine';
import { getCaseStudiesByArm } from '@borbi/data';
import { easings } from '@borbi/design-tokens';

const navLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Results', href: '#results' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Contact', href: '#contact' },
];

const studies = getCaseStudiesByArm('equity-research');

function ValuationCalculator() {
  const [revenue, setRevenue] = useState(10);
  const [growth, setGrowth] = useState(25);
  const multiple = growth > 40 ? 12 : growth > 20 ? 8 : growth > 10 ? 5 : 3;
  const valuation = revenue * multiple;

  return (
    <div className="bg-bg-surface border border-white/[0.04] rounded-borbi-xl p-8 max-w-lg mx-auto">
      <h3 className="font-body font-semibold text-lg text-text-primary mb-6">Quick Valuation Estimate</h3>
      <div className="space-y-6">
        <div>
          <label className="text-sm text-text-muted uppercase tracking-wide">Annual Revenue ($M)</label>
          <input
            type="range" min="1" max="100" value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full mt-2 accent-[#6C3CE0]"
          />
          <div className="text-right text-sm text-text-secondary">${revenue}M</div>
        </div>
        <div>
          <label className="text-sm text-text-muted uppercase tracking-wide">Revenue Growth (%)</label>
          <input
            type="range" min="0" max="100" value={growth}
            onChange={(e) => setGrowth(Number(e.target.value))}
            className="w-full mt-2 accent-[#6C3CE0]"
          />
          <div className="text-right text-sm text-text-secondary">{growth}%</div>
        </div>
        <div className="border-t border-white/[0.04] pt-6">
          <div className="text-sm text-text-muted uppercase tracking-wide mb-2">Estimated Valuation</div>
          <div className="font-display text-h1 text-[#6C3CE0]">${valuation}M</div>
          <div className="text-sm text-text-muted mt-1">{multiple}x revenue multiple</div>
        </div>
      </div>
      <p className="text-xs text-text-muted mt-4">Simplified estimate. Full analysis requires comprehensive due diligence.</p>
    </div>
  );
}

export default function EquityResearchPage() {
  return (
    <>
      <Nav brand="Borbi | Research" links={navLinks} accentColor="#6C3CE0" />

      {/* Hero — The Terminal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Bloomberg-style background */}
        <div className="absolute inset-0 opacity-20">
          {/* Ticker bar */}
          <div className="absolute top-20 inset-x-0 overflow-hidden">
            <motion.div className="flex gap-12 whitespace-nowrap font-mono text-xs"
              animate={{ x: [0, -800] }} transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}>
              {['AAPL +2.3%', 'MSFT +1.1%', 'GOOGL -0.4%', 'AMZN +3.2%', 'NVDA +5.1%', 'META +0.8%', 'TSLA -1.2%', 'BRK.B +0.6%'].map((t) => (
                <span key={t} className={t.includes('-') ? 'text-red-400' : 'text-[#6C3CE0]'}>{t}</span>
              ))}
            </motion.div>
          </div>
          {/* Data panels */}
          <div className="absolute top-40 left-[10%] font-mono text-xs text-[#6C3CE0]/40 space-y-1">
            <div>REV_GROWTH  25.4%</div>
            <div>EBITDA_M    $12.8M</div>
            <div>EV/REV      8.2x</div>
            <div>FCF_YIELD   4.1%</div>
          </div>
          <div className="absolute bottom-40 right-[10%] font-mono text-xs text-[#6C3CE0]/40 space-y-1">
            <div>COMP_TABLE  LOADED</div>
            <div>DCF_MODEL   READY</div>
            <div>SENSITIVITY OK</div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-[900px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm uppercase tracking-[0.04em] text-[#6C3CE0] mb-6 font-mono">Borbi Equity Research</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="font-display text-display text-text-primary">
            Data-Driven Stock Analysis<br />for Serious Investors
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }}
            className="text-lg text-text-secondary mt-6 max-w-xl mx-auto">
            AI-accelerated due diligence, valuation modeling, and market intelligence for funds and operators.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#results">See Our Research</Button>
            <Button variant="text" href="#contact">Request a Sample</Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <Section className="!py-16 border-y border-white/[0.04]">
        <MetricsDisplay metrics={[
          { value: 75, suffix: '%', label: 'Faster Due Diligence' },
          { value: 47, suffix: '+', label: 'Data Sources' },
          { value: 3, suffix: 'x', label: 'Analyst Productivity' },
          { value: 5, suffix: ' days', label: 'Avg Research Cycle' },
        ]} />
      </Section>

      {/* Capabilities */}
      <Section id="capabilities">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">Capabilities</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '📊', title: 'Valuation Modeling', desc: 'DCF, comp tables, precedent transactions. AI-assisted models delivered in days, not weeks.' },
            { icon: '🔍', title: 'Due Diligence', desc: 'Comprehensive market analysis, competitive landscapes, and risk assessments at startup speed.' },
            { icon: '📈', title: 'Market Intelligence', desc: 'Real-time sentiment analysis on earnings calls, SEC filings, and news. Insights in minutes.' },
            { icon: '📋', title: 'Research Reports', desc: 'Beautifully typeset, rigorously sourced reports that rival bulge bracket output.' },
            { icon: '🧮', title: 'Financial Modeling', desc: 'Custom models with sensitivity analysis, scenario planning, and Monte Carlo simulations.' },
            { icon: '🎯', title: 'Sector Coverage', desc: 'Deep expertise in tech, healthcare, fintech, and consumer. Expanding coverage quarterly.' },
          ].map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div className="bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-8 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Valuation Calculator */}
      <Section className="bg-bg-surface/30">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-4">Try It</h2>
          <p className="text-lg text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Get a rough valuation estimate. Full analysis available on request.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <ValuationCalculator />
        </ScrollReveal>
      </Section>

      {/* Case Studies */}
      <Section id="results">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">Client Results</h2>
        </ScrollReveal>
        {studies.map((study) => (
          <div key={study.id} className="mb-16">
            <StoryEngine study={study} accentColor="#6C3CE0" />
          </div>
        ))}
      </Section>

      {/* Methodology */}
      <Section id="methodology" className="bg-bg-surface/30">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">Our Methodology</h2>
        </ScrollReveal>
        <div className="max-w-2xl mx-auto space-y-6">
          {[
            { title: 'Data Ingestion', desc: 'We pull from 47+ data sources including SEC filings, earnings transcripts, alternative data, and proprietary databases.' },
            { title: 'AI-Assisted Analysis', desc: 'Machine learning models identify patterns, extract key metrics, and flag anomalies that human analysts might miss.' },
            { title: 'Human Validation', desc: 'Every insight is reviewed by experienced analysts. AI accelerates — humans validate and contextualize.' },
            { title: 'Deliverable', desc: 'Clean, actionable reports with clear recommendations, confidence intervals, and supporting evidence.' },
          ].map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <details className="group bg-bg-surface border border-white/[0.04] rounded-borbi-lg">
                <summary className="p-6 cursor-pointer flex justify-between items-center text-text-primary font-semibold hover:text-[#6C3CE0] transition-colors">
                  {s.title}
                  <span className="text-text-muted group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="px-6 pb-6 text-text-secondary">{s.desc}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="text-center bg-gradient-to-b from-transparent to-[#6C3CE0]/5">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary mb-4">Request a Sample Report</h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
            See the quality before you commit. We&apos;ll send you a redacted sample from a recent engagement.
          </p>
          <Button variant="primary" size="lg" href="mailto:research@borbi.com">Request Sample</Button>
        </ScrollReveal>
      </Section>

      <Footer brand="Borbi | Research" />
    </>
  );
}
