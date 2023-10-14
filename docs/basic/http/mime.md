# MIME 类型

MIME：Multipurpose Internet Mail Extensions

包括一级类型、二级类型、可选的额外参数，支持自定义类型。

```http
Content-Type: type/subtype; parameter=value
```

- 文本
  - `text/plain`
  - `text/html`
  - `text/css`
  - `text/javascript`
- 字体
  - `font/woff`
  - `font/ttf`
  - `font/otf`
- 图片
  - `image/apng`
  - `image/avif`
  - `image/gif`
  - `image/jpeg`
  - `image/png`
  - `image/svg+xml`
  - `image/webp`
- 音视频
  - `audio/wave`、`audio/wav`、`audio/x-wav`、`audio/x-pn-wav`
  - `audio/webm`
  - `audio/ogg`
  - `audio/mpeg`
  - `audio/vorbis`
  - `video/webm`
  - `video/ogg`
  - `video/mp4`
  - `application/ogg`
- 3D 对象或场景
  - `model/3mf`
  - `model/vrml`
- 其他二进制类型
  - `application/octet-stream`
  - `application/pdf`
  - `application/pkcs8`
  - `application/zip`
- 复合文档
  - `multipart/form-data`
  - `multipart/byteranges`
  - `message/rfc822`
  - `message/partial`
