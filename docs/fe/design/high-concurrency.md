# 高并发

1. 静态资源上传 CDN
2. 利用本地存储缓存数据
   - `localStorage`
   - `IndexedDB`
3. 接口请求节流，短时间内请求数据直接返回本地缓存的上一次数据
4. 服务端均设置 `Cache-Control`，并且请求间隔过短直接返回 `304`，跳过 `Last-Modified` 和 `ETag` 判断
