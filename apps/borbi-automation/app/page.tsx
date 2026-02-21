'use client';

import { motion } from 'framer-motion';
import { Nav, Footer, Button, Section, TestimonialBlock, MetricsDisplay } from '@borbi/components';
import { ScrollReveal } from '@borbi/components/ScrollReveal';
import { StoryEngine } from '@borbi/components/StoryEngine';
import { getCaseStudiesByArm } from '@borbi/data';
import { easings } from '@borbi/design-tokens';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

const studies = getCaseStudiesByArm('automation');

const integrations = [
  'Slack', 'Google Sheets', 'HubSpot', 'Salesforce', 'Shopify', 'Stripe',
  'Airtable', 'Notion', 'Gmail', 'n8n', 'Zapier', 'GitHub',
  'Jira', 'Twilio', 'SendGrid', 'PostgreSQL',
];

export default function AutomationPage() {
  return (
    <>
      <Nav brand="Borbi | Automation" links={navLinks} accentColor="#22D3EE" />

      {/* Hero — The Workflow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated workflow diagram */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <svg viewBox="0 0 800 200" className="w-full max-w-4xl">
            {/* Nodes */}
            <motion.g>
              {/* Manual Task (crossed out) */}
              <rect x="50" y="70" width="140" height="60" rx="12" fill="#1C1F2B" stroke="#DC2626" strokeWidth="1.5" />
              <text x="120" y="95" textAnchor="middle" fill="#DC2626" fontSize="11" fontFamily="Inter">Manual Task</text>
              <text x="120" y="115" textAnchor="middle" fill="#5A5E6E" fontSize="9" fontFamily="Inter">15 hrs/week</text>
              <line x1="60" y1="65" x2="180" y2="135" stroke="#DC2626" strokeWidth="1.5" opacity="0.5" />

              {/* Arrow */}
              <motion.line x1="200" y1="100" x2="310" y2="100" stroke="#22D3EE" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.8 }} />

              {/* Borbi Automation */}
              <motion.rect x="320" y="70" width="160" height="60" rx="12" fill="#22D3EE" fillOpacity="0.1" stroke="#22D3EE" strokeWidth="1.5"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
              <text x="400" y="95" textAnchor="middle" fill="#22D3EE" fontSize="11" fontFamily="Inter" fontWeight="600">Borbi Automation</text>
              <text x="400" y="115" textAnchor="middle" fill="#5CEBDF" fontSize="9" fontFamily="Inter">n8n • AI • APIs</text>

              {/* Arrow */}
              <motion.line x1="490" y1="100" x2="600" y2="100" stroke="#22D3EE" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 0.8 }} />

              {/* Done */}
              <motion.rect x="610" y="70" width="140" height="60" rx="12" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="1.5"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />
              <text x="680" y="95" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="Inter" fontWeight="600">Done in Seconds</text>
              <text x="680" y="115" textAnchor="middle" fill="#10B981" fontSize="9" fontFamily="Inter">✓ Automated</text>
            </motion.g>

            {/* Flow particles */}
            {[0, 1, 2].map((i) => (
              <motion.circle key={i} r="3" fill="#22D3EE"
                animate={{ cx: [200, 310, 490, 600], cy: [100, 100, 100, 100] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 1, ease: 'linear' }} />
            ))}
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-[900px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm uppercase tracking-[0.04em] text-[#22D3EE] mb-6">Borbi Automation</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="font-display text-display text-text-primary">
            Stop Working.<br />Start Automating.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }}
            className="text-lg text-text-secondary mt-6 max-w-xl mx-auto">
            Workflow automation that eliminates manual work, reduces errors, and scales your operations.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#results">See Time Saved</Button>
            <Button variant="text" href="#contact">Calculate Your ROI</Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <Section className="!py-16 border-y border-white/[0.04]">
        <MetricsDisplay metrics={[
          { value: 93, suffix: '%', label: 'Time Saved on Avg' },
          { value: 156, suffix: 'K', prefix: '$', label: 'Annual Labor Saved' },
          { value: 0, suffix: ' errors', label: 'Data Entry Mistakes' },
          { value: 24, suffix: '/7', label: 'Uptime' },
        ]} />
      </Section>

      {/* Integration Showcase */}
      <Section id="integrations">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-4">Connects to Everything</h2>
          <p className="text-lg text-text-secondary text-center mb-16 max-w-xl mx-auto">
            We integrate with your existing tools. No rip-and-replace.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-3xl mx-auto">
          {integrations.map((name, i) => (
            <ScrollReveal key={name} delay={i * 0.03}>
              <div className="aspect-square bg-bg-surface border border-white/[0.04] rounded-borbi-md flex items-center justify-center text-xs text-text-muted hover:border-[#22D3EE]/30 hover:text-[#22D3EE] transition-all duration-300 cursor-default group">
                <span className="text-center leading-tight">{name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Solutions */}
      <Section id="solutions" className="bg-bg-surface/30">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">What We Automate</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '📋', title: 'Data Entry & Sync', desc: 'Auto-sync data between platforms. No more copy-paste between Shopify, HubSpot, and Sheets.' },
            { icon: '📊', title: 'Reporting', desc: 'Automated reports compiled from multiple data sources, delivered on schedule.' },
            { icon: '🔔', title: 'Notifications', desc: 'Smart alerts via Slack, email, or SMS when specific conditions are met.' },
            { icon: '🤝', title: 'CRM Workflows', desc: 'Lead scoring, pipeline updates, follow-up sequences — all automated.' },
            { icon: '📦', title: 'Order Processing', desc: 'From order placed to fulfillment triggered — end-to-end automation.' },
            { icon: '🧠', title: 'AI Workflows', desc: 'Intelligent automations that use AI for classification, summarization, and decision-making.' },
          ].map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div className="bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-8 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="results">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">Time We&apos;ve Given Back</h2>
        </ScrollReveal>
        {studies.map((study) => (
          <div key={study.id} className="mb-16">
            <StoryEngine study={study} accentColor="#22D3EE" />
          </div>
        ))}
      </Section>

      {/* CTA */}
      <Section id="contact" className="text-center bg-gradient-to-b from-transparent to-[#22D3EE]/5">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary mb-4">Calculate Your Time Savings</h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
            Tell us what you&apos;re doing manually. We&apos;ll show you how much time and money automation saves.
          </p>
          <Button variant="primary" size="lg" href="mailto:automation@borbi.com">Get Your ROI Estimate</Button>
        </ScrollReveal>
      </Section>

      <Footer brand="Borbi | Automation" />
    </>
  );
}
