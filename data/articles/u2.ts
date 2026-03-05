import { Article, Category } from '../../types';

export const ARTICLE_U2: Article = {
  id: 'u2',
  title: 'Find & Spot',
  category: Category.UI_DESIGN,
  author: 'Binart Team',
  date: 'Nov 15, 2024',
  readTime: '8 min',
  imageUrl: '/images/articles/u02/hero.webp',
  excerpt: '负责海外欧卡风格游戏素材绘制，主导 IP Lora 模型训练，解决特征保持与泛化问题，将场景图绘制效率提升 75%。',
  sections: ['UX&UI'],
  isFeatured: true,
  isUxUi: true,
  isAigc: false,
  mediaType: 'image',
  blocks: [
    {
      type: 'quote',
      text: '用 AI 保持风格一致的同时提升产能，验证 AI 在美术管线中的提效能力。'
    },
    {
      type: 'image',
      src: '/images/articles/u02/inline-threeviews.webp',
      alt: 'IP Design Three Views',
      caption: 'IP Character Design - 三视图展示'
    },
    {
      type: 'h2',
      text: 'What I Did'
    },
    {
      type: 'paragraph',
      text: '负责海外欧卡风格游戏素材绘制，参与美术资源（icon、button）设计，丰富资源库，并匹配主题方向。并主导欧卡风格 IP Lora 模型训练，解决特征保持与泛化问题。'
    },
    {
      type: 'h2',
      text: 'UI Design'
    },
    {
      type: 'image',
      src: '/images/articles/u02/inline-button.webp',
      alt: 'Button Design',
      caption: 'Button Design'
    },
    {
      type: 'quote',
      text: '在 BUTTON 安全区内绘制，适当增加元素，保证风格统一、元素协调。',
      caption: '设计原则'
    },
    {
      type: 'image',
      src: '/images/articles/u02/inline-icon.webp',
      alt: 'Icon Design',
      caption: 'Icon Design'
    },
    {
      type: 'quote',
      text: '简洁欧美卡通风，保留立体感与辨识度，根据节日活动主题构思元素，帮助用户快速 get 活动主题。',
      caption: '设计原则'
    },
    {
      type: 'h2',
      text: 'AI 提效流程'
    },
    {
      type: 'process',
      steps: [
        { title: '数据准备', description: '收集并清洗欧卡风格素材，构建高质量训练数据集。' },
        { title: '训练策略', description: '主导 IP Lora 模型训练，解决特征保持与泛化问题。' },
        { title: '验证迭代', description: '在真实美术管线中验证效果，持续优化模型表现。' }
      ]
    },
    {
      type: 'stats',
      stats: [
        { label: '效率提升', value: '+75%', description: '场景图绘制效率' },
        { label: '风格一致性', value: '95%', description: '特征保持率' },
        { label: '产能提升', value: '2.4×', description: '日均产出量' }
      ]
    },
    {
      type: 'h2',
      text: '展示生成效果'
    },
    {
      type: 'image',
      src: '/images/articles/u02/inline-mockup.png',
      alt: 'Mockup Preview',
      caption: 'Mockup - 整体效果预览'
    },
    {
      type: 'gallery',
      images: [
        '/images/articles/u02/inline-1.webp',
        '/images/articles/u02/inline-2.webp',
        '/images/articles/u02/inline-3.webp',
        '/images/articles/u02/inline-4.webp'
      ]
    }
  ]
};
