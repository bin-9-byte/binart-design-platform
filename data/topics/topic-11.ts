import type { Article } from '../../types';

export const TOPIC_11 = {
  id: '11',
  title: 'Accessibility First',
  category: 'UX Research',
  author: 'A11y Group',
  date: 'Sep 08',
  readTime: '9m',
  excerpt: 'Designing for the next billion users.',
  imageUrl: 'https://picsum.photos/800/1100?random=14',
  blocks: [
    {
      type: 'paragraph',
      text: 'Accessibility is not a feature; it is a fundamental human right. The web was designed to work for all people, whatever their hardware, software, language, location, or ability.'
    },
    { type: 'h2', text: 'POUR Principles' },
    {
      type: 'list',
      listType: 'ul',
      items: [
        'Perceivable: Information must be presentable to users in ways they can perceive.',
        'Operable: User interface components and navigation must be operable.',
        'Understandable: Information and the operation of user interface must be understandable.',
        'Robust: Content must be robust enough that it can be interpreted reliably.'
      ]
    }
  ]
} satisfies Article;
