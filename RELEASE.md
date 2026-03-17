# FocusLog 发布指南

本文档介绍如何通过打tag触发GitHub Actions自动构建发布FocusLog。

## 📋 发布前检查清单

在发布新版本之前，请确保：

- [ ] 所有代码更改已提交
- [ ] 版本号已在以下文件中更新：
  - `package.json` 中的 `version` 字段
  - `src-tauri/Cargo.toml` 中的 `version` 字段
  - `src-tauri/tauri.conf.json` 中的 `version` 字段
- [ ] 所有功能测试通过
- [ ] 项目在本地可以正常构建和运行

## 🚀 快速发布

使用提供的发布脚本（推荐）：

```bash
./release.sh <version>
```

**示例：**
```bash
./release.sh 0.2.0    # 自动添加v前缀
./release.sh v0.2.0   # 使用完整tag名称
```

## 🏷️  手动发布

如果你想手动打tag和推送，请按以下步骤操作：

### 1. 更新版本号

```bash
# 编辑版本号文件
vim package.json
vim src-tauri/Cargo.toml
vim src-tauri/tauri.conf.json
```

### 2. 提交更改

```bash
git add .
git commit -m "chore: bump version to 0.2.0"
git push
```

### 3. 打tag

```bash
# 创建带注释的tag
git tag -a v0.2.0 -m "Release v0.2.0"

# 或者创建轻量级tag
git tag v0.2.0
```

### 4. 推送tag到远程仓库

```bash
# 只推送tag
git push origin v0.2.0

# 或者推送所有tags
git push origin --tags
```

## ⚡ GitHub Actions 自动构建

### 触发条件

GitHub Actions会在以下情况自动触发构建：

1. **Tag推送**（主要方式）
   ```bash
   git push origin v*  # 推送以v开头的tag
   ```

2. **手动触发**
   - 访问 GitHub仓库的 Actions 页面
   - 选择 "Release" workflow
   - 点击 "Run workflow" 按钮

### 构建流程

GitHub Actions将自动执行以下操作：

1. **检出代码**
   ```yaml
   - uses: actions/checkout@v4
   ```

2. **设置Node.js环境**
   ```yaml
   - uses: actions/setup-node@v4
     with:
       node-version: 20
   ```

3. **安装Rust工具链**
   ```yaml
   - uses: dtolnay/rust-toolchain@stable
   ```

4. **安装依赖**
   ```bash
   npm install
   ```

5. **构建Tauri应用**
   - macOS ARM64 (Apple Silicon)
   - macOS Intel (x86_64)
   - Windows (x64)

6. **创建GitHub Release**
   - 自动上传构建产物
   - 创建Release页面
   - 标记为草稿（可手动发布）

### 构建产物

构建成功后，Release页面将包含以下安装包：

- `FocusLog_<version>_aarch64.dmg` - macOS ARM64
- `FocusLog_<version>_x64.dmg` - macOS Intel
- `FocusLog_<version>_x64-setup.nsis.zip` - Windows

## 🔍 查看构建状态

### 1. GitHub Actions页面

访问仓库的Actions页面查看实时构建状态：

```
https://github.com/YOUR_USERNAME/focuslog/actions
```

### 2. 查看特定tag的构建

```
https://github.com/YOUR_USERNAME/focuslog/actions/workflows/release.yml
```

### 3. 构建完成后查看Release

```
https://github.com/YOUR_USERNAME/focuslog/releases/tag/v0.2.0
```

## 🛠️ 版本号规则

遵循语义化版本（Semantic Versioning）：

```
v<主版本>.<次版本>.<修订版本>

示例:
- v0.1.0 - 初始版本
- v0.2.0 - 新功能，向后兼容
- v0.2.1 - Bug修复
- v1.0.0 - 重大更新，可能不兼容
```

## ⚠️ 常见问题

### Q: 如何删除已发布的tag？

```bash
# 删除本地tag
git tag -d v0.2.0

# 删除远程tag
git push origin --delete v0.2.0

# 重新打tag
git tag -a v0.2.0 -m "Release v0.2.0"
git push origin v0.2.0
```

### Q: 如何查看所有tags？

```bash
# 查看所有tags
git tag

# 查看包含注释的tags
git tag -n9

# 按日期排序查看tags
git tag --sort=-version:refname
```

### Q: 如何测试tag是否已推送到远程？

```bash
# 查看远程tags
git ls-remote --tags origin

# 或使用git show
git show v0.2.0
```

### Q: 构建失败怎么办？

1. 查看Actions页面的详细日志
2. 检查版本号是否一致
3. 确认本地可以正常构建
4. 修复问题后，删除tag重新发布

### Q: Release创建为草稿状态？

GitHub Actions默认创建草稿Release。发布时：

1. 访问Release页面
2. 找到对应的Release
3. 点击"Edit release"
4. 取消"Set as a pre-release"或直接发布
5. 点击"Update release"

## 📝 提交信息规范

建议使用以下前缀：

- `chore:` - 版本更新、配置更改
- `feat:` - 新功能
- `fix:` - Bug修复
- `docs:` - 文档更新
- `style:` - 代码格式调整
- `refactor:` - 代码重构
- `test:` - 测试相关

**示例：**
```bash
git commit -m "chore: bump version to 0.2.0"
git commit -m "feat: add WebDAV auto backup support"
git commit -m "fix: resolve theme switching issue"
```

## 🎉 发布检查清单

发布完成后，请确认：

- [ ] GitHub Actions构建成功（绿色✅）
- [ ] Release页面已创建
- [ ] 所有平台的安装包都上传成功
- [ ] Release描述正确
- [ ] 可以下载并安装应用
- [ ] 新版本在本地可以正常运行
- [ ] 所有新功能正常工作

---

📚 相关文档：
- [GitHub Actions文档](https://docs.github.com/en/actions)
- [Tauri发布指南](https://tauri.app/v1/guides/distribution/updating)
- [语义化版本](https://semver.org/lang/zh-CN/)