
import { Article, Category, Tool } from './types';
import { ARTICLE_G1 } from './data/articles/g1';
import { ARTICLE_UX_DEMO_1 } from './data/articles/ux-demo-1';
import { ARTICLE_TEMPLATE_BEHANCE } from './data/articles/template-behance';
import { ARTICLE_A1 } from './data/articles/a1';
import { ARTICLE_A2 } from './data/articles/a2';
import { ARTICLE_P1 } from './data/articles/p1';
import { ARTICLE_U1 } from './data/articles/u1';
import { ARTICLE_U2 } from './data/articles/u2';
import { ARTICLE_A3 } from './data/articles/a3';
import { ARTICLE_A4 } from './data/articles/a4';
import { TOPIC_4 } from './data/topics/topic-4';
import { TOPIC_5 } from './data/topics/topic-5';
import { TOPIC_6 } from './data/topics/topic-6';
import { TOPIC_7 } from './data/topics/topic-7';
import { TOPIC_8 } from './data/topics/topic-8';
import { TOPIC_9 } from './data/topics/topic-9';
import { TOPIC_10 } from './data/topics/topic-10';
import { TOPIC_11 } from './data/topics/topic-11';
import { TOPIC_12 } from './data/topics/topic-12';

export const NAV_LINKS = [
  { name: 'DISCOVER', href: '#discover' },
  { name: 'ARCHIVE', href: '#archive' },
  { name: 'TOOLS', href: '#tools' },
];

export const FEATURED_ARTICLES: Article[] = [
  ARTICLE_U2,
  ARTICLE_U1,
  ARTICLE_UX_DEMO_1,
  ARTICLE_A1,
  ARTICLE_A2,
  ARTICLE_P1,
  ARTICLE_A3,
  ARTICLE_A4,
  ARTICLE_G1,
  ARTICLE_TEMPLATE_BEHANCE
];

export const TOPIC_DATA: Article[] = [
  TOPIC_4,
  TOPIC_5,
  TOPIC_6,
  TOPIC_7,
  TOPIC_8,
  TOPIC_9,
  TOPIC_10,
  TOPIC_11,
  TOPIC_12
];

