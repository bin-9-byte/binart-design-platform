import { Article, Category } from '../../types';

export const ARTICLE_P3 = {
  id: 'p3',
  title: '夜市手账',
  category: Category.PHOTOGRAPHY,
  author: 'Binart Team',
  date: 'Mar 05, 2026',
  readTime: '6 min',
  excerpt:
    '以人群流动为线索，记录夜市的光、烟与声音，构建一组高饱和度的城市片段。',
  imageUrl: 'https://picsum.photos/seed/night-market-hero/1600/900',
  sections: ['photography'],
  isFeatured: false,
  isPhotography: true,
  mediaType: 'image',
  blocks: [
    {
      type: 'quote',
      text: '夜市的节奏是从一束灯光开始的。',
      caption: '开场'
    },
    {
      type: 'paragraph',
      text: '我们把镜头交给路边摊、排队的人群与蒸汽升起的瞬间，以颜色与材质记录城市的温度。'
    },
    { type: 'h2', text: '01. 颜色与材质' },
    {
      type: 'kv',
      kvItems: [
        { key: '色彩', value: '高饱和霓虹 / 暖光' },
        { key: '镜头', value: '24mm / 50mm' },
        { key: '手法', value: '低速快门 + 环境光' },
        { key: '目标', value: '突出气味与温度' }
      ]
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/night-market-scene/1400/900',
      alt: '夜市现场',
      caption: '高饱和度与人群流动'
    },
    { type: 'h2', text: '02. 片段组合' },
    {
      type: 'gallery',
      images: [
        'https://picsum.photos/seed/night-market-gallery-1/1200/800',
        'https://picsum.photos/seed/night-market-gallery-2/1200/800'
      ]
    },
    {
      type: 'note',
      title: '结果',
      text: '通过连续的高饱和画面建立叙事节奏，让夜市在视觉上保持“热度”。'
    }
  ]
} satisfies Article;
