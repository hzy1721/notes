# 上下文工程

## Agent 操作系统类比

Agent 就像操作系统，上下文就是内存。

- 上下文有限，即使 1M 也是有限的
- 会话结束后清空丢失
- token 数量与费用相关、需要尽可能节省

![](./assets/llm-os-architecture.svg)

## Context Engineering

- 提示词工程 (Prompt Engineering)：优化提示词，让模型给出更好的回答。
- 上下文工程 (Context Engineering)：优化上下文窗口，在正确的时间向模型提供正确的信息和工具。

## 上下文窗口

1. 系统提示词
2. 用户提示词
3. 会话历史
4. 持久记忆
5. RAG 知识
6. 可用工具
7. 输出格式要求

![](./assets/context-engineering-overview.svg)

## Token

LLM 处理文本的最小单位，依赖分词器 (tokenizer) 实现，不严格对应字符或单词。

- 同样语义内容，中文消耗 token 更多

| 语言 | 平均效率        | 说明                 |
| ---- | --------------- | -------------------- |
| 英文 | ~4 字符/token   | 按词根和常见词切分   |
| 中文 | ~1.5 字符/token | 每个汉字约 1-2 token |
| 代码 | ~3 字符/token   | 符号和关键字独立切分 |

## 上下文腐蚀

上下文腐蚀 (Context Rot)：随着上下文 token 数量增加，模型回忆和利用信息的能力会减弱。

- Transformer 架构自注意力计算量与 token 数呈 $n^2$ 关系，导致计算量暴增、准确率下降
- 上下文存在边际效应递减，添加更多信息不一定能让模型表现更好
