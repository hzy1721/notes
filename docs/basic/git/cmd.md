# Git 常用命令

```sh
# 更新主分支 main
git checkout main
git pull
# 创建新的开发分支
git checkout -b feat-XXX
# 提交代码
git add .
git commit -m "feat: XXX"
git push origin feat-XXX
# 修改当前提交
git commit --amend
# 不修改 message、时间等信息
git commit --amend --no-edit
# 修改后需要强制 push
git push origin feat-XXX -f
# rebase 用于同步主分支，保证最后合并时为 fast-forward
git rebase -i main
git rebase --continue
git rebase --abort
# 重置到指定 commit 并丢弃所有更改，默认 --soft 不丢弃更改
git reset --hard HEAD^
```
