# 自定义实例

可以通过创建自定义实例来复用更多配置，也支持别名函数。

```js
const instance = axios.create([config])
instance.request(config)
instance.get(url[, config])
instance.delete(url[, config])
instance.head(url[, config])
instance.options(url[, config])
instance.post(url[, data[, config]])
instance.put(url[, data[, config]])
instance.patch(url[, data[, config]])
instance.getUri([config])
```
