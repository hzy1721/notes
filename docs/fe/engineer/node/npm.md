# npm

Node 包管理器（Node Package Manager）。

## 安装

nodejs.org 安装 Node，包含了 npm。

## registry

存放 npm 包的仓库。

- 官方源（默认）：https://registry.npmjs.org
- 阿里源：https://registry.npmmirror.com

```sh
# 切换为阿里源
npm config set registry https://registry.npmmirror.com
```

## package

npm 包是包含 `package.json` 的文件或目录。可选格式如下：

- 包含 `package.json` 的目录
- tar.gz 压缩包
- 指向压缩包的 URL
- `<name>@<version>`
- `<name>@<tag>`
- `<name>` 有 `latest` tag
- Git URL
  - git://github.com/user/project.git#commit-ish
  - git+ssh://user@hostname:project.git#commit-ish
  - git+http://user@hostname/project/blah.git#commit-ish
  - git+https://user@hostname/project/blah.git#commit-ish

## module

存放在 `node_modules` 目录，可以被 `require()` 导入的文件或目录。

- 目录，包含 `package.json`，文件中包含 `main` 字段
- JS 文件

package 大多是 module 或包含 module，module 不一定是 package。

## scope

命名空间，每个 npm 用户和组织都有自己的 scope。

- `@user/package`
- `@org/package`

## visibility

分为 public 和 private：

- public 可以被所有人下载和使用
- private 只对发布者指定的协作者可见
  - 官方 registry 需要付费，也可以自建 registry

scope 与 visibility：

- 非 scope 包一定是 public
- private 包一定是 scope
- scope 包默认 private，需要发布时显式指定为 public

## npm config

管理 npm 配置。

```sh
npm config set <key>=<value> [<key>=<value> ...]
npm config get [<key> [<key> ...]]
npm config delete <key> [<key> ...]
npm config list [--json]
npm config edit
npm config fix

alias: c
```

## npm init

创建 `package.json` 文件。

```sh
npm init <package-spec> (same as `npx <package-spec>`)
npm init <@scope> (same as `npx <@scope>/create`)

aliases: create, innit
```

## npm install

安装 npm 包。

```sh
npm install [<package-spec> ...]

aliases: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall
```

## npm link

软链接 npm 包，用于本地修改调试。

```sh
npm link [<package-spec>]

alias: ln
```

## npm run-script

运行 scripts 脚本。

```sh
npm run-script <command> [-- <args>]

aliases: run, rum, urn
```

## npm search

搜索 npm 包。

```sh
npm search [search terms ...]

aliases: find, s, se
```

## npm start

启动 npm 包。等价于 `npm run start` 或 `node server.js`。

```sh
npm start [-- <args>]
```

## npm test

测试 npm 包。等价于 `npm run test`。

```sh
npm test [-- <args>]

aliases: tst, t
```

## npm uninstall

移除 npm 包。

```sh
npm uninstall [<@scope>/]<pkg>...

aliases: unlink, remove, rm, r, un
```

## npm version

升版本号。

```sh
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]

alias: verison
```

## npm view

查看包信息。

```sh
npm view [<package-spec>] [<field>[.subfield]...]

aliases: info, show, v
```

## npx

执行本地或远程 npm 包的命令。

```sh
npx -- <pkg>[@<version>] [args...]
npx --package=<pkg>[@<version>] -- <cmd> [args...]
npx -c '<cmd> [args...]'
npx --package=foo -c '<cmd> [args...]'
```
