# Mobx

最佳实践：`class` + `makeAutoObservable`

```ts
class DemoStore {
  /** state */
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  /** action */
  increase() {
    this.counter += 1;
  }

  /** computed */
  get counterPlusOne() {
    return this.counter + 1;
  }
}
```

## 术语表

| 术语                | 含义                                                  |
| ------------------- | ----------------------------------------------------- |
| state               | 状态                                                  |
| action              | 修改 state 的函数                                     |
| derivation          | 包括三种：computed、带参数的 "computed"、reaction     |
| computed            | 依赖 state 的 get 属性                                |
| 带参数的 "computed" | 依赖 state、带参数、返回值的函数，不能标记为 computed |
| reaction            | 依赖 state、不返回值的副作用函数                      |

| derivation          | 依赖 state | 带参数 | 返回值 |
| ------------------- | ---------- | ------ | ------ |
| computed            | ✅         | ❌     | ✅     |
| 带参数的 "computed" | ✅         | ✅     | ✅     |
| reaction            | ✅         | ❔     | ❌     |

## makeAutoObservable

`makeAutoObservable(target, overrides?, options?)`

推导规则：

- 自由属性：observable
- get 属性：computed
- set 属性：action
- 方法：autoAction
- 迭代器：flow

### overrides

| 标记         | 含义                                              |
| ------------ | ------------------------------------------------- |
| `false`      | 不转换为响应式，主要用于 makeAutoObservable       |
| `autoAction` | 运行时根据调用上下文决定是 action 还是 derivation |

### options

| 选项       | 含义                                                    | 默认值  |
| ---------- | ------------------------------------------------------- | ------- |
| `autoBind` | 使用 `action.bound`/`flow.bound` 而不是 `action`/`flow` | `true`  |
| `deep`     | 使用 `observable.ref` 而不是 `observable`               | `false` |
| `name`     | 调试用的名称                                            |         |

## makeObservable

`makeObservable(target, annotations?, options?)`

### state

| 标记                                  | 含义               |
| ------------------------------------- | ------------------ |
| `observable` 等价于 `observable.deep` | 深响应             |
| `observable.ref`                      | 只有重新赋值会响应 |
| `observable.shallow`                  | 浅响应 (只有一层)  |
| `observable.struct`                   | 只有值不同才会响应 |

### action

| 标记           | 含义                 |
| -------------- | -------------------- |
| `action`       | 修改 state 的方法    |
| `action.bound` | 绑定 this 为当前实例 |

### computed

| 标记              | 含义                         |
| ----------------- | ---------------------------- |
| `computed`        | 依赖 state 的 get 访问器属性 |
| `computed.struct` | 只有值不同才会响应           |

### flow

| 标记         | 含义                 |
| ------------ | -------------------- |
| `flow`       | 用于管理异步进程     |
| `flow.bound` | 绑定 this 为当前实例 |

### 其他

| 标记         | 含义                                              |
| ------------ | ------------------------------------------------- |
| `true`       | 自动推导，相当于 makeAutoObservable               |
| `false`      | 不转换为响应式，主要用于 makeAutoObservable       |
| `override`   | 重写父类 action/computed                          |
| `autoAction` | 运行时根据调用上下文决定是 action 还是 derivation |

## observable -> vanilla

- 浅转换：浅拷贝
  - `{ ...observableObject }`
  - `observableArray.slice()`
  - `new Map(observableMap)`
- 深转换：`toJS(observableObject/Array/Map)`
