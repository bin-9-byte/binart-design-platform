import type { Article } from '../../types';

export const TOPIC_8 = {
  id: '8',
  title: 'Color Psychology',
  category: 'Visual Design',
  author: 'Ray K.',
  date: 'Sep 15',
  readTime: '7m',
  excerpt: 'Why orange demands attention.',
  imageUrl: 'https://picsum.photos/800/600?random=8',
  blocks: [
    {
      type: 'paragraph',
      text: 'Color is not just decoration; it is information. It signals danger, opportunity, action, and status.'
    },
    { type: 'image', src: 'https://picsum.photos/1200/800?random=80', caption: 'Fig 1. Warm vs Cool palettes' },
    { type: 'h2', text: 'The Orange Factor' },
    {
      type: 'paragraph',
      text: 'Orange combines the energy of red and the happiness of yellow. It is associated with joy, sunshine, and the tropics.'
    }
  ]
} satisfies Article;
