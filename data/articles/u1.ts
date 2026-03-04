import type { Article } from '../../types';

export const ARTICLE_U1 = {
  id: 'u1',
  title: '电商生成工具',
  category: 'UX Research',
  author: 'Marcus Chen',
  date: 'Oct 10, 2024',
  readTime: '12 min',
  excerpt: '为运营与商家提供“商品素材一键生成”的工作台，聚焦效率、可控性与一致性。',
  imageUrl: '/images/articles/a02/hero.png',
  sections: ['UX'],
  isFeatured: true,
  mediaType: 'image',
  gifUrl:
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzM0YjM0MzQ1N2FmMzQ1N2FmMzQ1N2FmMzQ1N2Fm/3o7TKSjRrfIPjeiVyM/giphy.gif',
  blocks: [
    {
      type: 'paragraph',
      text: '电商活动节奏快、素材需求大。运营和商家常常在“效率、质量、可控性”之间反复摇摆：想要更快出图，但又担心风格跑偏、信息错漏、多人协作下的版本混乱。这个工具的目标是把素材生产从“手工堆叠”变成“可复用的生成流程”。'
    },
    {
      type: 'kv',
      kvItems: [
        { key: '目标用户', value: '运营 / 商家 / 设计协同' },
        { key: '核心任务', value: '商品图、主图、卖点文案一键生成' },
        { key: '约束', value: '风格一致 + 信息准确 + 可追溯', note: '多品牌、多活动、多模板并行' },
        { key: '交付', value: 'Web 工作台 + 模板体系 + 生成历史' }
      ]
    },
    {
      type: 'stats',
      stats: [
        { label: '出图耗时', value: '-60%', description: '从模板到交付' },
        { label: '一次通过率', value: '+35%', description: '减少返工' },
        { label: '人均产能', value: '2.4×', description: '高峰期更明显' },
        { label: '复用率', value: '68%', description: '模板被二次使用' }
      ]
    },
    { type: 'divider' },
    { type: 'h2', text: '0. Research Insights' },
    {
      type: 'insights',
      insights: [
        {
          title: '“生成”不是问题，“可控”才是门槛',
          evidence: '访谈中，运营更愿意使用“参数少但确定性高”的方案，而非完全自由生成。',
          impact: '可控性不足会导致反复试错，抵消效率收益。',
          recommendation: '围绕模板构建：固定版式 + 可编辑变量 + 风格锁定。'
        },
        {
          title: '协作链路断在“版本与审核”',
          evidence: '多人修改同一套素材，常出现“用了旧卖点/错价格/错 SKU”的错误。',
          impact: '错误成本高，导致团队对工具不信任。',
          recommendation: '引入生成记录、参数快照与可追溯的审核状态。'
        }
      ]
    },
    { type: 'h2', text: '1. User Persona' },
    {
      type: 'persona',
      title: '林雨',
      role: '电商运营（活动负责人）',
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400',
      bio: '林雨负责活动节奏与最终转化。她希望素材生产可控且可预测：当天活动随时改价、改权益、改卖点，工具必须支持快速更新并确保信息准确。',
      traits: ['高压节奏', '关注结果', '追求确定性', '频繁协作']
    },
    { type: 'h2', text: '1.1 Journey Map' },
    {
      type: 'journey',
      phases: [
        {
          name: 'Brief 收集',
          goal: '把需求快速变成可执行的生成任务。',
          painPoints: ['信息不完整', '模板选择困难'],
          opportunities: ['引导式表单', '推荐模板与默认参数']
        },
        {
          name: '批量生成',
          goal: '高效率产出多规格素材。',
          painPoints: ['风格不一致', '批量难校验'],
          opportunities: ['风格锁定', '批量预览与差异提示']
        },
        {
          name: '编辑微调',
          goal: '局部调整卖点/价格/角标而不破坏版式。',
          painPoints: ['编辑破版', '变量绑定不清晰'],
          opportunities: ['变量系统', '保护布局边界与对齐']
        },
        {
          name: '审核交付',
          goal: '可追溯地确认版本并一键导出。',
          painPoints: ['版本混乱', '导出命名不规范'],
          opportunities: ['状态流转', '命名规则与批量导出']
        }
      ]
    },
    { type: 'h2', text: '2. Design Process' },
    {
      type: 'process',
      steps: [
        { title: 'Task & Data Audit', description: '梳理 4 类活动模板、9 种素材规格与关键字段（标题、价格、权益、SKU）。' },
        { title: 'Information Model', description: '把“模板-变量-素材规格-导出规则”建立为可复用的结构模型。' },
        { title: 'Interaction Design', description: '围绕批量生成与审核闭环，设计参数面板、预览与历史记录。' },
        { title: 'Delivery & QA', description: '联动开发落地变量渲染、导出命名、以及核心可用性测试。' }
      ]
    },
    { type: 'h2', text: '3. Key Modules' },
    {
      type: 'grid',
      columns: 3,
      gridItems: [
        {
          title: '模板库',
          description: '按活动类型与品牌筛选，支持收藏与复用。',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
        },
        {
          title: '变量面板',
          description: '把卖点/价格/权益作为变量，批量替换不破版。',
          image:
            'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=600'
        },
        {
          title: '生成历史',
          description: '每次生成都有参数快照与审核状态，方便追溯。',
          image:
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600'
        }
      ]
    },
    { type: 'h2', text: '4. Before / After' },
    {
      type: 'comparison',
      imageBefore:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=800',
      labelBefore: '手工拼版（高返工）',
      imageAfter:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
      labelAfter: '模板生成（可控复用）',
      caption: '从“做一张图”转向“维护一套模板”，把修改成本从版式层降到变量层。'
    },
    {
      type: 'note',
      title: '结论',
      text: '这类工具的关键不是“更会生成”，而是建立一套让团队信任的可控机制：模板化、可追溯、可协作。'
    }
  ]
} satisfies Article;
