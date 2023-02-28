# 注册副作用函数

## 全局变量

```js
// 全局变量保存当前激活的副作用函数
let activeEffect;
// 副作用函数栈，实现 effect 嵌套
const effectStack = [];
```

## effect 函数

```js
function effect(fn, options = {}) {
  const effectFn = () => {
    // 调用 cleanup 完成清除工作，实现分支切换
    cleanup(effectFn);
    // 调用 effect 注册副作用函数时，把副作用函数赋值给 activeEffect
    activeEffect = effectFn;
    // 调用副作用函数前把当前副作用函数压入栈中
    effectStack.push(effectFn);
    // 将 fn 的执行结果保存到 res 中
    const res = fn();
    // 当前副作用函数执行完毕后，把当前副作用函数弹出栈
    effectStack.pop();
    // 并把 activeEffect 还原为之前的值
    activeEffect = effectStack[effectStack.length - 1];
    // 将 res 作为 effectFn 的返回值，实现懒计算
    return res;
  };
  // 把 options 挂载到 effectFn 上
  effectFn.options = options;
  // 存储所有与副作用函数相关的依赖集合
  effectFn.deps = [];
  // 只有非 lazy 的时候才执行
  if (!options.lazy) {
    // 执行副作用函数
    effectFn();
  }
  // 将副作用函数作为返回值返回
  return effectFn;
}
```

## 清理副作用函数

为了实现分支切换。

```js
function cleanup(effectFn) {
  // 遍历 effectFn.deps 数组
  for (let i = 0; i < effectFn.deps.length; ++i) {
    // deps 是依赖集合
    const deps = effectFn.deps;
    // 把 effectFn 从依赖集合中移除
    deps.delete(effectFn);
  }
  // 最后需要重置 effectFn.deps 数组
  effectFn.deps.length = 0;
}
```
