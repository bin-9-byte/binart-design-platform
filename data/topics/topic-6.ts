import type { Article } from '../../types';

export const TOPIC_6 = {
  id: '6',
  title: 'Micro-interactions',
  category: 'Interaction',
  author: 'Jack D.',
  date: 'Sep 20',
  readTime: '4m',
  excerpt: 'The delight is in the details.',
  imageUrl: 'https://picsum.photos/800/800?random=6',
  mediaType: 'gif',
  gifUrl: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
  blocks: [
    {
      type: 'paragraph',
      text: "Micro-interactions are the secret sauce of great interaction design. They provide feedback, explain relationships, and humanize the interface."
    },
    { type: 'quote', text: 'Details make the design.', caption: 'Charles Eames' },
    {
      type: 'paragraph',
      text: "A button press shouldn't just be a state change; it should be a tactile event."
    }
  ]
} satisfies Article;
