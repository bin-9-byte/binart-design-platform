import type { Article } from '../../types';

export const TOPIC_7 = {
  id: '7',
  title: 'Dark Patterns',
  category: 'UX Research',
  author: 'Ethical Design Lab',
  date: 'Sep 18',
  readTime: '10m',
  excerpt: 'Identifying and avoiding manipulative UI.',
  imageUrl: 'https://picsum.photos/800/1200?random=7',
  blocks: [
    {
      type: 'paragraph',
      text: "Dark patterns are user interface design choices that trick users into doing things they didn't mean to, such as buying insurance or signing up for recurring bills."
    },
    { type: 'h2', text: 'Common Offenses' },
    {
      type: 'list',
      listType: 'ul',
      items: [
        'Roach Motel: Easy to get in, hard to get out.',
        'Privacy Zuckering: Tricking you into sharing more info than you intended.',
        'Misdirection: Focusing attention on one thing to distract from another.'
      ]
    },
    { type: 'note', title: 'Ethical Stance', text: 'Good design empowers users, it does not exploit them.' }
  ]
} satisfies Article;
