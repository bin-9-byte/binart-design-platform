import type { Article } from '../../types';

export const ARTICLE_A1 = {
  id: 'a1',
  title: 'CHAGEE 和萌友们',
  category: 'Visual Design',
  author: 'Ma Bin',
  date: 'Aug 12, 2025',
  readTime: '8 min',
  excerpt:
    '在宠物季小程序活动中，为宠物 DIY 专属茶杯提供 AIGC 风格化生成功能。主导风格流程搭建、参数调试及批量效果验证。',
  imageUrl: '/images/articles/a01/hero.webp',
  sections: ['AIGC'],
  isFeatured: true,
  mediaType: 'image',
  blocks: [
    {
      type: 'h2',
      text: '01.需求分析'
    },
    {
      type: 'image',
      src: '/images/articles/a01/inline-01.webp',
      caption: 'Fig 1. Requirements Process Overview.'
    },
    {
      type: 'quote',
      text: '风格需高度还原。',
      caption: 'CHAGEE Design Department'
    },
    {
      type: 'paragraph',
      text: '宠物允许在保持足够辨识度的基础上有些许差异；但必须保持高度的风格一致性，若风格不达标，活动将直接取消。'
    },
    {
      type: 'quote',
      text: '交付周期极短。',
      caption: 'Product managers of both parties'
    },
    {
      type: 'paragraph',
      text: '周四下午接到需求并开始投入，周日小程序活动需正式上线，还要计入研发、测试时间。'
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '02.流程拆解'
    },
    {
      type: 'paragraph',
      text: '基于这两个限制，我聚焦“风格精准还原”这一关键痛点，并在考虑客户与公司成本后，提出了新的流程方案：'
    },
    {
      type: 'list',
      listType: 'ul',
      items: [
        'VLM：分析原图并生成结构化图像特征描述；',
        '3.0 模型：利用调试好的预设风格提示词实现高一致性的风格还原。'
      ]
    },
    {
      type: 'paragraph',
      text: '两者结合，构建可稳定复现的 AIGC 生成路径。以下是优化流程迭代过程：'
    },
    {
      type: 'quote',
      text: '保持构图准确，但风格与预期风格相差甚远，明确无法上线。',
      caption: 'SeedEdit 3.0'
    },
    {
      type: 'gallery',
      images: ['/images/articles/a01/3-01.png', '/images/articles/a01/3-02.png']
    },
    {
      type: 'quote',
      text: '跑通新流程，调优VLM PE，优化主体辨识度。',
      caption: 'VLM + Seedream 3.0'
    },
    {
      type: 'gallery',
      images: ['/images/articles/a01/3-03.png', '/images/articles/a01/3-04.png']
    },
    {
      type: 'quote',
      text: '继续优化风格提示词，调整多个版本，与客户对齐最终上线版本。',
      caption: 'VLM + Seedream 3.0'
    },
    {
      type: 'gallery',
      images: ['/images/articles/a01/3-05.png', '/images/articles/a01/3-06.png']
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '03.效果展示'
    },
    {
      type: 'gallery',
      images: ['/images/articles/a01/gallery-01.webp', '/images/articles/a01/gallery-02.webp']
    },
    /*
    {
        type: 'paragraph',
        text: "This approach requires courage. Stakeholders often view whitespace as 'wasted real estate'. It is our job to articulate that whitespace is actually 'focused real estate'. It frames the value proposition."
    },
    
    {
        type: 'list',
        listType: 'ul',
        items: [
            'Establish a base unit (e.g., 4px or 8px).',
            'Define spacing tokens (xs, sm, md, lg, xl).',
            'Use padding to create internal breathing room.'
        ]
    }, 
    */
    {
      type: 'note',
      title: 'Pro Tip',
      text: '在极紧的周期内，用结构化流程保证了风格一致性，并显著缩短了交付路径。'
    }
  ]
} satisfies Article;
