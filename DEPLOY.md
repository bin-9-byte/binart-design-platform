# 部署文档

## 自动化部署原理
本项目使用 GitHub Actions 实现 CI/CD。
- 推送代码到 `main` 分支触发 Action
- Action 通过 SSH 连接到腾讯云服务器
- 执行服务器上的 `deploy.sh` 脚本进行拉取和构建

## 服务器部署脚本
服务器路径：`/www/wwwroot/binart.cn/deploy.sh`
内容备份：

```bash
#!/bin/bash
set -e

# 加载环境变量（确保能找到 node/npm）
source /etc/profile || true
export PATH=/www/server/nodejs/v24.13.0/bin:$PATH

# 指定使用专用的 GitHub Deploy Key（只读权限）
export GIT_SSH_COMMAND="ssh -i /root/.ssh/github_deploy -o StrictHostKeyChecking=no"

# 进入项目目录
cd /www/wwwroot/binart.cn/repo

# 解锁并清理旧构建产物（解决 dist/.user.ini 权限问题）
chattr -i dist/.user.ini || true
rm -rf dist

# 拉取最新代码并构建
git pull
npm ci
npm run build

# 恢复权限（可选）
# chown -R www:www dist
```

## 目录结构
- 站点根目录：`/www/wwwroot/binart.cn`
- 源码目录：`/www/wwwroot/binart.cn/repo`
- 构建产物：`/www/wwwroot/binart.cn/repo/dist`
- 部署脚本：`/www/wwwroot/binart.cn/deploy.sh`

## 常用命令
```bash
# 手动触发部署
/www/wwwroot/binart.cn/deploy.sh

# 查看部署日志（GitHub Actions 失败时在服务器查看）
# 可以在 deploy.sh 里加 >> deploy.log 2>&1
```
