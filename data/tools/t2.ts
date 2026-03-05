import type { Tool } from '../../types';

export const TOOL_T2 = {
  id: 't2',
  name: 'Promptly',
  description: 'Generative accessibility palettes.',
  longDescription:
    'Promptly is a generative accessibility tool that creates color palettes based on a single seed color. It automatically checks contrast ratios against WCAG AA and AAA standards, ensuring your design system is inclusive from day one.',
  icon: 'palette',
  color: 'bg-accent-orange',
  pricing: 'Freemium',
  platform: ['Web', 'macOS'],
  tags: ['Accessibility', 'Color Theory', 'System']
} satisfies Tool;

