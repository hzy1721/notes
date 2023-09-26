# React 元素

需要表示 React 元素时，会涉及以下类型：

- ReactElement
- JSX.Element
- ReactNode

## ReactElement

- 两个泛型：
  - P：props 的类型
    - 默认值：`any`
  - T：type 的类型
    - 必须是 `string | JSXElementConstructor<any>` 的子类型
    - 默认值：`string | JSXElementConstructor<any>`
- 三个属性：
  - type：元素类型
  - props：属性对象
  - key：React 元素的 key

```ts
interface ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>
> {
  type: T;
  props: P;
  key: Key | null;
}
```

## JSX.Element

- 等价于 `ReactElement<any, any>`
  - type 和 props 可以是任意类型
- 比 `ReactElement` 还要宽松一点：`type` 也是 `any`

```ts
namespace JSX {
  interface Element extends React.ReactElement<any, any> {}
}
```

## ReactNode

- 除了 `ReactElement` 之外，允许更多类型
  - 原始类型：
    - string
    - number
    - boolean
    - null
    - undefined
  - ReactFragment
  - ReactPortal
- 通常在允许值为空、字符串、数字的时候使用

```ts
type ReactNode =
  | ReactElement
  | string
  | number
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;
```
