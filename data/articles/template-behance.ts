import type { Article } from '../../types';

export const ARTICLE_TEMPLATE_BEHANCE = {
  id: 'template-behance',
  title: 'Design Story Template',
  category: 'Template',
  author: 'Binart Team',
  date: 'Mar 04, 2026',
  readTime: '5 min',
  excerpt:
    '视觉优先的设计作品叙事排版模板：少字、多图、强节奏。复制本文件后替换占位内容即可。',
  imageUrl: 'https://picsum.photos/seed/behance-template-hero/1600/900',
  mediaType: 'image',
  sections: ['photography'],
  isFeatured: true,
  blocks: [
    {
      type: 'quote',
      text: '一句话定调：这个项目的核心是「[主题/情绪/关键词]」。',
      caption: 'Opening Line'
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/behance-cover-1/1600/1000',
      alt: 'Cover visual',
      caption: 'Cover / Hero Visual（替换为主视觉）'
    },
    {
      type: 'kv',
      kvItems: [
        { key: 'Project', value: '[项目名称]' },
        { key: 'Type', value: '[品牌/产品/视觉/摄影/插画...]' },
        { key: 'Role', value: '[你的角色]' },
        { key: 'Time', value: '[周期]' },
        { key: 'Tools', value: '[Figma/PS/C4D...]' },
        { key: 'Deliverables', value: '[主视觉/海报/导视/页面...]' }
      ]
    },
    {
      type: 'gallery',
      images: [
        'https://picsum.photos/seed/behance-hero-1/1200/800',
        'https://picsum.photos/seed/behance-hero-2/1200/800'
      ]
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '01. The Story'
    },
    {
      type: 'paragraph',
      text: '用 3-6 句把“为什么做”说清楚：背景、约束、目标与希望观众感受到的东西。避免长篇论述，让图片带节奏。[占位文案]'
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/behance-story-1/1600/1100',
      alt: 'Story image',
      caption: '场景/情绪图（替换为关键视觉）'
    },
    {
      type: 'h2',
      text: '02. Direction'
    },
    {
      type: 'grid',
      columns: 3,
      gridItems: [
        {
          title: 'Keyword 01',
          description: '[形容词 + 解释：为什么它重要]',
          image: 'https://picsum.photos/seed/behance-direction-1/800/600'
        },
        {
          title: 'Keyword 02',
          description: '[形容词 + 解释：它对应的视觉策略]',
          image: 'https://picsum.photos/seed/behance-direction-2/800/600'
        },
        {
          title: 'Keyword 03',
          description: '[形容词 + 解释：如何落到版式/材质]',
          image: 'https://picsum.photos/seed/behance-direction-3/800/600'
        }
      ]
    },
    {
      type: 'stats',
      stats: [
        { label: 'Variants', value: '12', description: '探索方案数（占位）' },
        { label: 'Assets', value: '60+', description: '组件/物料（占位）' },
        { label: 'Scenes', value: '5', description: '落地场景（占位）' },
        { label: 'Iterations', value: '3', description: '对齐轮次（占位）' }
      ]
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '03. System'
    },
    {
      type: 'gallery',
      images: [
        'https://picsum.photos/seed/behance-system-1/1200/800',
        'https://picsum.photos/seed/behance-system-2/1200/800',
        'https://picsum.photos/seed/behance-system-3/1200/800',
        'https://picsum.photos/seed/behance-system-4/1200/800'
      ]
    },
    {
      type: 'kv',
      kvItems: [
        { key: 'Color', value: '[主色/辅色/对比策略]' },
        { key: 'Type', value: '[字体/字重/层级]' },
        { key: 'Grid', value: '[栅格/留白规则]' },
        { key: 'Motif', value: '[图形母题/纹理/符号]' }
      ]
    },
    {
      type: 'h2',
      text: '04. Key Visuals'
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/behance-kv-1/1600/1000',
      alt: 'Key visual 1',
      caption: 'KV 01（替换）'
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/behance-kv-2/1600/1000',
      alt: 'Key visual 2',
      caption: 'KV 02（替换）'
    },
    {
      type: 'h2',
      text: '05. Application'
    },
    {
      type: 'grid',
      columns: 2,
      gridItems: [
        {
          title: 'Poster / Print',
          description: '用 1-2 句解释这张图在系统里扮演的角色（占位）。',
          image: 'https://picsum.photos/seed/behance-app-1/1200/800'
        },
        {
          title: 'Digital / Social',
          description: '强调节奏与信息层级，适配不同尺寸（占位）。',
          image: 'https://picsum.photos/seed/behance-app-2/1200/800'
        }
      ]
    },
    {
      type: 'comparison',
      imageBefore: 'https://picsum.photos/seed/behance-before/1200/800',
      labelBefore: 'Early Draft',
      imageAfter: 'https://picsum.photos/seed/behance-after/1200/800',
      labelAfter: 'Final',
      caption: 'Before / After（可选：用 1 句说明你改了什么）'
    },
    {
      type: 'video',
      videoUrl: '/videos/hero/hero.mp4',
      poster: 'https://picsum.photos/seed/behance-motion-poster/1200/800',
      caption: 'Motion / Walkthrough（可选：替换为实际动效）'
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '06. Process (Light)'
    },
    {
      type: 'process',
      steps: [
        { title: 'Brief', description: '一句话说明需求与关键限制（占位）。' },
        { title: 'Exploration', description: '快速发散，建立 2-3 条方向（占位）。' },
        { title: 'Systemize', description: '从作品变系统：复用、扩展与一致性（占位）。' },
        { title: 'Polish', description: '细节收敛：对比、边距、节奏、材质（占位）。' }
      ]
    },
    {
      type: 'note',
      title: '写作提示（占位）',
      text: 'Behance 风格的关键是：每段文字只做“引导观看”，不要做“论文解释”。让图片成为正文。'
    }
  ]
} satisfies Article;

