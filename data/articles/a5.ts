import { Article, Category } from '../../types';

export const ARTICLE_A5 = {
  id: 'a5',
  title: '滨海文化驿站',
  category: Category.ARCHITECTURAL_DESIGN,
  author: 'Binart Team',
  date: 'Mar 05, 2026',
  readTime: '6 min',
  excerpt:
    '以“潮汐节奏”为叙事主线，为滨海公共空间建立导视、展陈与活动动线的一体化视觉系统。',
  imageUrl: 'https://picsum.photos/seed/coast-station-hero/1600/900',
  sections: ['architecture'],
  isFeatured: false,
  isArchitecture: true,
  mediaType: 'image',
  blocks: [
    {
      type: 'quote',
      text: '让人从海风进入空间时，就已经理解这里的秩序。',
      caption: '空间愿景'
    },
    {
      type: 'paragraph',
      text: '项目定位为滨海公共文化节点，我们将导视、展陈与活动动线统一到“潮汐节奏”的叙事框架中，减少认知负担，强化场景记忆。'
    },
    { type: 'h2', text: '01. 项目概览' },
    {
      type: 'kv',
      kvItems: [
        { key: '场景', value: '滨海步道 / 展陈空间 / 集市节点' },
        { key: '目标', value: '建立清晰动线与视觉秩序' },
        { key: '交付', value: '导视系统 / 展陈版式 / 活动物料' },
        { key: '周期', value: '3 周' }
      ]
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/coast-station-visual/1400/900',
      alt: '滨海驿站视觉概念',
      caption: '核心视觉概念图'
    },
    { type: 'h2', text: '02. 动线与视距策略' },
    {
      type: 'paragraph',
      text: '我们将路径拆解为三段节奏：远距识别、近距引导与停留阅读。每一段均配置对应尺度的视觉元素与文字层级。'
    },
    {
      type: 'gallery',
      images: [
        'https://picsum.photos/seed/coast-station-sign-1/1200/800',
        'https://picsum.photos/seed/coast-station-sign-2/1200/800'
      ]
    },
    {
      type: 'note',
      title: '结果',
      text: '通过节奏化导视与一致的材质语言，游客平均停留时间提升，活动导流效率显著提高。'
    }
  ]
} satisfies Article;
