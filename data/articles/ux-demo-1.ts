import type { Article } from '../../types';

export const ARTICLE_UX_DEMO_1 = {
  id: 'ux-demo-1',
  title: 'UX-demo',
  category: 'Template',
  author: 'Design Team',
  date: 'Oct 20, 2024',
  readTime: '10 min',
  excerpt:
    'A comprehensive overhaul of a mobile banking experience, focusing on trust, speed, and accessibility.',
  imageUrl:
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600',
  sections: ['UX&UI'],
  isFeatured: false,
  mediaType: 'image',
  blocks: [
    {
      type: 'paragraph',
      text: 'The goal was to simplify the complex world of personal finance for millennials. We focused on reducing cognitive load and providing clear, actionable insights.'
    },
    {
      type: 'kv',
      kvItems: [
        { key: 'Role', value: 'Lead Product Designer' },
        { key: 'Duration', value: '8 weeks', note: 'Discovery → delivery' },
        { key: 'Platform', value: 'iOS / Android' },
        { key: 'Team', value: 'PM · 2 Designers · 6 Engineers' }
      ]
    },
    {
      type: 'stats',
      stats: [
        { label: 'Retention', value: '+45%', description: 'Month-over-month' },
        { label: 'Time to Pay', value: '-30%', description: 'Average session' },
        { label: 'NPS Score', value: '72', description: 'Up from 45' },
        { label: 'Adoption', value: '2.5M', description: 'Active users' }
      ]
    },
    { type: 'divider' },
    { type: 'h2', text: '0. Research Insights' },
    {
      type: 'insights',
      insights: [
        {
          title: 'Users don’t trust the numbers',
          evidence:
            'In interviews, users repeatedly said they “double-check” balances using external sources before making decisions.',
          impact:
            'High friction before transfer and bill payment; drop-offs happen at confirmation.',
          recommendation:
            'Bring key account context to the surface: last updated timestamp, clearer transaction status, and an explainable “why” for insights.'
        },
        {
          title: 'Budgeting feels like a chore',
          evidence:
            'Budget setup completion was low; users described it as “too many steps” and “too much guessing”.',
          impact:
            'Users abandon budgeting and rely on bank statements after the fact.',
          recommendation:
            'Shift from setup-first to learn-as-you-go: progressive disclosure, default categories, and quick corrections.'
        }
      ]
    },
    { type: 'h2', text: '1. User Persona' },
    {
      type: 'persona',
      title: 'Sarah Jenkins',
      role: 'Freelance Designer',
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      bio: 'Sarah juggles multiple clients and income streams. She needs a quick way to categorize expenses and set aside money for taxes without getting overwhelmed by spreadsheets.',
      traits: ['Tech-savvy', 'Time-poor', 'Visual learner', 'Mobile-first']
    },
    { type: 'h2', text: '1.1 Journey Map' },
    {
      type: 'journey',
      phases: [
        {
          name: 'Onboarding',
          goal: 'Get started quickly and feel safe.',
          painPoints: ['Too many permissions early', 'Unclear security benefits'],
          opportunities: ['Explain value per step', 'Use contextual security copy']
        },
        {
          name: 'Daily Check',
          goal: 'Understand balance and changes at a glance.',
          painPoints: ['Hard to parse activity', 'No clear “what changed”'],
          opportunities: ['Summaries with drill-down', 'Highlight meaningful deltas']
        },
        {
          name: 'Pay & Transfer',
          goal: 'Complete payment fast with confidence.',
          painPoints: ['Confirmation anxiety', 'Status feels ambiguous'],
          opportunities: ['Clear status language', 'Trust cues in the confirmation step']
        },
        {
          name: 'Review & Learn',
          goal: 'Spot patterns and optimize spending.',
          painPoints: ['Insights feel generic', 'Hard to correct categories'],
          opportunities: ['Explainable insights', 'One-tap corrections and feedback loop']
        }
      ]
    },
    { type: 'h2', text: '2. Design Process' },
    {
      type: 'process',
      steps: [
        {
          title: 'Discovery',
          description:
            'Conducted 15 user interviews and analyzed 5,000+ support tickets to identify pain points.'
        },
        {
          title: 'Definition',
          description:
            'Created user journeys and defined the core value proposition: "Finance made focusable".'
        },
        {
          title: 'Ideation',
          description:
            'Rapid prototyping of 3 distinct directions: "Minimal", "Playful", and "Professional".'
        },
        {
          title: 'Delivery',
          description:
            'Final UI refinement, motion design, and developer handoff with strict accessibility standards.'
        }
      ]
    },
    { type: 'h2', text: '3. Key Features' },
    {
      type: 'grid',
      columns: 3,
      gridItems: [
        {
          title: 'Smart Budgeting',
          description: 'Auto-categorization of expenses with AI-powered insights.',
          image:
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600'
        },
        {
          title: 'Fast Payments',
          description: 'One-tap transfers to friends and recurring bill setups.',
          image:
            'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600'
        },
        {
          title: 'Crypto Wallet',
          description: 'Secure storage and trading for major cryptocurrencies.',
          image:
            'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600'
        }
      ]
    },
    { type: 'h2', text: '4. Visual Evolution' },
    {
      type: 'comparison',
      imageBefore:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
      labelBefore: 'Legacy App (2020)',
      imageAfter:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800',
      labelAfter: 'Redesign (2024)',
      caption:
        'The new design introduces a dark mode, cleaner typography, and more breathing room.'
    },
    {
      type: 'note',
      title: 'Conclusion',
      text: "By focusing on the user's mental model rather than the database schema, we created a banking app that people actually enjoy using."
    }
  ]
} satisfies Article;
