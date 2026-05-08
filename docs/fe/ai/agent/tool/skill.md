# Skill

把提示词、工具 (白名单 + 参数约束) 打包为可复用配置，支持渐进式加载和一键切换，用于不同的 Agent 角色。

本质是**结构化的上下文注入**，沉淀特定领域和场景的最佳实践。

优点：

- 配置复用，不用每次重新写，避免遗漏、错误
- 共享最佳实践

## 渐进式披露

Skill 分 3 层：

- 元数据：启动时只加载 name/description，每个 Skill 约 50 token
- 内容：完整 SKILL.md，通常 < 5k token
- 扩展：外部引用的脚本/模板/示例等，按需加载

## 与 MCP 的关系

互补关系：

- MCP：连接外部系统的工具
- Skill：告诉 Agent 如何调用工具完成任务
  - 按需加载 MCP 工具，缓解上下文压力

## 目录格式

`SKILL.md` 是必需的入口文件，其他文件可选。

```
my-skill/
├── SKILL.md           # 主指令（必需）
├── template.md        # 模板文件（可选）
├── reference.md       # 详细参考文档（可选）
├── examples/
│   └── sample.md      # 示例输出（可选）
└── scripts/
    └── helper.py      # 可执行脚本（可选）
```

## SKILL.md

YAML frontmatter + Markdown 内容。

```md
---
name: my-skill
description: 这个技能做什么，什么时候用
allowed-tools: Read, Grep, Glob
---

## 你的指令

当执行这个任务时：

1. 第一步...
2. 第二步...
```

## Tool/MCP/Skill

| 机制  | 注入什么                 | 补充什么能力   |
| ----- | ------------------------ | -------------- |
| Tool  | 函数定义 + 执行逻辑      | 与外部系统交互 |
| MCP   | 工具定义（来自外部服务） | 连接外部服务   |
| Skill | 指令 + 工作流知识        | 领域专业知识   |