export const DESIGN_TOOLS: Tool[] = [
  {
    id: 't1',
    name: 'Figma Plugins',
    description: 'Essential workflow boosters for 2024.',
    longDescription: 'A curated collection of the most impactful Figma plugins that streamline handoff, automate design tokens, and verify accessibility compliance in real-time. This suite completely removes manual friction from your daily design operations.',
    icon: 'figma',
    color: 'bg-purple-500',
    pricing: 'Free',
    platform: ['Figma', 'Web'],
    tags: ['Workflow', 'Automation', 'Handoff']
  },
  {
    id: 't2',
    name: 'Color Matrix',
    description: 'Generative accessibility palettes.',
    longDescription: 'Color Matrix uses advanced algorithms to generate accessible color scales based on a single seed color. It automatically checks contrast ratios against WCAG AA and AAA standards, ensuring your design system is inclusive from day one.',
    icon: 'palette',
    color: 'bg-accent-orange',
    pricing: 'Freemium',
    platform: ['Web', 'macOS'],
    tags: ['Accessibility', 'Color Theory', 'System']
  },
  {
    id: 't3',
    name: 'Type Scale',
    description: 'Fluid typography calculator.',
    longDescription: 'Stop guessing your font sizes. Type Scale helps you visualize and generate CSS clamp() functions for fluid typography that scales perfectly from mobile to ultra-wide monitors.',
    icon: 'type',
    color: 'bg-blue-500',
    pricing: 'Free',
    platform: ['Web'],
    tags: ['AIGC', 'CSS', 'Frontend']
  },
  {
    id: 't4',
    name: 'Motion Guide',
    description: 'Animation curve visualizer.',
    longDescription: 'Visualize cubic-bezier curves before you code them. Motion Guide allows you to tweak spacing, timing, and easing to create natural, physics-based interactions.',
    icon: 'motion',
    color: 'bg-pink-500',
    pricing: 'Paid',
    platform: ['Web', 'After Effects'],
    tags: ['Animation', 'Prototyping']
  },
  {
    id: 't5',
    name: 'Grid System',
    description: 'Responsive layout generator.',
    longDescription: 'Generate comprehensive grid overlays for any viewport. Export directly to Sketch, Figma, or CSS Grid code.',
    icon: 'grid',
    color: 'bg-green-500',
    pricing: 'Free',
    platform: ['Web'],
    tags: ['Layout', 'Responsive']
  },
  {
    id: 't6',
    name: 'Device Mockups',
    description: '3D device presentations.',
    longDescription: 'High-fidelity 3D device mockups running entirely in the browser. Customize angles, lighting, and materials to showcase your work in the best possible light.',
    icon: 'monitor',
    color: 'bg-yellow-500',
    pricing: 'Freemium',
    platform: ['Web', 'Blender'],
    tags: ['3D', 'Presentation']
  },
  {
    id: 't7',
    name: 'Texture Lab',
    description: 'Procedural noise and grain generator.',
    longDescription: 'Add depth and tactility to flat UI. Texture Lab generates high-resolution, seamless noise patterns including Perlin, Fractal, and Film Grain, ready for CSS background usage.',
    icon: 'layers',
    color: 'bg-indigo-500',
    pricing: 'Free',
    platform: ['Web'],
    tags: ['Visual', 'Assets', 'Texture']
  },
  {
    id: 't8',
    name: 'Vector 3D',
    description: 'SVG-based 3D shape builder.',
    longDescription: 'Create lightweight 3D-like geometry exported as pure SVG code. Perfect for adding dimension to illustrations without the heavy weight of WebGL or PNGs.',
    icon: 'grid',
    color: 'bg-red-500',
    pricing: 'Paid',
    platform: ['Figma', 'Web'],
    tags: ['Illustration', 'SVG', 'Vector']
  },
  {
    id: 't9',
    name: 'Focus Ring',
    description: 'Pomodoro timer for creatives.',
    longDescription: 'A productivity tool designed specifically for flow states. Focus Ring tracks your design sprints and syncs with your calendar to block out deep work sessions automatically.',
    icon: 'activity',
    color: 'bg-teal-500',
    pricing: 'Free',
    platform: ['macOS', 'iOS'],
    tags: ['Productivity', 'Workflow']
  },
  {
    id: 't10',
    name: 'SVG Compressor',
    description: 'Intelligent vector optimization.',
    longDescription: 'Reduce SVG file sizes by up to 80% without losing visual quality. This tool automatically cleans up unnecessary metadata, merges paths, and optimizes precision for web performance.',
    icon: 'layers',
    color: 'bg-cyan-500',
    pricing: 'Free',
    platform: ['Web', 'CLI'],
    tags: ['Performance', 'Development', 'SVG']
  },
  {
    id: 't11',
    name: 'Font Pair',
    description: 'AI-powered typography matchmaking.',
    longDescription: 'Struggling to find the perfect secondary font? Font Pair analyzes the x-height, contrast, and weight of your primary typeface to recommend harmonious pairings from the Google Fonts library.',
    icon: 'type',
    color: 'bg-orange-400',
    pricing: 'Freemium',
    platform: ['Web', 'Figma'],
    tags: ['AIGC', 'Design', 'AI']
  },
  {
    id: 't12',
    name: 'User Flow Kit',
    description: 'Standardized diagramming assets.',
    longDescription: 'A comprehensive library of connectors, decision nodes, and gesture icons for creating clear, professional user flow diagrams. Compatible with all major design tools.',
    icon: 'grid',
    color: 'bg-emerald-500',
    pricing: 'Paid',
    platform: ['Figma', 'Sketch', 'XD'],
    tags: ['UX', 'Diagramming', 'Assets']
  }
];
