
import { Article, Category, Tool } from './types';

export const NAV_LINKS = [
  { name: 'DISCOVER', href: '#discover' },
  { name: 'ARCHIVE', href: '#archive' },
  { name: 'TOOLS', href: '#tools' },
];

export const FEATURED_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Architecture of Silence',
    category: 'Visual Design',
    author: 'Elena Vance',
    date: 'Oct 12, 2024',
    readTime: '8 min',
    excerpt: 'Exploring negative space as the primary active element in modern interface paradigms.',
    imageUrl: 'https://picsum.photos/1200/800?random=1',
    mediaType: 'image',
    blocks: [
        {
            type: 'paragraph',
            text: "In the cacophony of digital noise, silence is not merely the absence of content—it is a structural material. Just as an architect uses void to define volume, a designer uses negative space to define interaction. This isn't about minimalism for minimalism's sake; it's about cognitive preservation."
        },
        {
            type: 'quote',
            text: "Space is the breath of art.",
            caption: "Frank Lloyd Wright"
        },
        {
            type: 'paragraph',
            text: "When we look at high-density interfaces, the eye struggles to find a resting place. This phenomenon, known as 'visual crowding', significantly increases the cognitive load required to process information. By expanding margins and increasing line height, we don't just make things 'look clean'—we fundamentally alter the time-to-comprehension."
        },
        {
            type: 'h2',
            text: "The Active Void"
        },
        {
            type: 'image',
            src: 'https://picsum.photos/1200/600?random=10',
            caption: 'Fig 1. Visual tension created through asymmetrical whitespace.',
            alt: 'Abstract geometric composition'
        },
        {
            type: 'paragraph',
            text: "Consider the active void. It pushes content, it groups elements, and it creates a rhythm. In our recent case study redesigning the fintech dashboard for 'Lumina', we removed 40% of the visible borders and replaced them with proximity-based grouping. The result was a 15% increase in task completion speed."
        },
        {
            type: 'gallery',
            images: [
                'https://picsum.photos/600/600?random=11',
                'https://picsum.photos/600/600?random=12'
            ]
        },
        {
            type: 'paragraph',
            text: "This approach requires courage. Stakeholders often view whitespace as 'wasted real estate'. It is our job to articulate that whitespace is actually 'focused real estate'. It frames the value proposition."
        },
        {
            type: 'h2',
            text: 'Implementation Guidelines'
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
        {
            type: 'note',
            title: 'Pro Tip',
            text: 'Always check your whitespace on mobile devices. What looks spacious on desktop might require tightening on smaller screens.'
        }
    ]
  },
  {
    id: '2',
    title: 'Cognitive Loads in AR',
    category: 'UX Research',
    author: 'Marcus Chen',
    date: 'Oct 10, 2024',
    readTime: '12 min',
    excerpt: 'A deep dive into spatial computing and the limits of human attention in mixed reality.',
    imageUrl: 'https://picsum.photos/1200/800?random=2',
    mediaType: 'video',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    blocks: [
        { type: 'paragraph', text: "Augmented Reality presents a unique challenge: the UI is no longer framed by a rectangle, but by the world itself. This fundamental shift requires us to rethink how we present information to avoid overwhelming the user." },
        { type: 'h2', text: 'The 3-Second Rule' },
        { type: 'paragraph', text: "In spatial computing, information retention drops significantly if the user is forced to move their head too often. We call this the 'neck-swivel tax'." },
        { 
            type: 'note', 
            title: 'Key Metric', 
            text: 'Keep primary interface elements within a 30-degree cone of vision to minimize physical strain.' 
        },
        { type: 'h2', text: 'Interaction Patterns' },
        { 
            type: 'list', 
            listType: 'ul',
            items: [
                'Gaze-based selection (dwell time)',
                'Hand ray-casting (distance interaction)',
                'Direct manipulation (near-field touch)'
            ] 
        },
        { 
            type: 'quote', 
            text: "The best AR interface is the one that looks like it's actually there.",
            caption: "Jony Ive (Paraphrased)"
        },
        { type: 'divider' },
        { type: 'paragraph', text: "As hardware evolves, these constraints will shift, but the biological limits of human attention remain constant." }
    ]
  },
  {
    id: '3',
    title: 'Typography as Voice',
    category: 'Interaction',
    author: 'Sarah Jenkins',
    date: 'Oct 05, 2024',
    readTime: '6 min',
    excerpt: 'How variable fonts are changing the way we perceive emotional tone in digital reading.',
    imageUrl: 'https://picsum.photos/1200/800?random=3', // Static image for card view
    gifUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzM0YjM0MzQ1N2FmMzQ1N2FmMzQ1N2FmMzQ1N2Fm/3o7TKSjRrfIPjeiVyM/giphy.gif', // Animated GIF for detail view
    mediaType: 'gif',
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
    tags: ['Typography', 'CSS', 'Frontend']
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
    tags: ['Typography', 'Design', 'AI']
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
