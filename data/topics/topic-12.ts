import type { Article } from '../../types';

export const TOPIC_12 = {
  id: '12',
  title: 'Brutalism Web',
  category: 'Visual Design',
  author: 'Kenji O.',
  date: 'Sep 05',
  readTime: '5m',
  excerpt: 'The raw aesthetic returning to the web.',
  imageUrl: 'https://picsum.photos/800/650?random=15',
  blocks: [
    {
      type: 'paragraph',
      text: 'Web brutalism is a reaction against the homogenization of web design. It is raw, unpolished, and often intentionally ugly.'
    },
    { type: 'divider' },
    {
      type: 'paragraph',
      text: 'It prioritizes function over form, or rather, makes the function the form. Default fonts, blue links, and high-contrast colors are the staples of this aesthetic.'
    },
    { type: 'image', src: 'https://picsum.photos/1200/800?random=99', caption: 'Fig 1. Brutalist layout example' }
  ]
} satisfies Article;
