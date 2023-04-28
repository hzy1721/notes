# 别名函数

把 `method`、`url`、`data` 提取为函数名和函数参数。

```js
// 等价于 axios(config)
axios.request(config)
// method/url/data
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
axios.postForm(url[, data[, config]])
axios.putForm(url[, data[, config]])
axios.patchForm(url[, data[, config]])
```
