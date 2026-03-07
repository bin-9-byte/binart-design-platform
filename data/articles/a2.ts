import { Article, Category } from '../../types';

export const ARTICLE_A2: Article = {
  id: 'a2',
  title: '阿尔山乡村艺术季',
  category: Category.ARCHITECTURAL_DESIGN,
  author: 'Binart Team',
  date: 'Mar 04, 2026',
  readTime: '7 min',
  imageUrl: '/images/articles/a02/hero.webp',
  excerpt:
    '以“自然在场、乡村共创”为核心叙事，完成艺术季视觉基调、导视体系与线上传播物料的首版搭建。',
  sections: ['architecture'],
  isFeatured: true,
  isArchitecture: true,
  mediaType: 'image',
  blocks: [
    {
      type: 'quote',
      text: '把风景当成画布，把村落当成展馆：让每一次转弯都成为一次发现。',
      caption: '项目愿景'
    },
    {
      type: 'h2',
      text: '展览海报'
    },
    {
      type: 'image',
      src: '/images/articles/a02/inline-03.webp',
      alt: '阿尔山乡村艺术季 主视觉海报',
      caption: 'Fig 1. 主视觉海报'
    },
    {
      type: 'paragraph',
      text: '以林地绿与火山岩灰为底色，加入高饱和光影橙作为引导线，让“自然在场”的主题在远距离也可被快速识别。'
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '设计概念'
    },
    {
      type: 'image',
      src: '/images/articles/a02/hero.webp',
      alt: '色彩与符号基调',
      caption: 'Fig 2. 色彩与符号基调'
    },
    /*{
      type: 'kv',
      kvItems: [
        { key: '定位', value: '乡村公共艺术与在地文化体验' },
        { key: '交付', value: '主视觉、导视、海报体系、线上页面组件' },
        { key: '场景', value: '山地 / 林地 / 街区三类空间' },
        { key: '节奏', value: '预热 — 开幕 — 常态运营' }
      ]
    },*/
    
    {
      type: 'gallery',
      images: [
        '/images/articles/a02/inline-01.webp',
        '/images/articles/a02/inline-02.webp'
      ]
    },
    {
      type: 'paragraph',
      text: '概念围绕“风景即展馆”的叙事展开，强调地形、光线与人流动线的共同参与，确保信息可读与情绪氛围并存。'
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '布展过程'
    },
    {
      type: 'image',
      src: '/images/articles/a02/inline-04.webp',
      alt: '现场布展与导视落位',
      caption: 'Fig 3. 现场布展与导视落位'
    },
    {
      type: 'image',
      src: '/images/articles/a02/inline-05.webp',
      alt: '现场布展与导视落位',
      caption: 'Fig 3. 现场布展与导视落位'
    },
    {
      type: 'paragraph',
      text: '在山地、林地与街区三类场景中分阶段落位导视与海报，优先保证动线清晰与关键节点可见。'
    },
    {
      type: 'process',
      steps: [
        { title: '视觉定调', description: '提炼“林地绿 / 火山岩灰 / 光影橙”作为远距识别的主线。' },
        { title: '结构化导视', description: '建立标题层级、标牌规范与地图组件，保证动线清晰。' },
        { title: '动线验证', description: '在高坡、林下与街区三种环境下验证可读性。' },
        { title: '现场调整', description: '根据人流密度与视距反馈微调位置与尺寸。' }
      ]
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '设计细节'
    },
    {
      type: 'image',
      src: '/images/articles/a02/inline-10.webp',
      alt: '导视与信息层级细节',
      caption: 'Fig 4. 导视与信息层级细节'
    },
    {
      type: 'list',
      listType: 'ul',
      items: [
        '字号分级与留白规则确保远距阅读',
        '点位编号系统统一线下与线上信息',
        '材质与防水覆膜适应山地气候',
        '夜间补光与反光涂层保障识别'
      ]
    },
    {
      type: 'image',
      src: '/images/articles/a02/inline-09.webp',
      alt: '近景细节与材质',
      caption: 'Fig 5. 近景细节与材质'
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '设计成果'
    },
    {
      type: 'stats',
      stats: [
        { label: '物料模块', value: '24+', description: '海报 / 导视 / 社媒组件' },
        { label: '场景点位', value: '18', description: '展点与服务点' },
        { label: '版式系统', value: '1 套', description: '栅格 / 字体 / 色彩规则' },
        { label: '场景布局', value: '3 个', description: '山地 / 林地 / 街区' }
      ]
    },
    {
      type: 'image',
      src: '/images/articles/a02/inline-08.webp',
      alt: '开幕现场与传播应用',
      caption: 'Fig 6. 开幕现场与传播应用'
    },
    
    {
      type: 'image',
      src: '/images/articles/a02/inline-07.webp',
      alt: '传播物料与现场反馈',
      caption: 'Fig 7. 传播物料与现场反馈'
    },
    {
      type: 'note',
      title: '后续补充',
      text: '将补齐：真实现场照片、导视落地尺寸、地图细化、物料清单与下载链接。'
    }
  ]
};
