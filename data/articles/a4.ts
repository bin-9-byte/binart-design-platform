import { Article, Category } from '../../types';

export const ARTICLE_A4 = {
  id: 'a4',
  title: '乙女风格模型',
  category: Category.AIGC,
  author: 'Ma Bin',
  date: 'Oct 05, 2024',
  readTime: '6 min',
  excerpt:
    '为筑梦岛 App 定制训练乙女人像风格 LoRA：从需求具象化到数据预处理，再到多版本迭代对比与最终上线效果收敛。',
  imageUrl: '/images/articles/a04/hero.jpg', // Static image for card view
  sections: ['AIGC'],
  isFeatured: true, // Animated GIF for detail view
  isAigc: true,
  mediaType: 'image',
  //videoUrl: '/images/articles/a03/hero.mp4', // Local video source
  blocks: [
    {
      type: 'paragraph',
      text: '筑梦岛 App 希望在“AI 虚拟角色设定”玩法中上线乙女（女性向）人像风格。现有动漫 1.3.1 模型在文生图场景下乙女风格表现偏单一：情绪氛围不稳定、角色气质不够“乙女”、同一设定下的输出一致性不足。为满足客户对乙女审美的多样化需求，我们选择训练定制乙女风格 LoRA，用“风格可控 + 一致性可回归”的方式增强基座模型效果。'
    },
    {
      type: 'quote',
      text: '训练不是把风格做得更猛，而是把“审美标准”做得更清晰，把“迭代收益”做得更可见。',
      caption: 'Training Lens'
    },
    { type: 'h2', text: '1. 背景与目标：为什么要做定制乙女 LoRA' },
    {
      type: 'stats',
      stats: [
        { label: '目标能力', value: '文生图', description: '以角色设定生成作为主场景' },
        { label: '基座模型', value: '动漫 1.3.1', description: '现有线上能力的基础' },
        { label: '当前痛点', value: '风格单一', description: '气质、氛围与细节缺乏层次' },
        { label: '交付形式', value: 'LoRA', description: '以低成本方式增强风格表达' }
      ]
    },
    {
      type: 'list',
      listType: 'ul',
      items: [
        '客户诉求：乙女风格要“更可爱但不幼”、更情绪化、更有氛围感，同时要保持脸部结构稳定与细节干净。',
        '问题定义：不是“生成更漂亮”，而是把风格标准可视化、可标注、可回归，让迭代路径清晰。',
        '成功标准：同一角色设定在不同提示词下仍保持乙女气质一致；关键失败（成熟化、脏纹理、五官漂移）显著减少。'
      ]
    },
    { type: 'divider' },
    { type: 'h2', text: '2. Pre-training Preparation：需求具象化、数据准备与预处理' },
    {
      type: 'process',
      steps: [
        {
          title: '客户需求调研',
          description: '把“乙女感”拆成可讨论的维度：脸部年龄感、眼神情绪、肤质干净度、光影氛围、服饰与配色倾向。'
        },
        {
          title: '风格标准具象化',
          description: '建立风格对照板：正例/反例/边界例（可接受的变化与不可接受的偏移），统一评审口径。'
        },
        {
          title: '数据准备',
          description: '收集多场景乙女人像样本：室内/室外、日光/夜景、近景/半身/全身，覆盖表情、发色与服饰风格。'
        },
        {
          title: '预处理与清洗',
          description: '统一分辨率与裁切策略，去除低清/遮挡/多人脸等噪声；对“成熟化、脏纹理、比例异常”做专项剔除。'
        }
      ]
    },
    {
      type: 'journey',
      phases: [
        {
          name: '定义审美口径',
          goal: '把“乙女感”变成可回归的标准',
          painPoints: ['主观描述难对齐', '边界样本争议大'],
          opportunities: ['正反例对照板', '边界例判定规则']
        },
        {
          name: '数据构建',
          goal: '覆盖多场景与多气质而不失焦',
          painPoints: ['风格混杂', '脏样本拉低下限'],
          opportunities: ['分桶采样', '清洗规则自动化']
        },
        {
          name: '训练与回归',
          goal: '每次改动都有明确收益与风险',
          painPoints: ['版本回溯困难', '收益不可解释'],
          opportunities: ['固定评测集', '可视化对照与评分维度']
        },
        {
          name: '上线收敛',
          goal: '把效果沉淀为可用的产品能力',
          painPoints: ['Prompt 不稳定', '用户输入不可控'],
          opportunities: ['Prompt 模板', '负向词库与输入规范建议']
        }
      ]
    },
    {
      type: 'kv',
      kvItems: [
        { key: '数据策略', value: '多场景覆盖 + 分桶采样 + 噪声清洗 + 边界例保留' },
        { key: '评测机制', value: '固定评测集 + 版本号对照 + 结构/肤质/氛围/一致性四维评分' },
        { key: '风险控制', value: '防成熟化、防脏纹理、防五官漂移，优先抬高下限再追求上限' },
        { key: '交付形态', value: 'LoRA 权重 + Prompt 模板 + 负向词库 + 输入规范建议' }
      ]
    },
    {
      type: 'gallery',
      images: [
        '/images/articles/a04/data-sample.svg',
        '/images/articles/a04/data-sample.svg',
        '/images/articles/a04/data-sample.svg',
        '/images/articles/a04/data-sample.svg'
      ]
    },
    { type: 'divider' },
    { type: 'h2', text: '3. 模型迭代与最终效果对比' },
    {
      type: 'paragraph',
      text: '除 org / final 外，其余版本均为 9:16 竖图输出。为保证评测可对照，我们在同一评测集与相同提示词结构下对比 V2–V6 与 ckpt 节点：关注乙女气质与氛围提升的同时，控制脸部结构、肤质干净度与一致性。'
    },
    {
      type: 'comparison',
      imageBefore: '/images/articles/a04/org.png',
      labelBefore: 'Org（不加 LoRA）',
      imageAfter: '/images/articles/a04/final.png',
      labelAfter: 'Final（加 LoRA）',
      caption: '对比可见：在提升乙女氛围与气质表达的同时，结构更稳、肤质更干净，一致性更可回归。'
    },
    {
      type: 'gallery',
      images: [
        '/images/articles/a04/inline-V2.png',
        '/images/articles/a04/inline-V3.png',
        '/images/articles/a04/inline-V4.png',
        '/images/articles/a04/inline-V5_1.png'
      ]
    },
    {
      type: 'gallery',
      images: [
        '/images/articles/a04/inline-V5_2.png',
        '/images/articles/a04/inline-V5_3.png',
        '/images/articles/a04/inline-V6.png',
        '/images/articles/a04/inline-ckpt.png'
      ]
    },
    {
      type: 'note',
      title: '迭代结论',
      text: 'V2–V6 逐步收敛的是两条主线：一条抬高“乙女氛围”的上限（光影、配色、情绪），一条控制“稳定性”的下限（五官、肤质、成熟化）。ckpt 节点用于验证训练集规模与分布已足够支撑稳定训练与回归。'
    },
    { type: 'divider' },
    { type: 'h2', text: '4. 最终上线效果：风格更乙女，也更可控' },
    {
      type: 'image',
      src: '/images/articles/a04/final.png',
      caption: 'Final（v1.0）示例：乙女气质更明确，且保持脸部结构与肤质干净度。'
    },
    {
      type: 'process',
      steps: [
        {
          title: 'Prompt 模板化',
          description:
            '将提示词结构固定为：角色设定（外观/年龄感）+ 情绪（眼神/表情）+ 光影氛围（色温/环境光）+ 画风锚点（乙女/清透/干净）+ 质量锚点（clean/detail）。'
        },
        {
          title: '负向词库',
          description: '将成熟化、脏纹理、结构漂移、过曝偏色等常见失败固化为负向约束，并按场景分组维护。'
        },
        {
          title: '输入规范建议',
          description: '给出推荐输入（单主体、清晰无遮挡、脸部占比合理）与不推荐输入，降低用户侧噪声。'
        },
        {
          title: '回归对照机制',
          description: '上线前后用同一批评测集回归，确保新增风格不反噬基座稳定性。'
        }
      ]
    },
    {
      type: 'note',
      title: '结论',
      text: '乙女 LoRA 的价值不只在“更像乙女”，更在于把风格标准、数据策略、训练与回归流程沉淀成可复用的方法，让后续风格扩展有清晰路径。'
    }
  ]
} satisfies Article;
