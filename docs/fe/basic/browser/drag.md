# 拖拽事件

这篇文章主要阐述了 HTML 原生拖拽 API 的基本使用方法以及相关的核心概念。

## 什么是拖拽

拖拽 (Drag and Drop) 是指用鼠标点击一个**可拖拽 (draggable)** 的元素，不松开鼠标并移动光标到另一个**可放置 (droppable)** 的元素位置，最后松开鼠标完成拖拽。

HTML 通过提供多种**拖拽事件 (DragEvent)** 来让开发者自定义拖拽的过程，并通过 `DataTransfer` 对象实现拖拽数据的传递。

## draggable

`draggable` 有 3 种取值：

- `auto`：默认，只有被选中的文本、图片、链接可以拖拽
- `true`：元素可以拖拽
- `false`：元素禁止拖拽

## DragEvent

`DragEvent` 继承自 `MouseEvent`，有一个只读属性 `dataTransfer`，类型是 `DataTransfer`。

![截屏2022-07-26 13.15.32.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c37d49f92e34f1f9a801a257e0b7135~tplv-k3u1fbpfcp-watermark.image?)

根据触发位置不同，拖拽事件可以分为两类：

- 起始元素
  - `dragstart`：开始拖拽
  - `dragend`：拖拽结束 (拖拽成功或失败都会触发)
  - `drag`：拖拽过程中低频率触发 (每隔几百 ms)
- 目标元素
  - `dragenter`：进入元素时触发
  - `dragover`：悬停在元素上时高频率触发
    - 鼠标不动时每隔 50ms 触发一次，慢速移动 5ms，快速移动 1ms
  - `dragleave`：离开元素时触发
  - `drop`：拖拽成功时触发

## 自定义拖拽图片

默认在拖拽过程中会有一张元素的半透明图片跟随光标，也可以在 `dragstart` 处理函数中使用 `setDragImage` 自定义显示的图片，支持 `Image` 元素和页面上已有的其他元素。

```js
dragSource.addEventListener('dragstart', e => {
  const img = new Image();
  // 100x100的图片
  img.src = 'https://via.placeholder.com/100';
  // 光标在(30,30)位置
  e.dataTransfer.setDragImage(img, 30, 30);
});
```

```js
dragSource.addEventListener('dragstart', e => {
  const el = document.getElementById('another-element');
  e.dataTransfer.setDragImage(el, 10, 10);
});
```

## 设置和读取拖拽数据

使用 `setData` 和 `getData` 进行拖拽数据的读写。

```js
dragSource.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', e.target.id);
});

dropArea.addEventListener('drop', e => {
  const id = e.dataTransfer.getData('text/plain');
  const el = document.getElementById(id);
  e.target.appendChild(el);
});
```

## 设置拖拽类型

使用 `dropEffect` 设置的拖拽类型有 4 种：

- `copy`：复制
  - 图标：加号
- `move`：移动
  - 无图标
- `link`：建立链接
  - 图标：弧形箭头
- `none`：不可放置
  - 会使拖拽无法成功 (无法触发 `drop` 事件，而是会触发 `dragleave` 和 `dragend`)

触发 `dragenter` 和 `dragover` 事件时，浏览器会初始化 `dropEffect` 的值，用户也可以按下 Cmd/Alt 键切换拖拽类型。

开发者可以在这两个事件的处理函数中手动设置 `dropEffect` 的值。

```js
dropArea.addEventListener('dragover', e => {
  e.dataTransfer.dropEffect = 'move';
  e.preventDefault();
});
```

## 成功拖拽

浏览器默认禁止放置在大部分元素上，需要同时指定 `dragover` 和 `drop` 的处理函数才能允许一个元素成为拖拽的目的地。

一次成功的拖拽需要满足以下要求：

- `dropEffect` 不能设置为 `none`
- 在松开鼠标前的最后一个 `dragenter` 或 `dragover` 事件的处理函数中调用了 `preventDefault`
  - 两个处理函数中均调用即可

拖拽成功后依次触发 `drop` 和 `dragend` 事件。

## Demo (码上掘金)

[代码片段](https://code.juejin.cn/pen/7124288893750345765)
