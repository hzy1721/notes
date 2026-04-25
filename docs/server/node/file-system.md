# Node.js 文件系统

`fs` 模块：文件系统 API，包括读写文件、操作目录等。

导入模块有两种方式：

- `fs`：经典回调风格
  - 参数传入回调函数
  - 包含同步方法，支持同步阻塞操作
- `fs/promises`：Promise 风格，推荐使用
  - 方法返回 Promise，异步执行、不阻塞主线程
  - 不包含回调/同步方法

读取文件：

- `readFile`：异步读取文件
- `readFileSync`：同步读取文件，阻塞主线程
- `createReadStream`：流式读取，适合大文件

写入文件：

- `writeFile`：覆盖写入文件
- `appendFile`：追加写入文件末尾
- `createWriteStream`：流式写入，适合大文件

文件管理：

- `open`：打开文件
- `copyFile`：复制文件
- `watch`：监听文件变化

目录管理：

- `mkdir`：创建目录，支持多级
- `readdir`：读取目录内容
- `rmdir`：删除空目录

文件/目录管理：

- `stat`：获取元信息
- `access`：检查是否存在/有权限
- `rename`：重命名、移动
- `cp`：复制
- `rm`：删除
- `chmod`：修改权限
- `chown`：修改所有者
- `utimes`：修改访问时间/修改时间

符号链接：

- `lstat`：获取元信息，符号链接返回链接本身信息
- `symlink`：创建符号链接
- `readlink`：读取符号链接指向路径
- `realpath`：解析真实绝对路径

流式读写：处理大文件时边读边写、减少内存占用

```js
const readStream = fs.createReadStream('bigfile.mp4');
const writeStream = fs.createWriteStream('copy.mp4');
readStream.pipe(writeStream);
writeStream.on('finish', () => console.log('复制完成！'));
```
