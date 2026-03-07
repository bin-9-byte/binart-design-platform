# A2文章视觉主线重构 Spec

## Why
当前a2文章仍存在“图片集中、组件分区”的问题，视觉主线没有形成“媒体为主、文字与组件穿插辅助”的叙事节奏，需要重新组织媒体与信息层级。

## What Changes
- 以媒体资源为主线，将文字与必要组件穿插在对应媒体段落中
- 按资源类别分段：展览海报、设计概念、布展过程、设计细节、设计成果
- 替换为最新的inline-xx真实资源并保持叙事一致性

## Impact
- Affected specs: 作品集文章结构、内容编排
- Affected code: data/articles/a2.ts
- Affected assets: public/images/articles/a02/inline-*.*

## ADDED Requirements
### Requirement: 媒体主线叙事
系统 SHALL 以媒体资源为主线组织a2文章内容，文字与组件仅用于解释与辅助，不形成独立堆叠区块。

#### Scenario: Success case
- **WHEN** 读者阅读a2文章
- **THEN** 能以媒体为主线顺畅理解项目叙事，组件使用数量合理

### Requirement: 资源分类分段
系统 SHALL 将媒体资源按“展览海报、设计概念、布展过程、设计细节、设计成果”分段组织，并在每段补充必要说明。

#### Scenario: Success case
- **WHEN** 读者浏览媒体段落
- **THEN** 可清晰分辨不同资源类别与叙事位置

### Requirement: 真实资源替换
系统 SHALL 使用inline-xx命名的最新资源替换a2文章中的示意素材，避免跨项目素材混用。

#### Scenario: Success case
- **WHEN** 文章加载媒体资源
- **THEN** 均来自a02目录的inline-xx真实资源

## MODIFIED Requirements
### Requirement: 现有a2文章视觉区块
a2文章 SHALL 从“图片区块集中展示”调整为“媒体穿插叙事”的结构，并保持信息完整。

## REMOVED Requirements
### Requirement: 分区式组件堆叠
**Reason**: 破坏阅读节奏且信息层级不清晰
**Migration**: 将组件拆分到对应媒体段落中作为说明与辅助
