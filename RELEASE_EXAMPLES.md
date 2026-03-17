# 发布示例

本文档展示使用发布工具的完整流程示例。

## 示例1: 发布新功能版本 v0.2.0

### 步骤1: 更新版本号

编辑以下文件，将版本号从 `0.1.2` 更新为 `0.2.0`：

```bash
# 编辑 package.json
{
  "version": "0.2.0"  # 修改这里
}

# 编辑 src-tauri/Cargo.toml
[package]
version = "0.2.0"  # 修改这里

# 编辑 src-tauri/tauri.conf.json
{
  "version": "0.2.0"  # 修改这里
}
```

### 步骤2: 提交更改

```bash
git add .
git commit -m "chore: bump version to 0.2.0"
git push
```

### 步骤3: 运行发布脚本

**macOS/Linux:**
```bash
npm run release 0.2.0
# 或
./release.sh 0.2.0
```

**Windows:**
```cmd
npm run release:win 0.2.0
# 或
release.bat 0.2.0
```

### 步骤4: 查看构建状态

访问 GitHub Actions 页面：
```
https://github.com/你的用户名/focuslog/actions
```

### 步骤5: 下载发布版本

构建完成后，访问：
```
https://github.com/你的用户名/focuslog/releases/tag/v0.2.0
```

## 示例2: 发布修复版本 v0.2.1

假设发现了一个Bug需要快速修复：

```bash
# 1. 修复bug
git add .
git commit -m "fix: resolve theme switching bug"
git push

# 2. 更新版本号并提交
# 编辑版本号文件，改为 0.2.1
git add .
git commit -m "chore: bump version to 0.2.1"
git push

# 3. 发布
npm run release 0.2.1
```

## 示例3: 重新发布版本

如果发现已发布的版本有问题：

```bash
# 1. 删除本地tag
git tag -d v0.2.0

# 2. 删除远程tag
git push origin --delete v0.2.0

# 3. 修复问题
# ... 修改代码并提交 ...

# 4. 重新打tag和推送
git tag -a v0.2.0 -m "Release v0.2.0 (fixed)"
git push origin v0.2.0
```

## 示例4: 预发布（Pre-release）

发布预览版本给测试者：

```bash
# 使用 alpha/beta/rc 标记
git tag -a v0.3.0-alpha.1 -m "Alpha release v0.3.0-alpha.1"
git push origin v0.3.0-alpha.1
```

然后在 GitHub Release 页面将其标记为 Pre-release。

## 常见发布场景

### 场景A: 首次发布

```bash
# 确保是 v0.1.0
npm run release 0.1.0
```

### 场景B: 每周例行发布

```bash
# 每周五发布
npm run release $(date +%Y.%m.%d)
# 或使用语义化版本
npm run release 0.$(date +%W).0
```

### 场景C: 紧急热修复

```bash
# 快速修复bug，不修改主版本号
npm run release 0.2.1  # 修复版本
```

### 场景D: 重大版本更新

```bash
# 大功能上线，升级主版本号
npm run release 1.0.0
```

## 验证步骤

发布前务必验证：

```bash
# 1. 本地构建测试
npm run build

# 2. Tauri应用测试
npm run tauri build

# 3. 检查版本号一致性
cat package.json | grep version
cat src-tauri/Cargo.toml | grep version
cat src-tauri/tauri.conf.json | grep version

# 4. 确认没有未提交的更改
git status

# 5. 运行测试
npm test  # 如果有测试
```

## GitHub Actions 构建监控

### 查看实时日志

```bash
# 使用gh CLI查看日志
gh run watch

# 或在浏览器中查看
gh run list --workflow=release.yml
```

### 下载构建日志

```bash
# 下载最近一次失败的日志
gh run download --name failed

# 下载特定tag的日志
gh run download --tag v0.2.0
```

### 取消正在运行的构建

```bash
# 取消最新的运行
gh run cancel

# 取消特定运行
gh run cancel <run-id>
```

## 发布后检查清单

✅ GitHub Actions 构建成功  
✅ Release 页面已创建  
✅ 所有平台的安装包上传成功  
✅ 可以下载并安装应用  
✅ 应用在本地正常运行  
✅ 新功能正常工作  
✅ 版本号正确显示  

## 故障排除

### 问题: tag推送失败

```bash
# 检查远程仓库URL
git remote -v

# 确保有推送权限
git push origin v0.2.0 --dry-run
```

### 问题: Actions构建超时

```bash
# 在 release.yml 中增加timeout
- uses: tauri-apps/tauri-action@v0
  timeout-minutes: 60
```

### 问题: Release描述需要更新

```bash
# 使用gh CLI编辑Release
gh release edit v0.2.0 \
  --notes "更新内容：\n- 新增功能A\n- 修复bugB\n- 优化性能C"
```

---

📚 更多信息：[RELEASE.md](./RELEASE.md)