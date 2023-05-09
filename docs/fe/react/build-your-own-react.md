# build your own react

## user code

最终要渲染一个计数器组件，点击 `h1` 数量 + 1。

```js
/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1);
  return <h1 onClick={() => setState(c => c + 1)}>Count: {state}</h1>;
}
const element = <Counter />;
const container = document.getElementById('root');
Didact.render(element, container);
```

## Didact (your own react)

需要实现的 3 个方法。

```js
const Didact = {
  createElement,
  render,
  useState,
};
```

## 数据结构

```ts
interface Element {
  type: string;
  props: {
    children: Element[];
    [key: string]: any;
  };
}

interface Fiber {
  type: string;
  props: {
    children: Element[];
    [key: string]: any;
  };
  // 额外字段
  dom: HTMLElement;
  alternate: Fiber;
  parent: Fiber;
  child: Fiber;
  sibling: Fiber;
  effectTag: 'PLACEMENT' | 'UPDATE' | 'DELETION';
}
```

## createElement

类似 `React.createElement`，把 JSX 标签和属性转换为 element (vdom)。

- 文本节点是单独的类型

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
```

## render

类似 `ReactDOM.render`，把 fiber 渲染到 DOM 元素上。

```js
// 正在渲染的根 fiber
let wipRoot = null;
// 当前渲染好的根 fiber
let currentRoot = null;
// 需要删除的 fiber 列表
let deletions = null;
// 下一个渲染的 fiber
let nextUnitOfWork = null;

function render(element, container) {
  wipRoot = {
    props: {
      children: [element],
    },
    dom: container,
    alternate: currentRoot,
  };
  deletions = [];
  nextUnitOfWork = wipRoot;
}
```

## useState

类似 `React.useState`，定义状态的 hook。

```js
// 正在渲染的 fiber
let wipFiber = null;
// 当前 fiber 拥有 hook 的索引
let hookIndex = null;

function useState(initial) {
  // 取出旧 hook
  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex];
  // 创建新 hook
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [],
  };

  // 执行队列中的操作
  const actions = oldHook ? oldHook.queue : [];
  actions.forEach(action => {
    hook.state = action(hook.state);
  });

  const setState = action => {
    // 加入操作队列
    hook.queue.push(action);
    // 触发重新渲染，类似 render 函数
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.prpos,
      alternate: currentRoot,
    };
    deletions = [];
    nextUnitOfWork = wipRoot;
  };

  // 加入 hooks 列表
  wipFiber.hooks.push(hook);
  ++hookIndex;
  return [hook.state, setState];
}
```

## workLoop

React 渲染循环，依次渲染 `nextUnitOfWork`，最终把 fiber 树渲染到 DOM 上。

- 通过 `shouldYield` 实现可中断渲染

```js
function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  // 所有 fiber 渲染完成，更新到 DOM 上
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  // 死循环
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);
```

## performUnitOfWork

- 对比旧 fiber 和新 element，确定操作类型 (新增/更新/删除)，保存在 `effectTag` 属性中
  - 新增操作：创建新 fiber，如果是 HTML 标签创建对应的 DOM 元素
  - 更新操作：创建新 fiber，复用旧 fiber 的 DOM 元素
  - 删除操作：加入 `deletions` 列表
- 建立 fiber 之间的 `parent/child/sibling` 连接

```js
function performUnitOfWork(fiber) {
  // 函数组件还是 HTML 标签
  const isFunctionComponent = fiber.type instanceof Function;
  if (isFunctionComponent) {
    updateFunctionComponent(fiber);
  } else {
    updateHostComponent(fiber);
  }

  // 递归处理子 fiber (DFS)
  if (fiber.child) {
    return fiber.child;
  }

  // 回溯处理兄弟 fiber
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}

function updateFunctionComponent(fiber) {
  // 正在渲染的 fiber
  wipFiber = fiber;
  // hooks 数组
  wipFiber.hooks = [];
  hookIndex = 0;
  // 渲染子元素
  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}

function updateHostComponent(fiber) {
  // 创建 DOM
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  // 渲染子元素
  reconcileChildren(fiber, fiber.props.children);
}

function createDom(fiber) {
  // 创建元素
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(fiber.type);
  // 设置属性
  const isProperty = key => key !== 'children';
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => (dom[name] = fiber.props[name]));
  return dom;
}
```

## reconcileChildren

对比旧 fiber 和新 element，创建新 fiber。

```js
function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
  let prevSibling = null;

  // 遍历 children
  while (index < elements.length || oldFiber !== null) {
    const element = elements[index];
    let newFiber = null;

    // 对比类型
    const sameType = oldFiber && element && element.type === oldFiber.type;

    // 类型相同：只需要更新已有 DOM
    // 复用旧 fiber 的 dom
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        alternate: oldFiber,
        parent: wipFiber,
        effectTag: 'UPDATE',
      };
    }

    // 类型不同：需要创建新 element 的 DOM
    // dom 设为 null
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        alternate: null,
        parent: wipFiber,
        effectTag: 'PLACEMENT',
      };
    }

    // 旧 fiber 存在：需要删除旧 fiber 的 DOM
    // 加入 deletions 列表
    if (oldFiber && !sameType) {
      oldFiber.effectTag = 'DELETION';
      deletions.push(oldFiber);
    }

    // 移动到兄弟 fiber
    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    if (index === 0) {
      // 设置 child
      wipFiber.child = newFiber;
    } else {
      // 设置 sibling
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    ++index;
  }
}
```

## commitRoot

应用 DOM 变更。

- 新增操作：fiber 的 `dom` 属性添加到 `parent` fiber 的 DOM 元素下
- 更新操作：更新已有 DOM 元素的属性 (包括事件处理函数，不包括 `children`)
- 删除操作：移除 DOM 元素

```js
function commitRoot() {
  // 删除
  deletions.forEach(commitWork);
  // 新增/更新
  commitWork(wipRoot.child);
  // 替换当前 fiber
  currentRoot = wipRoot;
  wipRoot = null;
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  // 最近的祖先 DOM 节点
  let domParentFiber = fiber.parent;
  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }
  const domParent = domParentFiber.dom;

  if (fiber.effectTag === 'PLACEMENT' && fiber.dom !== null) {
    // 新增：添加到子元素
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === 'UPDATE' && fiber.dom !== null) {
    // 更新：已有 DOM 的属性
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === 'DELETION') {
    // 删除
    commitDeletion(fiber, domParent);
  }
  // DFS
  // 递归处理子 fiber
  commitWork(fiber.child);
  // 递归处理兄弟 fiber
  commitWork(fiber.sibling);
}

function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    // 直接删掉这个 DOM
    domParent.removeChild(fiber.dom);
  } else {
    // 递归子元素查看是否有可删除的 DOM
    commitDeletion(fiber.child, domParent);
  }
}
```

## updateDom

```js
// 事件处理函数
const isEvent = key => key.startsWith('on');
// 除了 children/事件处理函数的其他属性
const isProperty = key => key !== 'children' && !isEvent(key);
// 与旧属性不同
const isNew = (prev, next) => key => prev[key] !== next[key];
// 不在新属性中
const isGone = (prev, next) => key => !(key in next);

function updateDom(dom, prevProps, nextProps) {
  // 删除不再出现或需要更新的旧事件处理函数
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // 删除不再出现的旧属性
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => (dom[name] = ''));

  // 新增或更新属性
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => (dom[name] = nextProps[name]));

  // 新增或更新事件处理函数
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}
```
