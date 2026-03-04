import { Article, Category } from '../../types';

export const ARTICLE_A2: Article = {
  id: 'a2',
  title: '阿尔山乡村艺术季',
  category: Category.VISUAL_DESIGN,
  author: 'Binart Team',
  date: 'Mar 04, 2026',
  readTime: '7 min',
  imageUrl: '/images/articles/a02/hero.webp',
  excerpt:
    '以“自然在场、乡村共创”为核心叙事，完成艺术季视觉基调、导视体系与线上传播物料的首版搭建；当前为占位稿，细节与图片资源后续补充。',
  sections: ['architecture'],
  isFeatured: true,
  mediaType: 'image',
  blocks: [
    {
      type: 'quote',
      text: '把风景当成画布，把村落当成展馆：让每一次转弯都成为一次发现。',
      caption: '项目愿景（占位）'
    },
    {
      type: 'h2',
      text: '01.项目概览'
    },
    {
      type: 'kv',
      kvItems: [
        { key: '定位', value: '乡村公共艺术与在地文化体验（占位）' },
        { key: '交付', value: '主视觉、导视、海报体系、线上页面组件（占位）' },
        { key: '场景', value: '山地/林地/街区三类空间（占位）' },
        { key: '节奏', value: '预热-开幕-常态运营（占位）' }
      ]
    },
    {
      type: 'image',
      src: '/images/articles/a02/hero.png',
      alt: '阿尔山乡村艺术季 - 视觉占位图',
      caption: 'Fig 1. 视觉基调占位图（后续替换为真实物料）'
    },
    { type: 'divider' },
    {
      type: 'h2',
      text: '02.设计目标'
    },
    {
      type: 'list',
      listType: 'ul',
      items: [
        '建立可扩展的视觉语言：适配海报/导视/纪念品（占位）',
        '在复杂户外环境里保证识别：高对比、远距离可读（占位）',
        '让信息结构清晰：路线、时间、活动点位一眼读懂（占位）',
        '线上线下一致：页面组件与线下物料共享版式规则（占位）'
      ]
    },
    {
      type: 'stats',
      stats: [
        { label: '物料模块', value: '24+', description: '海报/导视/社媒组件（占位）' },
        { label: '场景点位', value: '18', description: '展点与服务点（占位）' },
        { label: '版式系统', value: '1套', description: '栅格/字体/色彩规则（占位）' },
        { label: '迭代轮次', value: '3', description: '首版到可用（占位）' }
      ]
    },
    {
      type: 'process',
      steps: [
        { title: '信息梳理', description: '将活动、路线、点位拆成可复用信息单元（占位）。' },
        { title: '视觉定调', description: '提炼“林地绿/火山岩灰/光影橙”等色彩线索（占位）。' },
        { title: '系统化组件', description: '建立标题层级、标牌规范、图标与地图组件（占位）。' },
        { title: '落地校验', description: '按室外/室内/夜间三种条件验证可读性（占位）。' }
      ]
    },
    {
      type: 'grid',
      columns: 3,
      gridItems: [
        {
          title: '主视觉海报',
          description: '用于预热与开幕的主 KV 体系（占位）。',
          image: '/images/articles/a01/cover.webp'
        },
        {
          title: '导视与地图',
          description: '点位编号、路线与指引图形（占位）。',
          image: '/images/articles/a03/hero.png'
        },
        {
          title: '线上传播组件',
          description: '社媒卡片、活动日程、报名页组件（占位）。',
          image: '/images/articles/u02/inline-mockup.png'
        }
      ]
    },
    {
      type: 'persona',
      title: '周末游客（占位）',
      role: '短途出行 / 家庭同行',
      bio: '希望快速了解“去哪儿看、怎么走、有什么好玩”，并在现场轻松找到服务与拍照点位（占位）。',
      traits: ['时间碎片化', '偏好打卡路线', '需要清晰指引', '对安全与卫生敏感'],
      src: '/images/articles/a02/hero.png'
    },
    {
      type: 'journey',
      phases: [
        {
          name: '预热',
          goal: '在 10 秒内理解活动是什么（占位）',
          painPoints: ['信息分散，难以判断亮点（占位）', '路线与时间不清晰（占位）'],
          opportunities: ['用“路线卡片+点位编号”做信息骨架（占位）']
        },
        {
          name: '到达',
          goal: '快速找到入口与服务点（占位）',
          painPoints: ['户外光照导致识别下降（占位）'],
          opportunities: ['高对比配色与大字号层级（占位）']
        },
        {
          name: '游逛',
          goal: '顺路发现作品与互动（占位）',
          painPoints: ['点位分布广，迷路成本高（占位）'],
          opportunities: ['地图组件与路标编号一致（占位）']
        },
        {
          name: '参与',
          goal: '报名/排队/领取物料更顺畅（占位）',
          painPoints: ['规则复杂，现场解释成本高（占位）'],
          opportunities: ['把规则做成“3 步卡片”贴近场景（占位）']
        },
        {
          name: '离开',
          goal: '带走记忆点并愿意分享（占位）',
          painPoints: ['缺少统一的分享素材（占位）'],
          opportunities: ['提供社媒模板与统一水印体系（占位）']
        }
      ]
    },
    {
      type: 'insights',
      insights: [
        {
          title: '户外可读性优先于精致细节（占位）',
          evidence: '远距识别测试中，小字号与低对比方案在强光下迅速失效（占位）。',
          impact: '现场问询增加，动线拥堵（占位）。',
          recommendation: '优先建立字号/对比/留白红线，再做质感与装饰（占位）。'
        },
        {
          title: '“编号系统”比“命名系统”更稳定（占位）',
          evidence: '不同渠道对作品命名不一致，造成指路困难（占位）。',
          impact: '线上线下信息对不上（占位）。',
          recommendation: '统一点位编号，并在所有触点复用同一编号（占位）。'
        }
      ]
    },
    {
      type: 'comparison',
      imageBefore: '/images/articles/a04/org.png',
      imageAfter: '/images/articles/a04/final.png',
      labelBefore: 'V0 信息堆叠',
      labelAfter: 'V1 层级清晰',
      caption: 'Fig 2. 信息结构优化对比（占位示例，后续替换）'
    },
    {
      type: 'video',
      videoUrl: '/videos/hero/hero.mp4',
      poster: '/images/articles/a02/hero.png',
      caption: 'Fig 3. 动效与节奏占位（后续替换为现场记录/宣传片）'
    },
    {
      type: 'gallery',
      images: [
        '/images/articles/u02/inline-1.webp',
        '/images/articles/u02/inline-2.webp',
        '/images/articles/u02/inline-3.webp',
        '/images/articles/u02/inline-4.webp'
      ]
    },
    {
      type: 'note',
      title: '后续补充（待办占位）',
      text: '将补齐：真实现场照片、导视落地尺寸、地图细化、物料清单与下载链接。'
    }
  ]
};
