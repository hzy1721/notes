# husky

Git hook 工具，可以在提交 commit 前执行一些操作：

- commit message 格式检查
- 代码检查
- 运行测试

## 安装

```sh
npm i -D husky
npm pkg set scripts.prepare="husky install"
npm run prepare
```

## 添加 hook

`npx husky add .husky/<hook> [cmd]`

- hook：[完整 Git Hooks 列表](https://git-scm.com/docs/githooks)
- cmd：可选，可以留空然后直接编辑文件 `.husky/<hook>`

```sh
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

### 测试 hook

在文件末尾添加 `exit 1` 可以中止 commit。

## 跳过 hook

```sh
git commit -m "test" --no-verify
git commit -m "test" -n
```
