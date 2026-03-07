# U2文章排版重构 Spec

## Why
目前文章叙事结构不清晰，需要按UI设计与AIGC两条主线组织，增强作品集表达与可读性。

## What Changes
- 重构u2文章为两个主章节：UI Design与AIGC
- 为每个主章节补充分节结构、叙事要点与内容占位
- 明确每个章节的目标、过程与成果展示路径

## Impact
- Affected specs: 作品集文章结构、内容编排
- Affected code: data/articles/u2.ts

## ADDED Requirements
### Requirement: 双主线文章结构
系统 SHALL 将u2文章划分为“UI Design”和“AIGC”两个主章节，并补充分节与叙事要点。

#### Scenario: Success case
- **WHEN** 读者阅读u2文章
- **THEN** 可清晰看到两条主线的工作范围、过程与产出

### Requirement: UI Design章节扩写框架
系统 SHALL 为UI Design章节补充分节结构与关键内容提示，覆盖素材绘制、资源设计与主题匹配。

#### Scenario: Success case
- **WHEN** 读者查看UI Design章节
- **THEN** 能看到明确的小节标题与对应内容范围

### Requirement: AIGC章节扩写框架
系统 SHALL 为AIGC章节补充分节结构与关键内容提示，覆盖Lora训练、特征保持与产能提升验证。

#### Scenario: Success case
- **WHEN** 读者查看AIGC章节
- **THEN** 能看到明确的小节标题与对应内容范围

## MODIFIED Requirements
### Requirement: 现有u2文章布局
u2文章 SHALL 从现有结构调整为两大部分的线性叙事结构，并保持原有信息不丢失。

## REMOVED Requirements
### Requirement: 单线性混排叙事
**Reason**: 无法清晰呈现两条主线的成果与价值
**Migration**: 将相关内容分配到UI Design与AIGC对应章节中
