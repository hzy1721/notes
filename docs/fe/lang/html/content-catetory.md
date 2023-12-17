# content category

根据元素的共同点，可以将大部分 HTML 元素划分类别 (content category)，每个元素可能属于一个或多个类别、也可能不属于任何类别。

![](./assets/content_categories_venn.png)

## Metadata

元数据，通常放在 `<head>` 里。

- `<base>`
- `<meta>`
- `<title>`
- `<link>`
- `<style>`
- `<script>`
- `<noscript>`

## Sectioning

创建一个区块 (section)。

- `<nav>`
- `<article>`
- `<aside>`
- `<section>`

## Heading

区块的标题部分。

- `<h1>`
- `<h2>`
- `<h3>`
- `<h4>`
- `<h5>`
- `<h6>`
- `<hgroup>`

## Phrasing

短语，段落的组成部分。

- `<abbr>`
- `<audio>`
- `<b>`
- `<bdi>`
- `<bdo>`
- ... ([还有很多](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content))

## Embedded

嵌入外部资源。

- `<img>`
- `<svg>`
- `<audio>`
- `<video>`
- `<canvas>`
- `<embed>`
- `<iframe>`
- `<math>`
- `<object>`
- `<picture>`

## Interactive

专门用于用户交互的元素。

- `<button>`
- `<details>`
- `<embed>`
- `<iframe>`
- `<label>`
- `<select>`
- `<a>`：有 href 属性
- `<input>`：type 不是 hidden
- `<textarea>`
- `<img>`：有 usemap 属性
- `<audio>`：有 controls 属性
- `<video>`：有 controls 属性

## Form-associated

表单相关元素。

- `<button>`
- `<fieldset>`
- `<input>`
- `<label>`
- `<meter>`
- `<object>`
- `<output>`
- `<progress>`
- `<select>`
- `<textarea>`

### Listed

可枚举。

- `<button>`
- `<fieldset>`
- `<input>`
- `<object>`
- `<output>`
- `<select>`
- `<textarea>`

### Labelable

可以与 `<label>` 关联。

- `<button>`
- `<input>`
- `<meter>`
- `<output>`
- `<progress>`
- `<select>`
- `<textarea>`

### Submittable

可以作为表单提交的数据。

- `<button>`
- `<input>`
- `<object>`
- `<select>`
- `<textarea>`

### Resettable

可重置。

- `<input>`
- `<output>`
- `<select>`
- `<textarea>`

## Script-supporting

不展示内容，用于支持脚本。

- `<script>`
- `<template>`
