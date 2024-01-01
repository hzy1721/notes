# 性能

性能：保证安全的基础上，尽可能减少用户交互的响应时间，同时尽可能降低 CPU、内存、磁盘的使用量。

Electron 性能可以分为前端、Node、Electron 三部分，前两部分的性能优化与非 Electron 应用是通用的，但要注意 Node 服务端和客户端对性能的侧重点不同，比如客户端对冷启速度的要求更高。

性能优化的基本思想是测量目前代码的 CPU、内存使用情况，找到耗时长、内存高的瓶颈代码，针对性地进行优化。

- Chrome DevTools Performance
- Perfetto

Electron 应用可能的性能优化点：

1. 谨慎引入依赖
2. 推迟不必要的冷启操作
3. 避免阻塞主进程
4. 避免阻塞渲染进程
5. 谨慎引入 polyfill
6. 减少网络请求，避免耗时过长的请求
7. 打包项目代码，而不是原始的多个 ESM
8. 如果不需要 Electron 默认菜单，调用 `Menu.setApplicationMenu(null)`
