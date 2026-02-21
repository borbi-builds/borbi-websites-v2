'use client';

import { motion } from 'framer-motion';
import { Nav, Footer, Button, Section, TestimonialBlock, MetricsDisplay } from '@borbi/components';
import { ScrollReveal } from '@borbi/components/ScrollReveal';
import { AnimatedCounter } from '@borbi/components/AnimatedCounter';
import { BeforeAfterSlider } from '@borbi/components/BeforeAfterSlider';
import { StoryEngine, CaseStudyCard } from '@borbi/components/StoryEngine';
import { getCaseStudiesByArm } from '@borbi/data';
import { easings } from '@borbi/design-tokens';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const studies = getCaseStudiesByArm('marketing');

export default function MarketingPage() {
  return (
    <>
      <Nav brand="Borbi | Marketing" links={navLinks} accentColor="#6C3CE0" />

      {/* Hero — The Dashboard */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Mock dashboard background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[15%] left-[10%] w-64 h-40 bg-bg-surface rounded-borbi-lg border border-white/[0.04] p-4">
            <div className="text-xs text-text-muted mb-2">Monthly Leads</div>
            <div className="flex items-end gap-1 h-24">
              {[20, 35, 28, 45, 52, 48, 62, 78, 85, 92, 110, 142].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-[#6C3CE0] rounded-t-sm"
                  initial={{ height: 0 }}
                  animate={{ height: `${(h / 142) * 100}%` }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                />
              ))}
            </div>
          </div>
          <div className="absolute top-[20%] right-[10%] w-48 h-32 bg-bg-surface rounded-borbi-lg border border-white/[0.04] p-4">
            <div className="text-xs text-text-muted mb-1">Conversion Rate</div>
            <div className="font-display text-3xl text-[#6C3CE0]">8.4%</div>
            <div className="text-xs text-green-400 mt-1">↑ 340% vs baseline</div>
          </div>
          <div className="absolute bottom-[25%] left-[20%] w-56 h-28 bg-bg-surface rounded-borbi-lg border border-white/[0.04] p-4">
            <div className="text-xs text-text-muted mb-1">Revenue Pipeline</div>
            <div className="font-display text-2xl text-text-primary">$2.4M</div>
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="text-sm uppercase tracking-[0.04em] text-[#6C3CE0] mb-6"
          >
            Borbi Marketing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="font-display text-display text-text-primary"
          >
            62 Qualified Leads<br />In 30 Days
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="text-lg text-text-secondary mt-6 max-w-xl mx-auto"
          >
            Full-funnel lead generation. Paid media. SEO. Email. Growth systems that fill your pipeline and scale your revenue.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: easings.outExpo as unknown as number[] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg" href="#results">See Results</Button>
            <Button variant="text" href="#contact">Get a Free Audit</Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <Section className="!py-16 border-y border-white/[0.04]">
        <MetricsDisplay
          metrics={[
            { value: 2.4, prefix: '$', suffix: 'M+', label: 'Leads Generated Revenue', decimals: 1 },
            { value: 62, suffix: '+', label: 'Avg Leads/Month' },
            { value: 340, suffix: '%', label: 'Avg Conversion Lift' },
            { value: 23, prefix: '$', label: 'Avg Cost Per Lead' },
          ]}
        />
      </Section>

      {/* Before/After */}
      <Section id="services">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-h1 text-text-primary">The Transformation</h2>
            <p className="text-lg text-text-secondary mt-4">See what data-driven marketing looks like.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <BeforeAfterSlider
            className="h-[400px]"
            before={
              <div className="w-full h-[400px] bg-bg-elevated flex items-center justify-center p-8">
                <div className="text-center max-w-sm">
                  <div className="text-6xl mb-4 opacity-30">😐</div>
                  <div className="font-display text-h2 text-text-muted">Generic Landing Page</div>
                  <div className="text-text-muted mt-2">2% conversion rate</div>
                  <div className="text-text-muted">No tracking • No funnels • No growth</div>
                </div>
              </div>
            }
            after={
              <div className="w-full h-[400px] bg-gradient-to-br from-bg-surface to-bg-elevated flex items-center justify-center p-8">
                <div className="text-center max-w-sm">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="font-display text-h2 text-text-primary">Optimized Growth Engine</div>
                  <div className="text-[#6C3CE0] mt-2 font-semibold">8.4% conversion rate</div>
                  <div className="text-text-secondary">A/B tested • AI-optimized • Revenue tracked</div>
                </div>
              </div>
            }
          />
        </ScrollReveal>
      </Section>

      {/* Services */}
      <Section>
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">What We Build</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🎯', title: 'Paid Media', desc: 'Google Ads, Meta Ads, LinkedIn — precision-targeted campaigns that generate leads, not just impressions.' },
            { icon: '🔍', title: 'SEO & Content', desc: 'Rank for the keywords that drive revenue. Long-form content strategy backed by competitive research.' },
            { icon: '📧', title: 'Email Marketing', desc: 'Nurture sequences that convert cold leads to booked calls. Automated, personalized, effective.' },
            { icon: '📊', title: 'Analytics & CRO', desc: 'Conversion rate optimization backed by heatmaps, A/B tests, and real user behavior data.' },
            { icon: '🧲', title: 'Lead Magnets', desc: 'Irresistible offers that capture attention and emails. Calculators, guides, tools, quizzes.' },
            { icon: '🔄', title: 'Full Funnel', desc: 'Top to bottom. Awareness to revenue. Every stage optimized, measured, and compounding.' },
          ].map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div className="bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-8 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,107,44,0.15)] transition-all duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="results" className="bg-bg-surface/30">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">Client Results</h2>
        </ScrollReveal>
        {studies.map((study) => (
          <div key={study.id} className="mb-16">
            <StoryEngine study={study} accentColor="#6C3CE0" />
          </div>
        ))}
      </Section>

      {/* Process */}
      <Section id="process">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">Our Process</h2>
        </ScrollReveal>
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
          {['Audit', 'Strategy', 'Execute', 'Optimize', 'Scale'].map((step, i) => (
            <ScrollReveal key={step} delay={i * 0.08}>
              <div className="flex-1 text-center">
                <div className="w-12 h-12 rounded-full bg-[#6C3CE0]/10 text-[#6C3CE0] flex items-center justify-center mx-auto mb-4 text-sm font-mono font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-text-primary">{step}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <TestimonialBlock
              quote="Borbi didn't just hit our targets — they made us rethink what targets should be. Our pipeline went from $0 to $180K/mo in 90 days."
              author="Mike Reeves"
              title="Owner"
              company="Summit Mechanical"
            />
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section id="contact" className="text-center bg-gradient-to-b from-transparent to-[#6C3CE0]/5">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary mb-4">Ready to Fill Your Pipeline?</h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
            Get a free marketing audit. We&apos;ll show you exactly where the leads are hiding.
          </p>
          <Button variant="primary" size="lg" href="mailto:marketing@borbi.com">
            Get Your Free Audit
          </Button>
        </ScrollReveal>
      </Section>

      {/* Pricing */}
      <Section className="bg-bg-surface/50">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-h1 text-text-primary">Transparent Pricing</h2>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              Choose the plan that fits your growth stage.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Starter', price: '500', desc: 'Lead generation & basic analytics', features: ['Lead Gen Funnel', 'Basic Analytics', 'Email Nurture', 'Monthly Reports'] },
            { name: 'Growth', price: '2000', desc: 'Full funnel + paid media', features: ['Everything in Starter', 'Paid Media Campaigns', 'A/B Testing', 'Weekly Optimization', 'SEO Integration'], highlight: true },
            { name: 'Scale', price: '5000', desc: 'Enterprise growth systems', features: ['Everything in Growth', 'Custom Integrations', 'Dedicated Account Manager', 'Revenue Attribution', 'Conversion Optimization'] },
          ].map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.08}>
              <div className={`rounded-borbi-lg p-8 border transition-all duration-300 ${plan.highlight ? 'bg-gradient-to-b from-[#6C3CE0]/10 to-bg-surface border-[#6C3CE0]/50 transform scale-105' : 'bg-bg-surface border-white/[0.04] hover:border-white/[0.08]'}`}>
                <h3 className="font-display text-2xl text-text-primary mb-2">{plan.name}</h3>
                <div className="text-4xl font-display text-[#6C3CE0] mb-1">${plan.price}</div>
                <div className="text-sm text-text-secondary mb-6">/month</div>
                <p className="text-text-secondary text-sm mb-8">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-text-secondary flex items-start gap-3">
                      <span className="text-[#6C3CE0] mt-1">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? 'primary' : 'secondary'} className="w-full">
                  Get Started
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Footer brand="Borbi | Marketing" />
    </>
  );
}
