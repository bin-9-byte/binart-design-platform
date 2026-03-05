import type { Tool } from '../../types';

export const TOOL_T1 = {
  id: 't1',
  name: 'BinGrad',
  description: 'Essential workflow boosters for 2024.',
  longDescription:
    'A curated collection of the most impactful Figma plugins that streamline handoff, automate design tokens, and verify accessibility compliance in real-time. This suite completely removes manual friction from your daily design operations.',
  icon: 'figma',
  color: 'bg-purple-500',
  link: 'https://www.figma.com/community/plugin/', // 在这里填入真实链接
  ctaLabel: 'Try Plugin', // 可选：自定义按钮文案，默认是 "Visit Website"
  cover: '/images/tools/t1/cover.png',
  images: [
    '/images/tools/t1/screen-1.png',
    '/images/tools/t1/screen-2.png'
  ],
  pricing: 'Free',
  platform: ['Figma', 'Web'],
  tags: ['Workflow', 'Automation', 'Handoff']
} satisfies Tool;
