import type { Article } from '../../types';

export const TOPIC_9 = {
  id: '9',
  title: 'Design Systems 2.0',
  category: 'Strategy',
  author: 'Sarah M.',
  date: 'Sep 12',
  readTime: '12m',
  excerpt: 'Scaling consistency without killing creativity.',
  imageUrl: 'https://picsum.photos/800/900?random=9',
  blocks: [
    {
      type: 'paragraph',
      text: 'A design system is more than a UI kit. It is a shared language for your team.'
    },
    { type: 'h2', text: 'Core Benefits' },
    {
      type: 'list',
      listType: 'ol',
      items: [
        'Velocity: Build faster with pre-made components.',
        'Consistency: Unified experience across platforms.',
        'Maintenance: Fix a bug once, update everywhere.'
      ]
    },
    { type: 'quote', text: 'Systems enable creativity by removing the mundane.', caption: 'Design Lead' }
  ]
} satisfies Article;
