import type { Article } from '../../types';

export const TOPIC_4 = {
  id: '4',
  title: 'Abstract Grids',
  category: 'Visual Design',
  author: 'Leo G.',
  date: 'Sep 28',
  readTime: '5m',
  excerpt: 'Breaking the 12-column constraint.',
  imageUrl: 'https://picsum.photos/800/1000?random=4',
  mediaType: 'video',
  videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  blocks: [
    {
      type: 'paragraph',
      text: 'The grid is a guide, not a jailer. Modern CSS Grid layouts allow us to break free from the rigid 12-column structures of the Bootstrap era.'
    },
    { type: 'h2', text: 'Beyond Alignment' },
    {
      type: 'paragraph',
      text: 'Overlapping elements and whitespace can create a sense of depth and dynamism that strict alignment often kills.'
    },
    { type: 'image', src: 'https://picsum.photos/1200/800?random=40', caption: 'Fig 1. Asymmetrical grid layout' }
  ]
} satisfies Article;
