# output

打包结果的输出路径。

## output.path

输出目录。

| 类型     | 含义               | 默认值                             |
| -------- | ------------------ | ---------------------------------- |
| `string` | 输出目录的绝对路径 | `path.join(process.cwd(), 'dist')` |

## output.filename

输出 bundle 的路径。

| 类型                              | 含义                        | 默认值 |
| --------------------------------- | --------------------------- | ------ |
| `string`                          | bundle 路径，支持动态字符串 |        |
| `(pathData, assetInfo) => string` |                             |        |

### 动态字符串

| 动态字符串      | 含义                    |
| --------------- | ----------------------- |
| `[name]`        | entry 名                |
| `[id]`          | webpack 内部的 chunk id |
| `[contenthash]` | 文件内容的哈希值        |

## output.publicPath

`output.path` 对应的 URL。会影响引用资源的路径，比如 `<link>`、`url()` 等。

| 类型     | 含义               | 默认值   |
| -------- | ------------------ | -------- |
| `string` | 输出目录对应的 URL | `'auto'` |

## output.clean

输出打包结果前清空输出目录。

| 类型      | 含义     | 默认值  |
| --------- | -------- | ------- |
| `boolean` | 是否清空 | `false` |
