# pnpm workspace

- workspace：包含多个包的 monorepo
  - 根目录必须有 `pnpm-workspace.yaml`、可能有 `.npmrc`
- `pnpm-workspace.yaml`：workspace 配置文件，用于指定本地包
- `.npmrc`：npm 配置文件，也包括了 workspace 的部分配置
- `workspace:` 协议：类似于 `"local-pack": "workspace:*"` 的协议
  - 在 `.npmrc` 启用 `link-workspace-packages` 后，可以通过该协议引用本地包
  - 背景：如果不使用 `workspace:` 协议引用一个包，且这个包没有在 `pnpm-workspace.yaml` 声明，安装时就会从 registry 下载，而不是链接本地包
  - 该协议可以强制引用本地包，避免走 registry
  - 别名引用：`"aliasName": "workspace:local-pack@*"`
  - 相对路径引用：`"local-pack": "workspace:../local-pack"`
  - 版本号前缀 (同 npm)：
    - `workspace:*`：最新版本
    - `workspace:~`：major/minor 不变，patch 可以变
    - `workspace:^`：major 不变，minor/patch 可以变

## pnpm-workspace.yaml

```yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```
