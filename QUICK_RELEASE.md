# 🚀 快速发布指南

## 一键发布（推荐）

### Linux/macOS
```bash
npm run release 0.2.0
```

### Windows
```bash
npm run release:win 0.2.0
```

## 详细文档

完整的发布指南请查看：[RELEASE.md](./RELEASE.md)

## 发布流程

1. 更新版本号（`package.json`, `src-tauri/Cargo.toml`, `src-tauri/tauri.conf.json`）
2. 提交代码更改
3. 运行发布脚本
4. 等待GitHub Actions自动构建
5. 构建完成后在GitHub Release页面下载安装包

## 版本命名规范

```
v<主版本>.<次版本>.<修订版本>

例如: v0.2.0
```

## 查看构建状态

访问：`https://github.com/你的用户名/focuslog/actions`