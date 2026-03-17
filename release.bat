@echo off
setlocal enabledelayedexpansion

set VERSION=%1

if "%VERSION%"=="" (
    echo [31m错误[0m: 请指定版本号
    echo.
    echo 用法: release.bat ^<version^>
    echo 示例: release.bat 0.2.0
    echo.
    echo 版本号格式: v^<主版本^>.^<次版本^>.^<修订版本^>
    echo 例如: v0.2.0, v0.2.1, v1.0.0
    exit /b 1
)

echo VERSION | findstr /R "^v[0-9]\+\.[0-9]\+\.[0-9]\+$" >nul
if errorlevel 1 (
    echo VERSION | findstr /R "^[0-9]\+\.[0-9]\+\.[0-9]\+$" >nul
    if errorlevel 1 (
        echo [31m错误[0m: 版本号格式不正确
        echo 正确格式: v0.1.2 或 0.1.2
        exit /b 1
    ) else (
        set VERSION=v%VERSION%
    )
)

echo.
echo [32m🚀 准备发布版本: %VERSION%[0m
echo.

git status --porcelain | findstr /R "." >nul
if not errorlevel 1 (
    echo [31m错误[0m: 存在未提交的更改
    echo 请先提交所有更改后再打tag
    echo.
    git status --short
    exit /b 1
)

git tag -l "%VERSION%" | findstr /R "%VERSION%" >nul
if not errorlevel 1 (
    echo [31m错误[0m: Tag %VERSION% 已存在
    echo 如需重新打tag，请先删除: git tag -d %VERSION% ^&^& git push --delete origin %VERSION%
    exit /b 1
)

echo 即将创建并推送tag: %VERSION%
set /p confirm="确认继续? (y/N): "
if /i not "%confirm%"=="y" (
    echo [31m发布已取消[0m
    exit /b 0
)

echo.
echo [33m🏷️  创建tag: %VERSION%[0m
git tag -a "%VERSION%" -m "Release %VERSION%"

echo.
echo [32m📤 推送tag到远程仓库...[0m
git push origin "%VERSION%"

echo.
echo [32m✅ 发布成功！[0m
echo.

for /f "tokens=2 delims=/" %%i in ('git config --get remote.origin.url') do set REPO=%%i
for /f "tokens=2 delims=:" %%i in ('git config --get remote.origin.url') do set USER=%%i

echo [36m🔗 查看GitHub Actions构建状态:[0m
echo    https://github.com/%REPO%/actions
echo.
echo [36m📦 构建完成后，Release将在以下地址创建:[0m
echo    https://github.com/%REPO%/releases/tag/%VERSION%
echo.

pause