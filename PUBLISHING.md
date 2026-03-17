# FocusLog 发布工具说明

FocusLog提供了完整的自动化发布工具，通过Git Tag触发GitHub Actions自动构建。

## 📁 发布相关文件

```
FocusLog/
├── .github/
│   └── workflows/
│       └── release.yml           # GitHub Actions工作流
├── release.sh                   # macOS/Linux发布脚本
├── release.bat                  # Windows发布脚本
├── RELEASE.md                   # 完整发布指南
├── QUICK_RELEASE.md             # 快速发布指南
└── RELEASE_EXAMPLES.md        # 发布示例文档
```

## 🎯 快速开始

### 1. 更新版本号

编辑以下文件中的版本号：
- `package.json`
- `src-tauri/Cargo.toml`  
- `src-tauri/tauri.conf.json`

### 2. 一键发布

**macOS/Linux:**
```bash
npm run release 0.2.0
```

**Windows:**
```cmd
npm run release:win 0.2.0
```

### 3. 等待构建

访问 GitHub Actions 查看构建状态：
```
https://github.com/你的用户名/focuslog/actions
```

## 🔧 发布脚本功能

### release.sh (macOS/Linux)

- ✅ 自动检查版本号格式
- ✅ 检查未提交的更改
- ✅ 检查tag是否已存在
- ✅ 交互式确认
- ✅ 自动添加v前缀
- ✅ 显示构建状态链接

**参数：**
```bash
./release.sh <version>
```

**示例：**
```bash
./release.sh 0.2.0      # v0.2.0
./release.sh v0.2.0     # v0.2.0
```

### release.bat (Windows)

提供与release.sh相同的功能，适配Windows命令行。

**用法：**
```cmd
release.bat 0.2.0
```

## ⚡ GitHub Actions 自动构建

### 触发条件

发布脚本推送tag时自动触发：
```bash
git push origin v*  # v开头的tag
```

### 构建矩阵

自动构建以下平台：
- macOS ARM64 (Apple Silicon)
- macOS Intel (x86_64)
- Windows (x64)

### 构建产物

每个平台的安装包：
- macOS: `.dmg` 文件
- Windows: `.nsis.zip` 安装程序

## 📚 文档导航

| 文档 | 用途 |
|------|------|
| [QUICK_RELEASE.md](./QUICK_RELEASE.md) | 快速发布参考，适合有经验的开发者 |
| [RELEASE.md](./RELEASE.md) | 完整发布指南，包含详细步骤和常见问题 |
| [RELEASE_EXAMPLES.md](./RELEASE_EXAMPLES.md) | 各种发布场景的示例代码和流程 |
| [本文件](./PUBLISHING.md) | 发布工具概述和索引 |

## 🔄 发布流程图

```
开始
  ↓
更新版本号
  ↓
提交代码
  ↓
运行发布脚本
  ↓
检查状态 ✓
  ↓
创建Git Tag
  ↓
推送Tag到GitHub
  ↓
GitHub Actions触发
  ↓
构建3个平台版本
  ↓
创建GitHub Release
  ↓
上传安装包
  ↓
发布完成 ✓
```

## 🎨 版本号规范

遵循语义化版本（Semantic Versioning）：

```
v<主版本>.<次版本>.<修订版本>

示例：
- v0.1.0  → 初始发布
- v0.2.0  → 新功能，向后兼容
- v0.2.1  → Bug修复
- v1.0.0  → 重大更新
```

## 🚨 注意事项

1. **版本号一致性**：确保所有文件中的版本号一致
2. **代码提交**：打tag前必须先提交所有更改
3. **tag唯一性**：避免重复的tag，如需删除请先清理
4. **测试验证**：发布前务必在本地充分测试
5. **构建监控**：及时查看Actions构建状态，处理失败情况

## 🔍 监控和调试

### 查看Actions日志

```bash
# 使用GitHub CLI
gh run view --log

# 查看特定tag的运行
gh run view --tag v0.2.0
```

### 本地调试

```bash
# 测试发布脚本但不推送
git tag -a v0.2.0-test -m "Test release"

# 验证tag是否创建成功
git tag -l
```

### 取消构建

如果发现错误需要停止构建：

```bash
gh run cancel
```

## 📞 获取帮助

遇到问题？查看：
1. [完整发布指南](./RELEASE.md) - 常见问题解答
2. [发布示例](./RELEASE_EXAMPLES.md) - 具体场景处理
3. GitHub Actions文档 - 官方文档

## 🎉 发布成功标志

确认以下内容表示发布成功：

- ✅ GitHub Actions 显示绿色 ✓
- ✅ Release 页面创建成功
- ✅ 安装包可以下载
- ✅ 应用安装后正常运行
- ✅ 版本号显示正确

---

📦 开始你的第一次发布：
```bash
npm run release 0.2.0
```