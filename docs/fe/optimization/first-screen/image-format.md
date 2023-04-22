# 图片格式

根据实现原理，图片分为 2 类：

- 位图：像素矩阵
  - gif/jpg/png/webp/avif
- 矢量图：几何形状
  - svg

| 图片格式 | 诞生时间 | 支持率 | 特点       |
| -------- | -------- | ------ | ---------- |
| gif      | 1987     | 100%   |            |
| jpg      | 1992     | 100%   |            |
| png      | 1996     | 99.35% |            |
| svg      | 1999     | 99.22% | 缩放不失真 |
| webp     | 2010     | 97.03% | 体积小     |
| avif     | 2019     | 83.96% | 体积最小   |

## SVG

- 缩放不会影响质量
- 体积小
- 支持动画
- 渲染成本高

## WebP

- 同时支持有损压缩和无损压缩
- 类似视觉效果下，体积比 jpg/png 小

## AVIF

- 体积比 webp 更小
- 支持率较低