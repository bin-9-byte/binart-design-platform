import type { Article } from '../../types';

export const TOPIC_10 = {
  id: '10',
  title: 'Motion in UI',
  category: 'Interaction',
  author: 'David L.',
  date: 'Sep 10',
  readTime: '6m',
  excerpt: 'Using physics to create natural interfaces.',
  imageUrl: 'https://picsum.photos/800/700?random=13',
  mediaType: 'video',
  videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  blocks: [
    {
      type: 'paragraph',
      text: 'Nothing in nature moves linearly from point A to point B. Real objects accelerate and decelerate.'
    },
    { type: 'h2', text: 'The 12 Principles' },
    {
      type: 'paragraph',
      text: "Disney's 12 principles of animation apply directly to interface design. Squash and stretch, anticipation, and staging help the user follow the action."
    },
    {
      type: 'note',
      title: 'Accessibility',
      text: 'Always provide a "Reduce Motion" fallback for users with vestibular disorders.'
    }
  ]
} satisfies Article;
