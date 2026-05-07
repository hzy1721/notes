# 包管理

以 **Go Modules** 为核心。

## 基本单元

- package (包)：代码组织单位，同一目录下的 `.go` 文件属于同一个包
- module (模块)：依赖管理单位，一组相关包的集合，以 `go.mod` 为根

## 关键文件

- `go.mod`：模块声明文件

```
// 模块路径
module github.com/yourname/myapp

// 最低 Go 版本
go 1.22

// 依赖
require (
    github.com/gin-gonic/gin v1.9.1
    golang.org/x/net v0.20.0
)
```

- `go.sum`：依赖校验文件，自动生成、不要手动修改

```
github.com/gin-gonic/gin v1.9.1 h1:4idEAncQnU5cB7BeOkPtxjfCSye0AAm1R0RVIqJ+Jmg=
github.com/gin-gonic/gin v1.9.1/go.mod h1:hPrL7YrpYKXt5YId3A/Tnip5kqbEAP+KLuI3SUcPTeU=
```

## 常用命令

```sh
# 初始化模块
go mod init github.com/yourname/myapp

# 添加/更新依赖（自动拉取）
go get github.com/gin-gonic/gin@v1.9.1

# 整理依赖（删除未使用，补全缺失）
go mod tidy

# 下载所有依赖到本地缓存
go mod download

# 将依赖复制到项目 vendor 目录
go mod vendor

# 查看依赖图
go mod graph

# 检查为何需要某个依赖
go mod why github.com/some/pkg
```

## MVS 规则

满足所有依赖需求的前提下，选择最低可用版本 (Minimum Version Selection, MVS)、而不是最新版本。

优点：

- 构建结果可复现
- 避免依赖自动升级引入 bug

## 主版本号规则

发布 v2 以上大版本，需要在模块路径加上版本后缀。

```go
// v1（默认）
import "github.com/foo/bar"

// v2（路径变更！）
import "github.com/foo/bar/v2"
```

## 环境变量

### 网络代理

```sh
# 查看当前配置
go env GOPROXY

# 国内推荐配置（七牛云代理）
go env -w GOPROXY=https://goproxy.cn,direct

# 官方默认
go env -w GOPROXY=https://proxy.golang.org,direct
```

### 跳过私有仓库校验

`GONOSUMCHECK` / `GONOSUMDB` / `GOPRIVATE` 用于跳过私有仓库的校验

```sh
go env -w GOPRIVATE=gitlab.yourcompany.com
```

## workspace

本地多模块开发联调工具。

常用命令：

```sh
# 初始化 workspace
go work init ./moduleA ./moduleB

# 添加模块到 workspace
go work use ./moduleC
```

`go.work` 文件：

```
// 最低 Go 版本
go 1.22

// 模块列表
use (
    ./moduleA
    ./moduleB
    ./moduleC
)
```
