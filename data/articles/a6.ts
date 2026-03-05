import { Article, Category } from '../../types';

export const ARTICLE_A6 = {
  id: 'a6',
  title: '山地观景步道',
  category: Category.ARCHITECTURAL_DESIGN,
  author: 'Binart Team',
  date: 'Mar 05, 2026',
  readTime: '5 min',
  excerpt:
    '围绕“层级视线”的原则，建立步道节点、导览与休憩设施的统一标识与信息层级。',
  imageUrl: 'https://picsum.photos/seed/mountain-trail-hero/1600/900',
  sections: ['architecture'],
  isFeatured: false,
  isArchitecture: true,
  mediaType: 'image',
  blocks: [
    {
      type: 'quote',
      text: '把山的高差变成信息的层级，而不是理解的门槛。',
      caption: '设计原则'
    },
    {
      type: 'paragraph',
      text: '项目覆盖多海拔节点，信息冗余是主要问题。我们通过层级化的视觉尺度与颜色分区，让用户在不同海拔保持一致的路径理解。'
    },
    { type: 'h2', text: '01. 结构框架' },
    {
      type: 'kv',
      kvItems: [
        { key: '节点', value: '入口 / 观景台 / 休憩点 / 终点' },
        { key: '系统', value: '地图 / 立柱 / 标牌 / 动线提示' },
        { key: '材质', value: '原木 + 石材 + 阳极氧化铝' },
        { key: '场景', value: '强风 / 雾 / 夜间补光' }
      ]
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/mountain-trail-map/1400/900',
      alt: '步道地图与层级示意',
      caption: '信息层级与节点示意'
    },
    { type: 'h2', text: '02. 节点设计' },
    {
      type: 'gallery',
      images: [
        'https://picsum.photos/seed/mountain-trail-node-1/1200/800',
        'https://picsum.photos/seed/mountain-trail-node-2/1200/800'
      ]
    },
    {
      type: 'note',
      title: '结果',
      text: '统一层级后，用户迷路反馈显著下降，夜间指引识别度提升。'
    }
  ]
} satisfies Article;
