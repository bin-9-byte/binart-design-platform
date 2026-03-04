import type { Article } from '../../types';

export const ARTICLE_G1 = {
  id: 'g1',
  title: '残碑',
  category: 'UI',
  author: 'BINART Studio',
  date: 'Oct 01, 2024',
  readTime: '7 min',
  excerpt: 'A practical workflow to turn messy requirements into a clear design plan.',
  imageUrl: '/images/articles/g01/hero.webp',
  sections: ['UI'],
  isFeatured: false,
  mediaType: 'image',
  blocks: [
    {
      type: 'paragraph',
      text: 'A good guide is a reusable system: clear inputs, concrete steps, and measurable outputs.'
    },
    { type: 'h2', text: 'The Checklist' },
    {
      type: 'list',
      listType: 'ul',
      items: [
        'Define constraints and success metrics',
        'Map user goals and edge cases',
        'Sketch flows before screens',
        'Lock typography and spacing tokens'
      ]
    },
    { type: 'note', title: 'Tip', text: 'Keep your first iteration lightweight. Clarity beats completeness.' }
  ]
} satisfies Article;
