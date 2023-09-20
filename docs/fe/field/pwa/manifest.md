# Web Application Manifest

一个提供 Web 应用信息的 JSON 文件。通常用于 PWA。

JSON 对象的顶层属性称为 members。对于 manifest 来说，所有属性都是可选的。

对于 PWA 来说，以下属性是必选的：

- `name`
- `icons`
- `start_url`
- `display` 或 `display_override`

| 属性                          | 类型     | 含义                                                        |
| ----------------------------- | -------- | ----------------------------------------------------------- |
| ⚠ background_color            | string   | CSS 加载前的默认背景颜色                                    |
| ⚠ categories                  | string[] | 所属[类别](https://github.com/w3c/manifest/wiki/Categories) |
| description                   | string   | 描述                                                        |
| display                       | string   | 显示模式                                                    |
| ⚠ display_override            | string[] | 显示模式列表，应用第一个支持的模式，都不支持再应用 display  |
| ⚠ file_handlers               | object[] | PWA 可处理的文件类型                                        |
| icons                         | object[] | 不同尺寸和类型的 icon                                       |
| id                            | string   | 应用 ID，同一 URL、不同 id 会被认为是不同应用               |
| ⚠ launch_handler              | object   | 启动配置                                                    |
| name                          | string   | 名称                                                        |
| ⚠ orientation                 | string   | 朝向                                                        |
| ⚠ prefer_related_applications | boolean  | 是否更推荐安装相关应用，默认 false                          |
| ⚠ protocol_handlers           | object[] | PWA 可处理的协议                                            |
| ⚠ related_applications        | object[] | 相关的原生应用                                              |
| scope                         | string   | 应用导航的范围，超出范围变为普通浏览器标签页                |
| ⚠ screenshots                 | object[] | 截图                                                        |
| ⚠❌ serviceworker             | object   | 非标准，用于 Payment Handler API                            |
| ⚠ share_target                | object   | 接收分享数据 (Web Share Target API)                         |

## display

支持四种模式，优先级从高到低：

- `fullscreen`：全屏
- `standalone`：类似 App
- `minimal-ui`：保留导航功能
- `browser`：作为浏览器的一个标签页

## display_override

相比 display 新增一种模式：

- `window-controls-overlay`：PC 端的独立窗口，使用 ⚠ Window Controls Overlay

## file_handlers

对象数组，每个对象有两个必选属性：

- `action`：处理文件跳转的 URL
- `accept`：对象，键是 MIME 类型，值是文件扩展名列表 (包含 `.`)

```json
{
  "file_handlers": [
    {
      "action": "/handle-audio-file",
      "accept": {
        "audio/wav": [".wav"],
        "audio/x-wav": [".wav"],
        "audio/mpeg": [".mp3"],
        "audio/mp4": [".mp4"],
        "audio/aac": [".adts"],
        "audio/ogg": [".ogg"],
        "application/ogg": [".ogg"],
        "audio/webm": [".webm"],
        "audio/flac": [".flac"],
        "audio/mid": [".rmi", ".mid"]
      }
    }
  ]
}
```

开发者通过 `window.launchQueue` 实现文件处理。

## icons

对象数组，每个对象有以下属性：

- `sizes`：空格分隔的图像尺寸列表
- `src`：路径
- `type`：类型
- `purpose`：用途
  - `monochrome`：去除颜色、只保留形状，后续可以覆盖为其他颜色
  - `maskable`：safe zone 之外的区域可以被忽略
  - `any`：默认值，任意用途

## launch_handler

只有一个属性：

- `client_mode`：应用启动模式
  - 类型：`string | string[]`
    - 对于数组，会应用第一个有效的值
  - `auto`：用户代理决定采用哪种上下文
  - `focus-existing`：
    - 如果应用已加载，则获得焦点但不会自动跳转
    - 否则使用 `navigate-new` 模式
  - `navigate-existing`：
    - 如果应用已加载，则获得焦点并自动跳转到指定 URL
    - 否则使用 `navigate-new` 模式
  - `navigate-new`：
    - 在新的上下文中加载

## orientation

支持以下值：

- `any`
- `natural`
- `landscape`
- `landscape-primary`
- `landscape-secondary`
- `portrait`
- `portrait-primary`
- `portrait-secondary`

## protocol_handlers

- `protocol`：必选，协议名
- `url`：必选，处理协议的 URL，占位符 `%s` 会替换为 `protocol` 的值

## related_applications

- `platform`：安装平台
  - `chrome_web_store`: Google Chrome Web Store
  - `play`: Google Play Store
  - `chromeos_play`: Chrome OS Play
  - `webapp`: Web apps
  - `windows`: Windows Store
  - `f-droid`: F-droid
  - `amazon`: Amazon App Store
- `url`：安装 URL
- `id`：平台上应用的 ID

## screenshots

- `form_factor`：截图适用的设备
  - `narrow`：窄屏设备
  - `wide`：宽屏设备
- `label`：备用文本
- `platform`：截图适用的平台
  - 操作系统
    - `android`
    - `chromeos`
    - `ipados`
    - `ios`
    - `kaios`
    - `macos`
    - `windows`
    - `xbox`
  - 分发平台
    - `chrome_web_store`
    - `itunes`
    - `microsoft-inbox`
    - `microsoft-store`
    - `play`
- `sizes`：图片尺寸，同 `<link>` 的 `sizes`
- `src`：图片 URL
- `type`：MIME 类型

## share_target

- `action`：必选，分享的目标 URL
- `enctype`：POST 请求数据的编码格式
- `method`：请求方法，GET 或 POST
- `params`：必选，分享参数
  - `title`：分享页面标题的 query param key
  - `text`：分享消息的 query param key
  - `url`：分享资源 URL 的 query param key
  - `files`：接受的分享文件类型
    - `name`：文件的 query param key
    - `accept`：接受的 MIME 类型或扩展名

```json
{
  "share_target": {
    "action": "/shared-content-receiver/",
    "method": "GET",
    "params": {
      "title": "name",
      "text": "description",
      "url": "link"
    }
  }
}
```

```json
{
  "share_target": {
    "action": "/save-bookmark/",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "url": "link"
    }
  }
}
```

```json
{
  "share_target": {
    "action": "/file-collector",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "title": "name",
      "text": "description",
      "url": "link",
      "files": [
        {
          "name": "lists",
          "accept": ["text/csv", ".csv"]
        },
        {
          "name": "photos",
          "accept": ["image/svg+xml", ".svg"]
        }
      ]
    }
  }
}
```
