# module

规定不同类型模块的处理方式。

## module.rules

| 类型     | 含义                          | 默认值 |
| -------- | ----------------------------- | ------ |
| `Rule[]` | `Rule` 数组，规定模块处理方式 |        |

## Rule

`Rule` 分为 3 部分：

- conditions
  - resource：被引用的资源
    - `test/include/exclude/resource`
  - issuer：引用方
    - `issuer`
- results
  - loaders
    - `loader/options/use`
    - `query/loaders`
    - `enforce`
  - parser options
    - `parser`
- nested Rules
  - `rules/oneOf`

## Rule.test

包含文件名满足条件的所有模块。

## Rule.type

| 类型     | 含义                  | 默认值 |
| -------- | --------------------- | ------ |
| `string` | `Rule` 匹配模块的类型 |        |

可能的取值：

- `javascript/auto`
- `javascript/dynamic`
- `javascript/esm`
- `json`
- `webassembly/sync`
- `webassembly/async`
- `asset`
- `asset/source`
- `asset/resource`
- `asset/inline`

## Rule.use

| 类型                   | 含义                               | 默认值 |
| ---------------------- | ---------------------------------- | ------ |
| `UseEntry[]`           | `UseEntry` 数组，定义使用的 loader |        |
| `(info) => UseEntry[]` |                                    |        |

### UseEntry

```ts
type UseEntry = UseEntryObject | ((info: UseEntryInfo) => UseEntryObject);

interface UseEntryObject {
  loader: string;
  // loader 配置，会被传给 loader
  options?: string | object;
  // options 的别名，已废弃
  query?: string | object;
}

interface UseEntryInfo {
  compiler?: string;
  issuer: string;
  realResource: string;
  resource: string;
}
```
