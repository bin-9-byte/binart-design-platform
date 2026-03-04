import type { Article } from '../../types';

export const TOPIC_5 = {
  id: '5',
  title: 'User Empathy Maps',
  category: 'Strategy',
  author: 'Nina P.',
  date: 'Sep 25',
  readTime: '15m',
  excerpt: 'Beyond the persona.',
  imageUrl: 'https://picsum.photos/800/600?random=5',
  blocks: [
    {
      type: 'paragraph',
      text: 'Empathy requires more than data points. It requires understanding the emotional journey of the user.'
    },
    { type: 'h2', text: 'The Four Quadrants' },
    {
      type: 'list',
      listType: 'ul',
      items: [
        'Says: What are the user quotes?',
        'Thinks: What is their internal monologue?',
        'Does: What actions do they take?',
        'Feels: What is their emotional state?'
      ]
    },
    { type: 'note', title: 'Observation', text: 'Often what users say and what they do are completely contradictory.' }
  ]
} satisfies Article;
