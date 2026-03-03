
export type BlockType = 
  | 'paragraph' 
  | 'h2' 
  | 'image' 
  | 'quote' 
  | 'gallery' 
  | 'divider' 
  | 'note' 
  | 'list' 
  | 'video'
  | 'persona'
  | 'grid'
  | 'stats'
  | 'process'
  | 'comparison'
  | 'kv'
  | 'insights'
  | 'journey';

export interface GridItem {
  title?: string;
  description?: string;
  image?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface KeyValueItem {
  key: string;
  value: string;
  note?: string;
}

export interface InsightItem {
  title: string;
  evidence?: string;
  impact?: string;
  recommendation?: string;
}

export interface JourneyPhase {
  name: string;
  goal?: string;
  painPoints?: string[];
  opportunities?: string[];
}

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

  // New fields for UX Templates
  role?: string;        // For Persona
  bio?: string;         // For Persona
  traits?: string[];    // For Persona
  
  gridItems?: GridItem[]; // For Grid
  columns?: number;       // For Grid
  
  stats?: StatItem[];     // For Stats
  
  steps?: ProcessStep[];  // For Process
  
  imageBefore?: string;   // For Comparison
  imageAfter?: string;    // For Comparison
  labelBefore?: string;   // For Comparison
  labelAfter?: string;    // For Comparison

  kvItems?: KeyValueItem[];

  insights?: InsightItem[];

  phases?: JourneyPhase[];
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
  sections?: string[];
  isFeatured?: boolean;
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
