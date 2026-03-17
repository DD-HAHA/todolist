#!/bin/bash

# FocusLog 发布脚本
# 用于打tag并推送触发GitHub Actions自动构建

set -e

VERSION=$1

if [ -z "$VERSION" ]; then
    echo "❌ 错误: 请指定版本号"
    echo ""
    echo "用法: ./release.sh <version>"
    echo "示例: ./release.sh 0.2.0"
    echo ""
    echo "版本号格式: v<主版本>.<次版本>.<修订版本>"
    echo "例如: v0.2.0, v0.2.1, v1.0.0"
    exit 1
fi

# 检查版本号格式
if [[ ! $VERSION =~ ^v?[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "❌ 错误: 版本号格式不正确"
    echo "正确格式: v0.1.2 或 0.1.2"
    exit 1
fi

# 如果没有v前缀，自动添加
if [[ ! $VERSION =~ ^v ]]; then
    VERSION="v$VERSION"
fi

echo "🚀 准备发布版本: $VERSION"
echo ""

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ 错误: 存在未提交的更改"
    echo "请先提交所有更改后再打tag"
    echo ""
    git status --short
    exit 1
fi

# 检查tag是否已存在
if git rev-parse "$VERSION" >/dev/null 2>&1; then
    echo "❌ 错误: Tag $VERSION 已存在"
    echo "如需重新打tag，请先删除: git tag -d $VERSION && git push --delete origin $VERSION"
    exit 1
fi

# 确认发布
echo "即将创建并推送tag: $VERSION"
read -p "确认继续? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ 发布已取消"
    exit 0
fi

# 创建tag
echo "🏷️  创建tag: $VERSION"
git tag -a "$VERSION" -m "Release $VERSION"

# 推送tag
echo "📤 推送tag到远程仓库..."
git push origin "$VERSION"

echo ""
echo "✅ 发布成功！"
echo ""
echo "🔗 查看GitHub Actions构建状态:"
echo "   https://github.com/$(git config --get remote.origin.url | sed 's/.*:\/\/github.com\///' | sed 's/\.git$//')/actions"
echo ""
echo "📦 构建完成后，Release将在以下地址创建:"
echo "   https://github.com/$(git config --get remote.origin.url | sed 's/.*:\/\/github.com\///' | sed 's/\.git$//')/releases/tag/$VERSION"