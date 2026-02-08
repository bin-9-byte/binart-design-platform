# Binart Design Platform - 内容调试与编辑手册

本文档旨在帮助您快速掌握如何使用组件化系统来编辑和调试平台内容。

## 1. 核心工作流

本平台采用 **数据驱动** 的渲染方式。所有文章内容均定义在 `constants.ts` 文件中。

1.  **定位数据**：打开项目根目录下的 [constants.ts](constants.ts)。
2.  **选择文章**：在 `FEATURED_ARTICLES` 或 `TOPIC_DATA` 数组中找到您要编辑的文章对象。
3.  **编辑 Blocks**：修改该文章对象中的 `blocks` 数组。
4.  **实时预览**：保存文件 (`Ctrl+S`)，浏览器端的页面会自动刷新显示最新内容。

---

## 2. 组件库 (Block Types)

系统目前支持以下 9 种基础组件。请直接复制以下 JSON 结构到 `blocks` 数组中使用。

### 2.1 文本类

**段落 (Paragraph)**
最基础的正文文本。
```json
{
  "type": "paragraph",
  "text": "这里输入正文内容..."
}
```

**二级标题 (H2)**
用于章节划分。
```json
{
  "type": "h2",
  "text": "章节标题"
}
```

**引用 (Quote)**
用于名人名言或强调语句。
```json
{
  "type": "quote",
  "text": "设计不是为了从众，而是为了表达。",
  "caption": "著名设计师 (可选)"
}
```

**高亮注释 (Note)**
用于提示、警告或专业注解。
```json
{
  "type": "note",
  "title": "设计提示 (可选)",
  "text": "请注意，在移动端布局时需要考虑..."
}
```

### 2.2 列表类

**列表 (List)**
支持无序 (`ul`) 和有序 (`ol`) 列表。
```json
{
  "type": "list",
  "listType": "ul", // 或 "ol"
  "items": [
    "第一点要素",
    "第二点要素",
    "第三点要素"
  ]
}
```

### 2.3 媒体类 (固定宽度布局)

所有媒体组件均设计为 **全宽 (w-full)**，与正文容器严格对齐，确保视觉整洁。

**图片 (Image)**
支持 JPG, PNG, WEBP。
```json
{
  "type": "image",
  "src": "https://example.com/image.jpg",
  "caption": "图1. 图片说明文字 (可选)"
}
```

**动图 (GIF)**
GIF 本质上也是图片，使用 `image` 类型即可。
```json
{
  "type": "image",
  "src": "https://media.giphy.com/media/...",
  "caption": "图2. 动图演示"
}
```

**视频 (Video)**
支持 MP4。
```json
{
  "type": "video",
  "videoUrl": "https://storage.googleapis.com/.../video.mp4",
  // 或者使用本地文件 (需放在 public 目录下):
  // "videoUrl": "/my-local-video.mp4",
  "poster": "https://example.com/poster.jpg", // 视频封面图 (可选)
  "caption": "图3. 视频演示"
}
```

**画廊 (Gallery)**
多张图片并排展示（桌面端双列，移动端单列）。
```json
{
  "type": "gallery",
  "images": [
    "https://example.com/img1.jpg",
    "https://example.com/img2.jpg"
  ]
}
```

### 2.4 装饰类

**分割线 (Divider)**
用于视觉分隔。
```json
{
  "type": "divider"
}
```

---

## 3. 完整示例模板

您可以直接复制以下数组覆盖任何文章的 `blocks` 字段，以快速查看所有组件效果：

```typescript
blocks: [
    { 
        type: 'paragraph', 
        text: "这是文章的开篇介绍，阐述了核心设计理念。" 
    },
    { 
        type: 'h2', 
        text: "1. 静态视觉" 
    },
    { 
        type: 'image', 
        src: 'https://picsum.photos/1200/800', 
        caption: '图1. 标准宽度的静态图片展示' 
    },
    { 
        type: 'note', 
        title: '排版提示', 
        text: '所有媒体元素的宽度都与文本栏保持一致，以维持垂直韵律。' 
    },
    { 
        type: 'h2', 
        text: "2. 动态交互" 
    },
    { 
        type: 'video', 
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        caption: '图2. 内嵌视频演示' 
    },
    { 
        type: 'list', 
        listType: 'ul', 
        items: [
            '支持自动播放（需静音）',
            '支持点击播放/暂停',
            '支持封面图配置'
        ] 
    },
    { 
        type: 'divider' 
    },
    { 
        type: 'quote', 
        text: "细节决定成败。",
        caption: "Charles Eames"
    }
]
```

## 4. 常见问题

*   **本地视频无法播放？**
    确保视频文件已放入项目根目录下的 `public` 文件夹中，引用路径以 `/` 开头（例如 `/hero.mp4`）。
*   **图片显示不全？**
    组件默认使用 `w-full` 撑满容器。请确保原图有足够的分辨率（建议宽度 > 800px）。
*   **如何修改样式？**
    组件的具体样式定义在 [components/blocks/index.tsx](components/blocks/index.tsx) 中。
