# Binart Design Platform

<div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Binart Platform Banner" width="100%" />
</div>

<br />

Binart Design Platform 是一个极简主义、内容驱动的设计分享平台。它融合了大胆的排版、沉浸式布局和动态视觉叙事，旨在为设计师提供灵感与工具。

## ✨ 特性

- **沉浸式阅读体验**：基于 Block 的内容渲染系统，支持图文混排、视频、画廊等多种组件。
- **动态交互设计**：流畅的页面转场与滚动动画，带来细腻的用户体验。
- **设计工具箱**：集成了多种实用设计工具的展示与预览（如对比度检查、配色生成等）。
- **数据驱动**：所有内容通过 `constants.ts` 集中管理，便于维护与更新。
- **响应式布局**：完美适配桌面端与移动端设备。

## 🛠️ 技术栈

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **CI/CD**: GitHub Actions

## 🚀 快速开始

### 环境要求
- Node.js 18+

### 本地运行

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm run dev
   ```
   访问 `http://localhost:3000` 即可预览。

3. **构建生产版本**
   ```bash
   npm run build
   ```

## 📂 项目结构

```
binart-design-platform/
├── components/         # UI 组件
│   ├── blocks/         # 文章内容块组件 (Text, Image, Video...)
│   └── ...             # 页面级组件 (Hero, ToolsShowcase...)
├── constants.ts        # 核心数据文件 (文章、工具数据源)
├── types.ts            # TypeScript 类型定义
├── App.tsx             # 主应用入口
├── main.tsx            # 渲染入口
└── DEPLOY.md           # 详细部署文档
```

## 🚢 部署

本项目配置了完整的 CI/CD 流程：
- **自动部署**：推送到 `main` 分支时，GitHub Actions 会自动构建并部署到腾讯云服务器。
- **部署详情**：详细的服务器配置与部署脚本说明，请查阅 [DEPLOY.md](./DEPLOY.md)。
- **线上地址**：[https://binart.cn](https://binart.cn)

## 📝 内容管理

查看 [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) 了解如何添加和编辑文章内容。
