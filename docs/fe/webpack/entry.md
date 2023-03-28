# entry

打包的入口文件。

## context

| 类型     | 含义                     | 默认值            |
| -------- | ------------------------ | ----------------- |
| `string` | entry 和 loader 所在目录 | Node 当前工作目录 |

## entry

打包入口文件，一个 entry 对应一个 chunk/bundle/页面。

SPA 一个 entry，MPA 多个 entry。

| 类型                            | 含义                             | 默认值 |
| ------------------------------- | -------------------------------- | ------ |
| `string`                        | `main` chunk 的入口文件路径      |        |
| `string[]`                      | `main` chunk 的入口文件路径列表  |        |
| `{ [key: string]: string }`     | `key` chunk 对应的入口文件路径   |        |
| `{ [key: string]: descriptor }` | `key` chunk 对应的 entry 配置    |        |
| `() => entry`                   | 动态 entry，每次 `make` 事件触发 |        |

### descriptor

```ts
// 示意类型，并不是真的 TS
interface descriptor {
  // 入口文件
  import: string | string[];
  // 输出文件
  filename: string;
  // 依赖的其他 chunk
  dependOn: string | string[];
  chunkLoading: boolean | string;
  asyncChunks: boolean;
  layer: string;
}
```