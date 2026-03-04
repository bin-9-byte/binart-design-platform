import type { Article } from '../../types';

export const ARTICLE_P1 = {
  id: 'p1',
  title: 'Tokyo',
  category: 'Photography',
  author: 'Binart Team',
  date: 'Mar 04, 2026',
  readTime: '6 min',
  excerpt:
    '从新宿的霓虹到清晨的高架桥阴影：一组关于东京的叙事摄影，记录“人流与静止”的交替。',
  imageUrl: 'https://picsum.photos/seed/tokyo-hero/1600/900',
  sections: ['photography'],
  isFeatured: true,
  mediaType: 'image',
  blocks: [
    {
      type: 'quote',
      text: '东京像一台永远不关机的相机：你只要抬起头，就会被它自动对焦。',
      caption: '开场（占位）'
    },
    {
      type: 'paragraph',
      text: '这不是一份攻略。我们把镜头交给路口、便利店的白光、雨后的反射，以及那些在同一条街里不断重叠又迅速消失的背影。照片之间用短句相连，像在地铁里换乘一样，轻轻跳转到下一个场景。'
    },
    {
      type: 'h2',
      text: '01.夜行'
    },
    {
      type: 'paragraph',
      text: '第一晚从新宿开始。人群像潮汐，穿过斑马线时每个人都保持自己的速度。我们试着不追逐“更热闹”，而是把快门留给那些被霓虹边缘照亮的瞬间：一束烟、一个回头、一块广告牌上的旧像素。'
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/tokyo-night-1/1200/800',
      alt: 'Tokyo night street',
      caption: 'Fig 1. 夜色的入口（占位图）'
    },
    {
      type: 'paragraph',
      text: '在高对比的光里，画面容易变得“用力”。所以我们把构图做得更克制：让暗部占据更多面积，让亮部像指示牌一样只负责引路。'
    },
    {
      type: 'h2',
      text: '02.雨与霓虹'
    },
    {
      type: 'paragraph',
      text: '第二天开始下雨。雨把城市变成一面镜子：每一盏灯都有双份的存在。我们不再寻找“东京的标志”，而是寻找“东京的表面”——水洼、玻璃、地铁门、自动售货机。'
    },
    {
      type: 'gallery',
      images: [
        'https://picsum.photos/seed/tokyo-rain-1/1200/800',
        'https://picsum.photos/seed/tokyo-rain-2/1200/800',
        'https://picsum.photos/seed/tokyo-rain-3/1200/800',
        'https://picsum.photos/seed/tokyo-rain-4/1200/800'
      ]
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '03.清晨的边缘'
    },
    {
      type: 'paragraph',
      text: '天亮之前的东京像被调低了音量。高架桥的阴影覆盖街道，车灯从远处扫过，留下几秒钟的银色。这个时段最适合拍“空白”：它让你知道，热闹并不是城市唯一的表情。'
    },
    {
      type: 'image',
      src: 'https://picsum.photos/seed/tokyo-morning-1/1200/800',
      alt: 'Tokyo morning',
      caption: 'Fig 2. 清晨的阴影（占位图）'
    },
    {
      type: 'h2',
      text: '04.拍摄备忘'
    },
    {
      type: 'list',
      listType: 'ul',
      items: [
        '先写一句“这一张想讲什么”，再按快门（占位）。',
        '用同一组色温贯穿整组，保持叙事连续（占位）。',
        '每个场景至少保留一张“留白”，让节奏有呼吸（占位）。'
      ]
    },
    {
      type: 'note',
      title: '后续补充（待办占位）',
      text: '将替换为真实东京作品（含拍摄信息、相机/镜头、地点与日期），并补充完整叙事文案。'
    }
  ]
} satisfies Article;

