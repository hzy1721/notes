# 拖拽事件

这篇文章主要阐述了 HTML 原生拖拽 API 的基本使用方法以及相关的核心概念。

## 什么是拖拽 (Drag and Drop)

拖拽是指用鼠标点击一个**可拖拽 (draggable)** 的元素，不松开鼠标并移动光标到另一个**可放置 (droppable)** 的元素位置，最后松开鼠标完成拖拽。

HTML 通过提供多种**拖拽事件 (DragEvent)** 来让开发者自定义拖拽的过程，并通过 `DataTransfer` 对象实现拖拽数据的传递。

## draggable 属性

[draggable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable) 属性是一个枚举值，有三种取值：

- `auto`：默认，只有被选中的文本、图片、链接可以拖拽
- `true`：元素可以拖拽
- `false`：元素禁止拖拽

## 拖拽事件 (DragEvent)

[DragEvent](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent) 继承自 MouseEvent，有一个只读属性 `dataTransfer`，类型是 [DataTransfer](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)。

![截屏2022-07-26 13.15.32.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c37d49f92e34f1f9a801a257e0b7135~tplv-k3u1fbpfcp-watermark.image?)

根据拖拽事件触发的位置不同，可以分为两类：

- 起始元素
  - `dragstart`：开始拖拽时触发
  - `dragend`：拖拽结束时触发 (拖拽成功或失败都会触发)
  - `drag`：拖拽过程中低频率触发 (每隔几百 ms)
- 目标元素
  - `dragenter`：进入元素时触发
  - `dragover`：悬停在元素上时高频率触发
    - 鼠标不动时每隔 50ms 触发一次，慢速移动 5ms，快速移动 1ms
  - `dragleave`：离开元素时触发
  - `drop`：拖拽成功时触发

## 自定义拖拽图片

默认在拖拽过程中会有一张元素的半透明图片跟随光标，我们也可以在 `dragstart` 处理函数中使用 [setDragImage](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setDragImage) 自定义显示的图片，支持 `Image` 元素和页面上已有的其他元素。

```js
dragSource.addEventListener("dragstart", (e) => {
  const img = new Image();
  // 100x100的图片
  img.src = "https://via.placeholder.com/100";
  // 光标在(30,30)位置
  e.dataTransfer.setDragImage(img, 30, 30);
});
```

```js
dragSource.addEventListener("dragstart", (e) => {
  const el = document.getElementById("another-element");
  e.dataTransfer.setDragImage(el, 10, 10);
});
```

## 设置和读取拖拽数据

使用 [setData](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData) 和 [getData](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/getData) 进行拖拽数据的读写。

```js
dragSource.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

dropArea.addEventListener("drop", (e) => {
  const id = e.dataTransfer.getData("text/plain");
  const el = document.getElementById(id);
  e.target.appendChild(el);
});
```

## 设置拖拽类型

使用 [dropEffect](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect) 设置的拖拽类型有 4 种：

- `copy`：复制
- `move`：移动
- `link`：建立链接
- `none`：不可放置

不同的拖拽类型会显示不同的图标，`copy` 是一个加号，`move` 没有图标，`link` 是一个弧形箭头。设置为 `none` 会使拖拽无法成功 (无法触发 `drop` 事件，而是会触发 `dragleave` 和 `dragend`)。

触发 `dragenter` 和 `dragover` 事件时，浏览器会初始化 `dropEffect` 的值，同时用户可以按下 Cmd/Alt 键切换拖拽类型。开发者也可以在这两个事件的处理函数中手动设置 `dropEffect` 的值。

```js
dropArea.addEventListener("dragover", (e) => {
  e.dataTransfer.dropEffect = "move";
  e.preventDefault();
});
```

## droppable 与成功拖拽

**并没有**一个属性叫 droppable，浏览器默认禁止放置在大部分元素上，需要同时指定 `dragover` 和 `drop` 的处理函数才能让一个元素成为 _droppable_。

一次成功的拖拽需要满足以下要求：

- `dropEffect` 不能设置为 `none`
- 在松开鼠标前的最后一个 `dragenter` 或 `dragover` 事件的处理函数中调用了 `preventDefault`
  - 两个处理函数中均调用即可

拖拽成功后依次触发 `drop` 和 `dragend` 事件。

## Example

[代码片段](https://code.juejin.cn/pen/7124288893750345765)
