'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Nav, Footer, Button, Section, TestimonialBlock, MetricsDisplay } from '@borbi/components';
import { ScrollReveal } from '@borbi/components/ScrollReveal';
import { easings } from '@borbi/design-tokens';

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

function TypingHero() {
  const text = 'Buy Pre-Trained AI Agents';
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <h1 className="font-display text-display text-text-primary">
      {displayed}
      <span className={`inline-block w-[3px] h-[0.9em] bg-[#6C3CE0] ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
    </h1>
  );
}

const progressionSteps = [
  { level: 'Beginner', color: '#6C3CE0', skills: ['Prompt Engineering', 'Basic Chains', 'Tool Use'], pct: 25 },
  { level: 'Intermediate', color: '#6C3CE0', skills: ['RAG Systems', 'Multi-Step Agents', 'Memory'], pct: 50 },
  { level: 'Advanced', color: '#6C3CE0', skills: ['Custom Models', 'Production Deployment', 'Orchestration'], pct: 75 },
  { level: 'Expert', color: '#6C3CE0', skills: ['Multi-Agent Systems', 'Self-Improving Agents', 'Enterprise Scale'], pct: 100 },
];

export default function TrainingPage() {
  return (
    <>
      <Nav brand="Borbi | Training" links={navLinks} accentColor="#6C3CE0" />

      {/* Hero — The Cursor */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Code editor background */}
        <div className="absolute inset-0 opacity-10">
          <pre className="font-mono text-xs text-[#6C3CE0]/30 p-20 leading-relaxed overflow-hidden">
{`import { Agent } from '@borbi/agents';

const researcher = new Agent({
  name: 'Research Assistant',
  model: 'claude-opus-4',
  tools: [webSearch, fileRead, analyze],
  memory: vectorStore,
});

const result = await researcher.run(
  'Analyze Q4 earnings for NVDA'
);

// Agent autonomously:
// 1. Searched for earnings data
// 2. Extracted key metrics
// 3. Compared to estimates
// 4. Generated summary`}
          </pre>
        </div>

        <div className="relative z-10 text-center max-w-[900px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm uppercase tracking-[0.04em] text-[#6C3CE0] mb-6 font-mono">Borbi Training</motion.div>
          <TypingHero />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.5 }}
            className="text-lg text-text-secondary mt-6 max-w-xl mx-auto">
            Hands-on training programs that take you from prompt engineering to production-ready AI agent deployment.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#programs">Start Learning</Button>
            <Button variant="text" href="#contact">Talk to Us</Button>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <Section className="!py-16 border-y border-white/[0.04]">
        <MetricsDisplay metrics={[
          { value: 1200, suffix: '+', label: 'Agents Deployed' },
          { value: 340, suffix: '+', label: 'Hours of Content' },
          { value: 850, suffix: '+', label: 'Active Learners' },
          { value: 96, suffix: '%', label: 'Completion Rate' },
        ]} />
      </Section>

      {/* Learning Paths — Progression */}
      <Section id="programs">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-4">Your Path to Mastery</h2>
          <p className="text-lg text-text-secondary text-center mb-16 max-w-xl mx-auto">
            A structured journey from AI curious to production expert.
          </p>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-bg-subtle" />
            {progressionSteps.map((step, i) => (
              <ScrollReveal key={step.level} delay={i * 0.1}>
                <div className="relative flex gap-6 mb-12">
                  {/* Node */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-mono font-bold"
                      style={{ borderColor: step.color, color: step.color, backgroundColor: `${step.color}10` }}>
                      {step.pct}%
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-6">
                    <h3 className="font-semibold text-lg text-text-primary mb-3" style={{ color: step.color }}>{step.level}</h3>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill) => (
                        <span key={skill} className="text-xs bg-bg-elevated text-text-secondary px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Agent Capabilities */}
      <Section id="capabilities" className="bg-bg-surface/30">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">What You&apos;ll Build</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🔍', title: 'Research Agents', desc: 'Autonomous agents that search, analyze, and synthesize information from any source.' },
            { icon: '💬', title: 'Conversational AI', desc: 'Context-aware chatbots with memory, personality, and tool use capabilities.' },
            { icon: '📊', title: 'Data Analysts', desc: 'Agents that query databases, generate visualizations, and surface insights.' },
            { icon: '✍️', title: 'Content Creators', desc: 'Writing assistants that draft, edit, and optimize content with your brand voice.' },
            { icon: '🔄', title: 'Workflow Agents', desc: 'Agents that orchestrate multi-step processes across tools and platforms.' },
            { icon: '🧪', title: 'Code Assistants', desc: 'AI pair programmers that write, review, and debug code in your codebase.' },
          ].map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div className="bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-8 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] transition-all duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg text-text-primary mb-2">{s.title}</h3>
                <p className="text-text-secondary">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Course Cards */}
      <Section>
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary text-center mb-16">Featured Programs</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'AI Agents Fundamentals', level: 'Beginner', duration: '8 weeks', modules: 12, desc: 'From zero to your first production agent.' },
            { title: 'Advanced Agent Architecture', level: 'Advanced', duration: '6 weeks', modules: 8, desc: 'Multi-agent systems, RAG, and orchestration.' },
            { title: 'Enterprise AI Deployment', level: 'Expert', duration: '4 weeks', modules: 6, desc: 'Scale, monitor, and govern AI agents in production.' },
          ].map((course, i) => (
            <ScrollReveal key={course.title} delay={i * 0.08}>
              <div className="bg-bg-surface border border-white/[0.04] rounded-borbi-lg overflow-hidden group hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] transition-all duration-300">
                <div className="h-40 bg-gradient-to-br from-[#6C3CE0]/10 to-bg-elevated flex items-center justify-center">
                  <span className="font-mono text-[#6C3CE0]/40 text-5xl">{'{ }'}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-[#6C3CE0]/10 text-[#6C3CE0] px-2 py-0.5 rounded-full">{course.level}</span>
                    <span className="text-xs text-text-muted">{course.duration}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-text-primary mb-2">{course.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{course.desc}</p>
                  <div className="text-xs text-text-muted">{course.modules} modules</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section id="community" className="bg-bg-surface/30">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <TestimonialBlock
              quote="I went from knowing nothing about AI agents to deploying a research assistant that saves our team 20 hours a week. The curriculum is incredibly well-structured."
              author="Alex Rivera"
              title="Product Manager"
              company="ScaleOps"
            />
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section id="contact" className="text-center bg-gradient-to-b from-transparent to-[#6C3CE0]/5">
        <ScrollReveal>
          <h2 className="font-display text-h1 text-text-primary mb-4">Start Building Agents Today</h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
            Join 850+ learners building the next generation of AI agents. Start with a free intro module.
          </p>
          <Button variant="primary" size="lg" href="mailto:training@borbi.com">Start Learning</Button>
        </ScrollReveal>
      </Section>

      <Footer brand="Borbi | Training" />
    </>
  );
}
