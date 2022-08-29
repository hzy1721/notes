# 事件委托

事件委托 (event delegation)：如果需要为多个元素添加行为相似的事件处理函数，可以统一在这些元素的根元素添加一个处理函数，函数内部根据 `event.target` 做不同的处理。

## 多个处理函数合并为一个

举例 1：实现一个菜单，每个菜单项对应不同的操作，可以为每个菜单项添加点击事件的处理函数，也可以在菜单元素上统一添加处理函数，每个菜单项添加自定义属性 `data-action`，指明对应的操作，方便在处理函数内做区分。

```js
<div id="menu">
  <button data-action="save">Save</button>
  <button data-action="load">Load</button>
  <button data-action="search">Search</button>
</div>

<script>
  class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      alert('saving');
    }

    load() {
      alert('loading');
    }

    search() {
      alert('searching');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }
  new Menu(menu);
</script>
```

## 行为模式 (behavior pattern)

举例 2：将行为添加到有特殊属性或类的元素上。假如部分元素有 `data-counter` 属性，可以在 `document` 添加处理函数，使所有拥有该属性的元素可以响应类似的点击事件。

```js
Counter: <input type="button" value="1" data-counter>
One more counter: <input type="button" value="2" data-counter>

<script>
  document.addEventListener('click', function(event) {
    if (event.target.dataset.counter != undefined) { // 如果这个特性存在...
      event.target.value++;
    }
  });
</script>
```

举例 3：不仅可以修改自身元素的值，也可以修改其他元素的值，只需要在自定义属性中传入参数。

```js
<button data-toggle-id="subscribe-mail">
  Show the subscription form
</button>

<form id="subscribe-mail" hidden>
  Your mail: <input type="email">
</form>

<script>
  document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;
    let elem = document.getElementById(id);
    elem.hidden = !elem.hidden;
  });
</script>
```

## 负面影响

输入事件由渲染器进程的合成器线程处理，页面合成后，合成器线程会给绑定了事件处理程序的区域打上 “Non-fast Scrollable Region” 的标记，当该区域发生事件后，将事件发送给主线程。

![](assets/non-fast-scrollable-region.png)

如果事件发生在区域外，合成器线程不会等待主线程，而是会继续合成新帧。

使用事件委托会导致最外层的大面积父元素被标记为 “Non-fast Scrollable Region”，即使事件发生在那些不需要处理的元素上，合成器线程也要每次都跟主线程沟通，消除了合成器线程平滑滚动的优势。

![](assets/event-delegation-drawback.png)

为了缓冲事件委托带来的副作用，可以在注册事件处理函数时设置 `{ passive: true }`，提示浏览器在处理事件时可以继续合成新帧。
