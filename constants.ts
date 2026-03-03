
import { Article, Category, Tool } from './types';

export const NAV_LINKS = [
  { name: 'DISCOVER', href: '#discover' },
  { name: 'ARCHIVE', href: '#archive' },
  { name: 'TOOLS', href: '#tools' },
];

export const FEATURED_ARTICLES: Article[] = [
  {
    id: 'ux-demo-1',
    title: 'Fintech App Redesign',
    category: 'UX Case Study',
    author: 'Design Team',
    date: 'Oct 20, 2024',
    readTime: '10 min',
    excerpt: 'A comprehensive overhaul of a mobile banking experience, focusing on trust, speed, and accessibility.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600',
    sections: ['UX', 'UI'],
    isFeatured: true,
    mediaType: 'image',
    blocks: [
      {
        type: 'paragraph',
        text: 'The goal was to simplify the complex world of personal finance for millennials. We focused on reducing cognitive load and providing clear, actionable insights.'
      },
      {
        type: 'kv',
        kvItems: [
          { key: 'Role', value: 'Lead Product Designer' },
          { key: 'Duration', value: '8 weeks', note: 'Discovery → delivery' },
          { key: 'Platform', value: 'iOS / Android' },
          { key: 'Team', value: 'PM · 2 Designers · 6 Engineers' }
        ]
      },
      {
        type: 'stats',
        stats: [
          { label: 'Retention', value: '+45%', description: 'Month-over-month' },
          { label: 'Time to Pay', value: '-30%', description: 'Average session' },
          { label: 'NPS Score', value: '72', description: 'Up from 45' },
          { label: 'Adoption', value: '2.5M', description: 'Active users' }
        ]
      },
      { type: 'divider' },
      { type: 'h2', text: '0. Research Insights' },
      {
        type: 'insights',
        insights: [
          {
            title: 'Users don’t trust the numbers',
            evidence: 'In interviews, users repeatedly said they “double-check” balances using external sources before making decisions.',
            impact: 'High friction before transfer and bill payment; drop-offs happen at confirmation.',
            recommendation: 'Bring key account context to the surface: last updated timestamp, clearer transaction status, and an explainable “why” for insights.'
          },
          {
            title: 'Budgeting feels like a chore',
            evidence: 'Budget setup completion was low; users described it as “too many steps” and “too much guessing”.',
            impact: 'Users abandon budgeting and rely on bank statements after the fact.',
            recommendation: 'Shift from setup-first to learn-as-you-go: progressive disclosure, default categories, and quick corrections.'
          }
        ]
      },
      { type: 'h2', text: '1. User Persona' },
      {
        type: 'persona',
        title: 'Sarah Jenkins',
        role: 'Freelance Designer',
        src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
        bio: 'Sarah juggles multiple clients and income streams. She needs a quick way to categorize expenses and set aside money for taxes without getting overwhelmed by spreadsheets.',
        traits: ['Tech-savvy', 'Time-poor', 'Visual learner', 'Mobile-first']
      },
      { type: 'h2', text: '1.1 Journey Map' },
      {
        type: 'journey',
        phases: [
          {
            name: 'Onboarding',
            goal: 'Get started quickly and feel safe.',
            painPoints: ['Too many permissions early', 'Unclear security benefits'],
            opportunities: ['Explain value per step', 'Use contextual security copy']
          },
          {
            name: 'Daily Check',
            goal: 'Understand balance and changes at a glance.',
            painPoints: ['Hard to parse activity', 'No clear “what changed”'],
            opportunities: ['Summaries with drill-down', 'Highlight meaningful deltas']
          },
          {
            name: 'Pay & Transfer',
            goal: 'Complete payment fast with confidence.',
            painPoints: ['Confirmation anxiety', 'Status feels ambiguous'],
            opportunities: ['Clear status language', 'Trust cues in the confirmation step']
          },
          {
            name: 'Review & Learn',
            goal: 'Spot patterns and optimize spending.',
            painPoints: ['Insights feel generic', 'Hard to correct categories'],
            opportunities: ['Explainable insights', 'One-tap corrections and feedback loop']
          }
        ]
      },
      { type: 'h2', text: '2. Design Process' },
      {
        type: 'process',
        steps: [
          { title: 'Discovery', description: 'Conducted 15 user interviews and analyzed 5,000+ support tickets to identify pain points.' },
          { title: 'Definition', description: 'Created user journeys and defined the core value proposition: "Finance made focusable".' },
          { title: 'Ideation', description: 'Rapid prototyping of 3 distinct directions: "Minimal", "Playful", and "Professional".' },
          { title: 'Delivery', description: 'Final UI refinement, motion design, and developer handoff with strict accessibility standards.' }
        ]
      },
      { type: 'h2', text: '3. Key Features' },
      {
        type: 'grid',
        columns: 3,
        gridItems: [
          { title: 'Smart Budgeting', description: 'Auto-categorization of expenses with AI-powered insights.', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600' },
          { title: 'Fast Payments', description: 'One-tap transfers to friends and recurring bill setups.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600' },
          { title: 'Crypto Wallet', description: 'Secure storage and trading for major cryptocurrencies.', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600' }
        ]
      },
      { type: 'h2', text: '4. Visual Evolution' },
      {
        type: 'comparison',
        imageBefore: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
        labelBefore: 'Legacy App (2020)',
        imageAfter: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800',
        labelAfter: 'Redesign (2024)',
        caption: 'The new design introduces a dark mode, cleaner typography, and more breathing room.'
      },
      { type: 'note', title: 'Conclusion', text: 'By focusing on the user\'s mental model rather than the database schema, we created a banking app that people actually enjoy using.' }
    ]
  },
  {
    id: 'a1',
    title: 'CHAGEE 和萌友们',
    category: 'Visual Design',
    author: 'Ma Bin',
    date: 'Aug 12, 2025',
    readTime: '8 min',
    excerpt: '在宠物季小程序活动中，为宠物 DIY 专属茶杯提供 AIGC 风格化生成功能。主导风格流程搭建、参数调试及批量效果验证。',
    imageUrl: '/images/articles/a01/hero.webp',
    sections: ['AIGC'],
    isFeatured: true,
    mediaType: 'image',
    blocks: [
        {
            type: 'h2',
            text: "01.需求分析"
        },
        { 
            type: 'image', 
            src: '/images/articles/a01/inline-01.webp', 
            caption: 'Fig 1. Requirements Process Overview.'
        },
        {
            type: 'quote',
            text: "风格需高度还原。",
            caption: "CHAGEE Design Department"
        },
        {
            type: 'paragraph',
            text: "宠物允许在保持足够辨识度的基础上有些许差异；但必须保持高度的风格一致性，若风格不达标，活动将直接取消。"
        },
        {
            type: 'quote',
            text: "交付周期极短。",
            caption: "Product managers of both parties"
        },
        {
            type: 'paragraph',
            text: "周四下午接到需求并开始投入，周日小程序活动需正式上线，还要计入研发、测试时间。"
        },
        { type: 'divider' },
        {
            type: 'h2',
            text: "02.流程拆解"
        },

        {
            type: 'paragraph',
            text: "基于这两个限制，我聚焦“风格精准还原”这一关键痛点，并在考虑客户与公司成本后，提出了新的流程方案："
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
            text: "两者结合，构建可稳定复现的 AIGC 生成路径。以下是优化流程迭代过程："
        },
        {
            type: 'quote',
            text: "保持构图准确，但风格与预期风格相差甚远，明确无法上线。",
            caption: "SeedEdit 3.0"
        },
        {
            type: 'gallery',
            images: [
                '/images/articles/a01/3-01.png',
                '/images/articles/a01/3-02.png'
            ]
        },
        {
            type: 'quote',
            text: "跑通新流程，调优VLM PE，优化主体辨识度。",
            caption: "VLM + Seedream 3.0"
        },
        {
            type: 'gallery',
            images: [
                '/images/articles/a01/3-03.png',
                '/images/articles/a01/3-04.png'
            ]
        },
        {
            type: 'quote',
            text: "继续优化风格提示词，调整多个版本，与客户对齐最终上线版本。",
            caption: "VLM + Seedream 3.0"
        },
        {
            type: 'gallery',
            images: [
                '/images/articles/a01/3-05.png',
                '/images/articles/a01/3-06.png'
            ]
        },
        { type: 'divider' },
        {
            type: 'h2',
            text: '03.效果展示'
        },
        {
            type: 'gallery',
            images: [
                '/images/articles/a01/gallery-01.webp',
                '/images/articles/a01/gallery-02.webp'
            ]
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
  },
  {
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
    gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzM0YjM0MzQ1N2FmMzQ1N2FmMzQ1N2FmMzQ1N2Fm/3o7TKSjRrfIPjeiVyM/giphy.gif',
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
                { title: '模板库', description: '按活动类型与品牌筛选，支持收藏与复用。', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
                { title: '变量面板', description: '把卖点/价格/权益作为变量，批量替换不破版。', image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=600' },
                { title: '生成历史', description: '每次生成都有参数快照与审核状态，方便追溯。', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600' }
            ]
        },
        { type: 'h2', text: '4. Before / After' },
        {
            type: 'comparison',
            imageBefore: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=800',
            labelBefore: '手工拼版（高返工）',
            imageAfter: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
            labelAfter: '模板生成（可控复用）',
            caption: '从“做一张图”转向“维护一套模板”，把修改成本从版式层降到变量层。'
        },
        { 
            type: 'note', 
            title: '结论', 
            text: '这类工具的关键不是“更会生成”，而是建立一套让团队信任的可控机制：模板化、可追溯、可协作。' 
        }
    ]
  },
  {
    id: 'a3',
    title: 'SUMSUNG 绘图助手',
    category: 'comfyui',
    author: 'Ma Bin',
    date: 'Oct 05, 2024',
    readTime: '6 min',
    excerpt: 'How variable fonts are changing the way we perceive emotional tone in digital reading.',
    imageUrl: '/images/articles/a03/hero.webp', // Static image for card view
    sections: ['AIGC'],
    isFeatured: true, // Animated GIF for detail view
    mediaType: 'video',
    videoUrl: '/images/articles/a03/hero.mp4', // Local video source
    blocks: [
        { 
            type: 'paragraph', 
            text: "Typefaces have always had personality. But variable fonts allow that personality to have mood swings. In this comprehensive guide, we'll explore how modern typography adapts to user context." 
        },
        { type: 'h2', text: '1. The Static Image' },
        { 
            type: 'image', 
            src: 'https://picsum.photos/1200/800?random=20', 
            caption: 'Fig 1. Standard full-width image layout (Fixed width aligned with text).' 
        },
        { 
            type: 'paragraph', 
            text: "Notice how the image above aligns perfectly with this text block. Maintaining a consistent column width (max-w-2xl) creates a more reading-friendly rhythm." 
        },
        { type: 'h2', text: '2. The Animated GIF' },
        { 
            type: 'image', 
            src: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', 
            caption: 'Fig 2. GIFs are treated as images but bring motion to the layout.' 
        },
        { type: 'h2', text: '3. The Video Embed' },
        { 
            type: 'video', 
            videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            caption: 'Fig 3. Video content shares the same visual container style as images.' 
        },
        { type: 'h2', text: '4. Structural Elements' },
        { 
            type: 'list', 
            listType: 'ul',
            items: [
                'Consistent border radius (rounded-sm)',
                'Subtle border (border-white/5)',
                'Deep shadow (shadow-2xl) for depth'
            ] 
        },
        { type: 'divider' },
        { 
            type: 'quote', 
            text: "Consistency is the foundation of trust in interface design.",
            caption: "Design System Principle"
        },
        { 
            type: 'note', 
            title: 'Layout Note', 
            text: 'All media elements in this article use the exact same width constraint as the text, ensuring a "fixed" and coordinated vertical rhythm.' 
        }
    ]
  },
  {
    id: 'a4',
    title: '乙女风格模型',
    category: 'model train',
    author: 'Ma Bin',
    date: 'Oct 05, 2024',
    readTime: '6 min',
    excerpt: 'How variable fonts are changing the way we perceive emotional tone in digital reading.',
    imageUrl: '/images/articles/a04/hero.webp', // Static image for card view
    sections: ['AIGC'],
    isFeatured: true, // Animated GIF for detail view
    mediaType: 'image',
    //videoUrl: '/images/articles/a03/hero.mp4', // Local video source
    blocks: [
        { 
            type: 'paragraph', 
            text: "Typefaces have always had personality. But variable fonts allow that personality to have mood swings. In this comprehensive guide, we'll explore how modern typography adapts to user context." 
        },
        { type: 'h2', text: '1. The Static Image' },
        { 
            type: 'image', 
            src: 'https://picsum.photos/1200/800?random=20', 
            caption: 'Fig 1. Standard full-width image layout (Fixed width aligned with text).' 
        },
        { 
            type: 'paragraph', 
            text: "Notice how the image above aligns perfectly with this text block. Maintaining a consistent column width (max-w-2xl) creates a more reading-friendly rhythm." 
        },
        { type: 'h2', text: '2. The Animated GIF' },
        { 
            type: 'image', 
            src: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', 
            caption: 'Fig 2. GIFs are treated as images but bring motion to the layout.' 
        },
        { type: 'h2', text: '3. The Video Embed' },
        { 
            type: 'video', 
            videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            caption: 'Fig 3. Video content shares the same visual container style as images.' 
        },
        { type: 'h2', text: '4. Structural Elements' },
        { 
            type: 'list', 
            listType: 'ul',
            items: [
                'Consistent border radius (rounded-sm)',
                'Subtle border (border-white/5)',
                'Deep shadow (shadow-2xl) for depth'
            ] 
        },
        { type: 'divider' },
        { 
            type: 'quote', 
            text: "Consistency is the foundation of trust in interface design.",
            caption: "Design System Principle"
        },
        { 
            type: 'note', 
            title: 'Layout Note', 
            text: 'All media elements in this article use the exact same width constraint as the text, ensuring a "fixed" and coordinated vertical rhythm.' 
        }
    ]
  },
  {
    id: 'g1',
    title: '残碑',
    category: 'Guides',
    author: 'BINART Studio',
    date: 'Oct 01, 2024',
    readTime: '7 min',
    excerpt: 'A practical workflow to turn messy requirements into a clear design plan.',
    imageUrl: '/images/articles/g01/hero.webp',
    sections: ['Guides'],
    isFeatured: false,
    mediaType: 'image',
    blocks: [
      { type: 'paragraph', text: 'A good guide is a reusable system: clear inputs, concrete steps, and measurable outputs.' },
      { type: 'h2', text: 'The Checklist' },
      { type: 'list', listType: 'ul', items: ['Define constraints and success metrics', 'Map user goals and edge cases', 'Sketch flows before screens', 'Lock typography and spacing tokens'] },
      { type: 'note', title: 'Tip', text: 'Keep your first iteration lightweight. Clarity beats completeness.' }
    ]
  }
];

export const TOPIC_DATA: Article[] = [
  {
    id: '4',
    title: 'Abstract Grids',
    category: 'Visual Design',
    author: 'Leo G.',
    date: 'Sep 28',
    readTime: '5m',
    excerpt: 'Breaking the 12-column constraint.',
    imageUrl: 'https://picsum.photos/800/1000?random=4',
    mediaType: 'video',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    blocks: [
        { type: 'paragraph', text: "The grid is a guide, not a jailer. Modern CSS Grid layouts allow us to break free from the rigid 12-column structures of the Bootstrap era." },
        { type: 'h2', text: 'Beyond Alignment' },
        { type: 'paragraph', text: "Overlapping elements and whitespace can create a sense of depth and dynamism that strict alignment often kills." },
        { type: 'image', src: 'https://picsum.photos/1200/800?random=40', caption: 'Fig 1. Asymmetrical grid layout' }
    ]
  },
  {
    id: '5',
    title: 'User Empathy Maps',
    category: 'Strategy',
    author: 'Nina P.',
    date: 'Sep 25',
    readTime: '15m',
    excerpt: 'Beyond the persona.',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    blocks: [
        { type: 'paragraph', text: "Empathy requires more than data points. It requires understanding the emotional journey of the user." },
        { type: 'h2', text: 'The Four Quadrants' },
        { type: 'list', listType: 'ul', items: ['Says: What are the user quotes?', 'Thinks: What is their internal monologue?', 'Does: What actions do they take?', 'Feels: What is their emotional state?'] },
        { type: 'note', title: 'Observation', text: 'Often what users say and what they do are completely contradictory.' }
    ]
  },
  {
    id: '6',
    title: 'Micro-interactions',
    category: 'Interaction',
    author: 'Jack D.',
    date: 'Sep 20',
    readTime: '4m',
    excerpt: 'The delight is in the details.',
    imageUrl: 'https://picsum.photos/800/800?random=6',
    mediaType: 'gif',
    gifUrl: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
    blocks: [
        { type: 'paragraph', text: "Micro-interactions are the secret sauce of great interaction design. They provide feedback, explain relationships, and humanize the interface." },
        { type: 'quote', text: "Details make the design.", caption: "Charles Eames" },
        { type: 'paragraph', text: "A button press shouldn't just be a state change; it should be a tactile event." }
    ]
  },
  {
    id: '7',
    title: 'Dark Patterns',
    category: 'UX Research',
    author: 'Ethical Design Lab',
    date: 'Sep 18',
    readTime: '10m',
    excerpt: 'Identifying and avoiding manipulative UI.',
    imageUrl: 'https://picsum.photos/800/1200?random=7',
    blocks: [
        { type: 'paragraph', text: "Dark patterns are user interface design choices that trick users into doing things they didn't mean to, such as buying insurance or signing up for recurring bills." },
        { type: 'h2', text: 'Common Offenses' },
        { type: 'list', listType: 'ul', items: ['Roach Motel: Easy to get in, hard to get out.', 'Privacy Zuckering: Tricking you into sharing more info than you intended.', 'Misdirection: Focusing attention on one thing to distract from another.'] },
        { type: 'note', title: 'Ethical Stance', text: 'Good design empowers users, it does not exploit them.' }
    ]
  },
  {
    id: '8',
    title: 'Color Psychology',
    category: 'Visual Design',
    author: 'Ray K.',
    date: 'Sep 15',
    readTime: '7m',
    excerpt: 'Why orange demands attention.',
    imageUrl: 'https://picsum.photos/800/600?random=8',
    blocks: [
        { type: 'paragraph', text: "Color is not just decoration; it is information. It signals danger, opportunity, action, and status." },
        { type: 'image', src: 'https://picsum.photos/1200/800?random=80', caption: 'Fig 1. Warm vs Cool palettes' },
        { type: 'h2', text: 'The Orange Factor' },
        { type: 'paragraph', text: "Orange combines the energy of red and the happiness of yellow. It is associated with joy, sunshine, and the tropics." }
    ]
  },
  {
    id: '9',
    title: 'Design Systems 2.0',
    category: 'Strategy',
    author: 'Sarah M.',
    date: 'Sep 12',
    readTime: '12m',
    excerpt: 'Scaling consistency without killing creativity.',
    imageUrl: 'https://picsum.photos/800/900?random=9',
    blocks: [
        { type: 'paragraph', text: "A design system is more than a UI kit. It is a shared language for your team." },
        { type: 'h2', text: 'Core Benefits' },
        { type: 'list', listType: 'ol', items: ['Velocity: Build faster with pre-made components.', 'Consistency: Unified experience across platforms.', 'Maintenance: Fix a bug once, update everywhere.'] },
        { type: 'quote', text: "Systems enable creativity by removing the mundane.", caption: "Design Lead" }
    ]
  },
  {
    id: '10',
    title: 'Motion in UI',
    category: 'Interaction',
    author: 'David L.',
    date: 'Sep 10',
    readTime: '6m',
    excerpt: 'Using physics to create natural interfaces.',
    imageUrl: 'https://picsum.photos/800/700?random=13',
    mediaType: 'video',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    blocks: [
        { type: 'paragraph', text: "Nothing in nature moves linearly from point A to point B. Real objects accelerate and decelerate." },
        { type: 'h2', text: 'The 12 Principles' },
        { type: 'paragraph', text: "Disney's 12 principles of animation apply directly to interface design. Squash and stretch, anticipation, and staging help the user follow the action." },
        { type: 'note', title: 'Accessibility', text: 'Always provide a "Reduce Motion" fallback for users with vestibular disorders.' }
    ]
  },
  {
    id: '11',
    title: 'Accessibility First',
    category: 'UX Research',
    author: 'A11y Group',
    date: 'Sep 08',
    readTime: '9m',
    excerpt: 'Designing for the next billion users.',
    imageUrl: 'https://picsum.photos/800/1100?random=14',
    blocks: [
        { type: 'paragraph', text: "Accessibility is not a feature; it is a fundamental human right. The web was designed to work for all people, whatever their hardware, software, language, location, or ability." },
        { type: 'h2', text: 'POUR Principles' },
        { type: 'list', listType: 'ul', items: ['Perceivable: Information must be presentable to users in ways they can perceive.', 'Operable: User interface components and navigation must be operable.', 'Understandable: Information and the operation of user interface must be understandable.', 'Robust: Content must be robust enough that it can be interpreted reliably.'] }
    ]
  },
  {
    id: '12',
    title: 'Brutalism Web',
    category: 'Visual Design',
    author: 'Kenji O.',
    date: 'Sep 05',
    readTime: '5m',
    excerpt: 'The raw aesthetic returning to the web.',
    imageUrl: 'https://picsum.photos/800/650?random=15',
    blocks: [
        { type: 'paragraph', text: "Web brutalism is a reaction against the homogenization of web design. It is raw, unpolished, and often intentionally ugly." },
        { type: 'divider' },
        { type: 'paragraph', text: "It prioritizes function over form, or rather, makes the function the form. Default fonts, blue links, and high-contrast colors are the staples of this aesthetic." },
        { type: 'image', src: 'https://picsum.photos/1200/800?random=99', caption: 'Fig 1. Brutalist layout example' }
    ]
  }
];

export const DESIGN_TOOLS: Tool[] = [
  {
    id: 't1',
    name: 'Figma Plugins',
    description: 'Essential workflow boosters for 2024.',
    longDescription: 'A curated collection of the most impactful Figma plugins that streamline handoff, automate design tokens, and verify accessibility compliance in real-time. This suite completely removes manual friction from your daily design operations.',
    icon: 'figma',
    color: 'bg-purple-500',
    pricing: 'Free',
    platform: ['Figma', 'Web'],
    tags: ['Workflow', 'Automation', 'Handoff']
  },
  {
    id: 't2',
    name: 'Color Matrix',
    description: 'Generative accessibility palettes.',
    longDescription: 'Color Matrix uses advanced algorithms to generate accessible color scales based on a single seed color. It automatically checks contrast ratios against WCAG AA and AAA standards, ensuring your design system is inclusive from day one.',
    icon: 'palette',
    color: 'bg-accent-orange',
    pricing: 'Freemium',
    platform: ['Web', 'macOS'],
    tags: ['Accessibility', 'Color Theory', 'System']
  },
  {
    id: 't3',
    name: 'Type Scale',
    description: 'Fluid typography calculator.',
    longDescription: 'Stop guessing your font sizes. Type Scale helps you visualize and generate CSS clamp() functions for fluid typography that scales perfectly from mobile to ultra-wide monitors.',
    icon: 'type',
    color: 'bg-blue-500',
    pricing: 'Free',
    platform: ['Web'],
    tags: ['AIGC', 'CSS', 'Frontend']
  },
  {
    id: 't4',
    name: 'Motion Guide',
    description: 'Animation curve visualizer.',
    longDescription: 'Visualize cubic-bezier curves before you code them. Motion Guide allows you to tweak spacing, timing, and easing to create natural, physics-based interactions.',
    icon: 'motion',
    color: 'bg-pink-500',
    pricing: 'Paid',
    platform: ['Web', 'After Effects'],
    tags: ['Animation', 'Prototyping']
  },
  {
    id: 't5',
    name: 'Grid System',
    description: 'Responsive layout generator.',
    longDescription: 'Generate comprehensive grid overlays for any viewport. Export directly to Sketch, Figma, or CSS Grid code.',
    icon: 'grid',
    color: 'bg-green-500',
    pricing: 'Free',
    platform: ['Web'],
    tags: ['Layout', 'Responsive']
  },
  {
    id: 't6',
    name: 'Device Mockups',
    description: '3D device presentations.',
    longDescription: 'High-fidelity 3D device mockups running entirely in the browser. Customize angles, lighting, and materials to showcase your work in the best possible light.',
    icon: 'monitor',
    color: 'bg-yellow-500',
    pricing: 'Freemium',
    platform: ['Web', 'Blender'],
    tags: ['3D', 'Presentation']
  },
  {
    id: 't7',
    name: 'Texture Lab',
    description: 'Procedural noise and grain generator.',
    longDescription: 'Add depth and tactility to flat UI. Texture Lab generates high-resolution, seamless noise patterns including Perlin, Fractal, and Film Grain, ready for CSS background usage.',
    icon: 'layers',
    color: 'bg-indigo-500',
    pricing: 'Free',
    platform: ['Web'],
    tags: ['Visual', 'Assets', 'Texture']
  },
  {
    id: 't8',
    name: 'Vector 3D',
    description: 'SVG-based 3D shape builder.',
    longDescription: 'Create lightweight 3D-like geometry exported as pure SVG code. Perfect for adding dimension to illustrations without the heavy weight of WebGL or PNGs.',
    icon: 'grid',
    color: 'bg-red-500',
    pricing: 'Paid',
    platform: ['Figma', 'Web'],
    tags: ['Illustration', 'SVG', 'Vector']
  },
  {
    id: 't9',
    name: 'Focus Ring',
    description: 'Pomodoro timer for creatives.',
    longDescription: 'A productivity tool designed specifically for flow states. Focus Ring tracks your design sprints and syncs with your calendar to block out deep work sessions automatically.',
    icon: 'activity',
    color: 'bg-teal-500',
    pricing: 'Free',
    platform: ['macOS', 'iOS'],
    tags: ['Productivity', 'Workflow']
  },
  {
    id: 't10',
    name: 'SVG Compressor',
    description: 'Intelligent vector optimization.',
    longDescription: 'Reduce SVG file sizes by up to 80% without losing visual quality. This tool automatically cleans up unnecessary metadata, merges paths, and optimizes precision for web performance.',
    icon: 'layers',
    color: 'bg-cyan-500',
    pricing: 'Free',
    platform: ['Web', 'CLI'],
    tags: ['Performance', 'Development', 'SVG']
  },
  {
    id: 't11',
    name: 'Font Pair',
    description: 'AI-powered typography matchmaking.',
    longDescription: 'Struggling to find the perfect secondary font? Font Pair analyzes the x-height, contrast, and weight of your primary typeface to recommend harmonious pairings from the Google Fonts library.',
    icon: 'type',
    color: 'bg-orange-400',
    pricing: 'Freemium',
    platform: ['Web', 'Figma'],
    tags: ['AIGC', 'Design', 'AI']
  },
  {
    id: 't12',
    name: 'User Flow Kit',
    description: 'Standardized diagramming assets.',
    longDescription: 'A comprehensive library of connectors, decision nodes, and gesture icons for creating clear, professional user flow diagrams. Compatible with all major design tools.',
    icon: 'grid',
    color: 'bg-emerald-500',
    pricing: 'Paid',
    platform: ['Figma', 'Sketch', 'XD'],
    tags: ['UX', 'Diagramming', 'Assets']
  }
];
