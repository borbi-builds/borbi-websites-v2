export interface CaseStudyData {
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
    decimals?: number;
  }>;
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
    rating: number;
  };
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 'summit-mechanical',
    company: 'Summit Mechanical',
    arm: 'marketing',
    category: 'Marketing • Lead Gen',
    headline: '0 to 62 qualified leads per month in 90 days',
    heroStat: { value: 62, suffix: '', context: 'qualified leads per month from zero' },
    challenge:
      'Summit Mechanical had zero digital presence and relied entirely on word-of-mouth referrals. Their competitors were dominating Google and Meta ads in the HVAC space.',
    solution:
      'We built a full-funnel lead generation system: SEO-optimized landing pages, Google Ads campaigns targeting high-intent HVAC keywords, and a Meta retargeting sequence that nurtured cold traffic into booked appointments.',
    result:
      '62 qualified leads per month within 90 days. Cost per lead dropped to $23 from industry average of $85. Pipeline went from $0 to $180K monthly.',
    metrics: [
      { label: 'Monthly Leads', before: '0', after: '62', value: 62 },
      { label: 'Cost Per Lead', before: '$85', after: '$23', value: 23, prefix: '$' },
      { label: 'Monthly Pipeline', before: '$0', after: '$180K', value: 180, suffix: 'K', prefix: '$' },
      { label: 'Google Rankings', before: 'None', after: 'Top 3', value: 3, suffix: ' keywords' },
    ],
    testimonial: {
      quote:
        "We went from hoping the phone would ring to having to hire two more technicians to handle the demand. Borbi didn't just get us leads — they built us a machine.",
      author: 'Mike Reeves',
      title: 'Owner',
      company: 'Summit Mechanical',
      rating: 5,
    },
  },
  {
    id: 'rosemarys-kitchen',
    company: "Rosemary's Kitchen",
    arm: 'marketing',
    category: 'Marketing • Restaurant',
    headline: '+$40K/mo in revenue through digital marketing',
    heroStat: { value: 40, suffix: 'K', context: 'additional monthly revenue' },
    challenge:
      "Rosemary's Kitchen was a beloved local restaurant struggling to fill seats on weeknights. They'd tried social media but had no strategy — just random posts with low engagement.",
    solution:
      'We launched targeted Instagram and Facebook campaigns featuring mouth-watering food photography, geo-targeted ads for the local area, and a loyalty email sequence that drove repeat visits.',
    result:
      '+$40K in monthly revenue. Weeknight covers up 85%. Instagram following grew from 800 to 12K. Email list hit 4,200 subscribers with 38% open rate.',
    metrics: [
      { label: 'Monthly Revenue', before: '$60K', after: '$100K', value: 40, suffix: 'K+', prefix: '$' },
      { label: 'Weeknight Covers', before: '40%', after: '85%', value: 85, suffix: '%' },
      { label: 'Instagram', before: '800', after: '12K', value: 12, suffix: 'K' },
      { label: 'Email Subscribers', before: '0', after: '4.2K', value: 4200 },
    ],
    testimonial: {
      quote:
        "Our weeknights used to be dead. Now we're turning people away on Tuesdays. I didn't think that was possible for a neighborhood restaurant.",
      author: 'Rosemary Deluca',
      title: 'Owner & Chef',
      company: "Rosemary's Kitchen",
      rating: 5,
    },
  },
  {
    id: 'thread-and-bone',
    company: 'Thread & Bone',
    arm: 'web-services',
    category: 'Web Services • E-Commerce',
    headline: '+209% conversion rate after complete redesign',
    heroStat: { value: 209, suffix: '%', context: 'increase in conversion rate' },
    challenge:
      'Thread & Bone, a premium leather goods brand, had a Shopify store that looked like a template. Their product quality was exceptional but their site made them look generic. Bounce rate was 72%.',
    solution:
      'We designed and built a bespoke Next.js storefront with immersive product photography, micro-interactions on product cards, a streamlined 2-step checkout, and a brand story that matched their craftsmanship.',
    result:
      'Conversion rate jumped from 1.1% to 3.4% (+209%). Average order value increased 34%. Bounce rate dropped to 38%. The site won an Awwwards Honorable Mention.',
    metrics: [
      { label: 'Conversion Rate', before: '1.1%', after: '3.4%', value: 209, suffix: '%' },
      { label: 'Avg Order Value', before: '$120', after: '$161', value: 34, suffix: '%+' },
      { label: 'Bounce Rate', before: '72%', after: '38%', value: 38, suffix: '%' },
      { label: 'Page Speed', before: '4.2s', after: '1.1s', value: 1.1, suffix: 's', decimals: 1 },
    ],
    testimonial: {
      quote:
        "Our website finally matches the quality of our products. Customers tell us they bought because the site felt premium. That's exactly what we needed.",
      author: 'James Thornton',
      title: 'Founder',
      company: 'Thread & Bone',
      rating: 5,
    },
  },
  {
    id: 'clarityhq',
    company: 'ClarityHQ',
    arm: 'web-services',
    category: 'Web Services • SaaS',
    headline: '+335% signup rate with new landing experience',
    heroStat: { value: 335, suffix: '%', context: 'increase in free trial signups' },
    challenge:
      'ClarityHQ, a project management SaaS, had a feature-heavy landing page that confused visitors. Their signup rate was 0.8% despite spending $50K/mo on ads.',
    solution:
      'We rebuilt their landing page with a "show don\'t tell" approach: an interactive product demo in the hero, social proof from recognizable logos, and a simplified value prop that focused on one core benefit.',
    result:
      'Signup rate jumped from 0.8% to 3.48% (+335%). Ad spend efficiency improved 4x. They raised their Series A three months later, partly citing the improved metrics.',
    metrics: [
      { label: 'Signup Rate', before: '0.8%', after: '3.48%', value: 335, suffix: '%' },
      { label: 'Ad Efficiency', before: '1x', after: '4x', value: 4, suffix: 'x' },
      { label: 'Time on Site', before: '45s', after: '3.2min', value: 3.2, suffix: 'min', decimals: 1 },
      { label: 'Demo Starts', before: '12/day', after: '89/day', value: 89, suffix: '/day' },
    ],
    testimonial: {
      quote:
        "Borbi turned our landing page from a brochure into a conversion machine. The interactive demo alone was worth 10x what we paid.",
      author: 'Priya Sharma',
      title: 'CEO',
      company: 'ClarityHQ',
      rating: 5,
    },
  },
  {
    id: 'packlane',
    company: 'Packlane',
    arm: 'automation',
    category: 'Automation • Operations',
    headline: '15 hours of manual work reduced to 1 hour',
    heroStat: { value: 93, suffix: '%', context: 'reduction in manual processing time' },
    challenge:
      'Packlane, a custom packaging company, had their operations team spending 15 hours per week manually transferring order data between Shopify, their production system, and shipping providers.',
    solution:
      'We built an n8n automation pipeline that watches for new Shopify orders, validates specifications, generates production tickets, syncs inventory, and triggers shipping labels — all automatically with error handling and Slack notifications.',
    result:
      '15 hours reduced to 1 hour of oversight per week. Zero data entry errors (down from ~8/week). Order-to-production time cut from 4 hours to 12 minutes.',
    metrics: [
      { label: 'Weekly Hours', before: '15hrs', after: '1hr', value: 93, suffix: '%' },
      { label: 'Data Errors', before: '8/week', after: '0', value: 0, suffix: ' errors' },
      { label: 'Order Processing', before: '4hrs', after: '12min', value: 12, suffix: 'min' },
      { label: 'Annual Savings', before: '$0', after: '$78K', value: 78, suffix: 'K', prefix: '$' },
    ],
    testimonial: {
      quote:
        "I used to dread Mondays because of the data entry backlog. Now our systems talk to each other and I focus on actual operations. It's like hiring three people for the price of one project.",
      author: 'David Park',
      title: 'Head of Operations',
      company: 'Packlane',
      rating: 5,
    },
  },
  {
    id: 'signal-north',
    company: 'Signal North',
    arm: 'automation',
    category: 'Automation • Analytics',
    headline: '20 hours of reporting reduced to 2 hours',
    heroStat: { value: 90, suffix: '%', context: 'reduction in reporting time' },
    challenge:
      'Signal North, a marketing analytics firm, spent 20 hours per week manually compiling client reports from Google Analytics, Meta Ads, and HubSpot into Google Slides presentations.',
    solution:
      'We automated the entire reporting pipeline: data pulls from all platforms via API, automated chart generation, templated Google Slides population, and scheduled email delivery to clients every Monday morning.',
    result:
      'Reporting went from 20 hours to 2 hours per week. Reports are now delivered by 7 AM Monday (previously Thursday). Client satisfaction scores increased 40%.',
    metrics: [
      { label: 'Weekly Hours', before: '20hrs', after: '2hrs', value: 90, suffix: '%' },
      { label: 'Delivery Time', before: 'Thursday', after: 'Monday 7AM', value: 3, suffix: ' days faster' },
      { label: 'Client Satisfaction', before: '72%', after: '96%', value: 96, suffix: '%' },
      { label: 'Reports/Week', before: '8', after: '24', value: 24 },
    ],
    testimonial: {
      quote:
        "Our clients think we hired a dedicated reporting team. It's actually just an automation that runs while we sleep. Borbi gave us back our Fridays.",
      author: 'Elena Vasquez',
      title: 'Managing Director',
      company: 'Signal North',
      rating: 5,
    },
  },
  {
    id: 'ridgeline-capital',
    company: 'Ridgeline Capital',
    arm: 'equity-research',
    category: 'Equity Research • Due Diligence',
    headline: '4-week research cycle compressed to 5 days',
    heroStat: { value: 75, suffix: '%', context: 'faster due diligence process' },
    challenge:
      'Ridgeline Capital, a mid-market PE firm, was spending 4 weeks on initial due diligence for each potential acquisition. Their analysts were drowning in manual financial modeling and competitive analysis.',
    solution:
      'We deployed AI-assisted research workflows: automated financial data extraction, comp table generation, market sizing models, and competitive landscape mapping. Analysts now review and refine rather than build from scratch.',
    result:
      'Due diligence timeline compressed from 4 weeks to 5 days. Analyst productivity up 3x. They evaluated 40% more deals in Q4 than any previous quarter.',
    metrics: [
      { label: 'Research Cycle', before: '4 weeks', after: '5 days', value: 75, suffix: '%' },
      { label: 'Analyst Output', before: '1x', after: '3x', value: 3, suffix: 'x' },
      { label: 'Deals Evaluated', before: '12/quarter', after: '17/quarter', value: 17 },
      { label: 'Cost per Report', before: '$8K', after: '$2.4K', value: 70, suffix: '%↓' },
    ],
    testimonial: {
      quote:
        "We used to pass on deals because we couldn't do diligence fast enough. Now we're competitive on timeline with firms 10x our size. Borbi leveled the playing field.",
      author: 'Robert Kimball',
      title: 'Managing Partner',
      company: 'Ridgeline Capital',
      rating: 5,
    },
  },
  {
    id: 'archer-analytics',
    company: 'Archer Analytics',
    arm: 'equity-research',
    category: 'Equity Research • Real-Time',
    headline: '+73% faster real-time market analysis',
    heroStat: { value: 73, suffix: '%', context: 'improvement in analysis speed' },
    challenge:
      'Archer Analytics provided market intelligence to hedge funds but their research was always 24-48 hours behind. In fast-moving markets, that delay cost their clients alpha.',
    solution:
      'We built real-time data ingestion pipelines, automated sentiment analysis on earnings calls and SEC filings, and a custom dashboard that surfaces actionable insights within minutes of data release.',
    result:
      '73% faster analysis delivery. Three new hedge fund clients signed in Q1 based on the speed improvement. Revenue up 45% YoY.',
    metrics: [
      { label: 'Analysis Speed', before: '24-48hrs', after: '< 2hrs', value: 73, suffix: '%' },
      { label: 'New Clients Q1', before: '0', after: '3', value: 3 },
      { label: 'Revenue Growth', before: 'Flat', after: '+45%', value: 45, suffix: '%' },
      { label: 'Data Sources', before: '12', after: '47', value: 47 },
    ],
    testimonial: {
      quote:
        "In our business, hours matter. Borbi turned our research from next-day to same-hour. Our clients noticed immediately — and so did our competitors.",
      author: 'Katherine Yeh',
      title: 'CEO',
      company: 'Archer Analytics',
      rating: 5,
    },
  },
];

export function getCaseStudiesByArm(arm: CaseStudyData['arm']): CaseStudyData[] {
  return caseStudies.filter((cs) => cs.arm === arm);
}
