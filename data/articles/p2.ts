import { Article, Category } from '../../types';

export const ARTICLE_P2 = {
  id: 'p2',
  title: '雾线',
  category: Category.PHOTOGRAPHY,
  author: 'Binart Team',
  date: 'Mar 05, 2026',
  readTime: '5 min',
  excerpt:
    '在清晨与海岸之间记录雾的移动，利用低对比与长曝光捕捉“消失边界”的瞬间。',
  imageUrl: 'https://picsum.photos/seed/fogline-hero/1600/900',
  sections: ['photography'],
  isFeatured: false,
  isPhotography: true,
  mediaType: 'image',
  blocks: [
    {
      type: 'quote',
      text: '雾把世界压低，也把声音放大。',
      caption: '开场'
    },
    {
      type: 'paragraph',
      text: '这组影像关注“能见度”如何改变空间。我们在不同距离、不同光照下拍摄同一条海岸线，寻找雾与地平线的临界点。'
    },
    { type: 'h2', text: '01. 拍摄策略' },
    {
      type: 'kv',
      kvItems: [
        { key: '时间', value: '清晨 5:30 - 7:00' },
        { key: '镜头', value: '35mm / 85mm' },
        { key: '曝光', value: '1/4s - 1s' },
        { key: '目标', value: '保留层次与灰度' }
      ]
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/fogline-scene-1/1400/900',
      alt: '雾线场景一',
      caption: '低对比区域的层次保留'
    },
    { type: 'h2', text: '02. 画面节奏' },
    {
      type: 'gallery',
      images: [
        'https://picsum.photos/seed/fogline-gallery-1/1200/800',
        'https://picsum.photos/seed/fogline-gallery-2/1200/800'
      ]
    },
    {
      type: 'note',
      title: '结果',
      text: '通过统一灰度与弱对比策略，让观者把注意力回到空间尺度与呼吸感。'
    }
  ]
} satisfies Article;
