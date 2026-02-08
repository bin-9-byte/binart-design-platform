
export type BlockType = 'paragraph' | 'h2' | 'image' | 'quote' | 'gallery' | 'divider' | 'note' | 'list' | 'video';

export interface ContentBlock {
  type: BlockType;
  text?: string;
  src?: string;
  alt?: string;
  caption?: string;
  images?: string[];
  // For ListBlock
  items?: string[];
  listType?: 'ul' | 'ol';
  // For NoteBlock
  title?: string;
  // For VideoBlock
  videoUrl?: string;
  poster?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string; // Static preview for cards
  excerpt: string;
  readTime: string;
  blocks?: ContentBlock[]; // Flexible content structure
  mediaType?: 'image' | 'video' | 'gif';
  videoUrl?: string; // For video content
  gifUrl?: string;   // For animated gif content in detail view
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  // Extended fields for detail view
  pricing?: 'Free' | 'Paid' | 'Freemium';
  platform?: string[];
  link?: string;
  longDescription?: string;
  tags?: string[];
}

export enum Category {
  ALL = 'All',
  UX_RESEARCH = 'UX Research',
  VISUAL_DESIGN = 'Visual Design',
  INTERACTION = 'Interaction',
  STRATEGY = 'Strategy'
}
