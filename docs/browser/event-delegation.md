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