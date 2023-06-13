# Kot

🌏 [English](https://github.com/Kori000/kot/blob/main/README.md)

## 快速开始

```bash
# 克隆项目
git clone https://github.com/Kori000/kot.git

# 进入目录
cd kot

# 安装依赖
yarn

# 开发模式
yarn dev
```

## 特性

1. 网站 指定 icon + safari 浏览器最近浏览区的 指定 icon
2. 集成 tailwindcss
3. 已创建 context 上下文提供简单的全局状态管理
4. 已创建 utils, 内置简单工具:

   - [判断是否为 Safari 浏览器](https://github.com/Kori000/kot/tree/main/src/utils/IsSafari.jsx)

   - [判断网络是否为中国大陆](https://github.com/Kori000/kot/tree/main/src/utils/IsZh.jsx)

   - [回到顶部](https://github.com/Kori000/kot/tree/main/src/utils/UpToTop.jsx)

   - [格式化地址](https://github.com/Kori000/kot/tree/main/src/utils/ShortAddress.jsx)

5. 已创建 hooks:

   - [倒计时](https://github.com/Kori000/kot/tree/main/src/hooks/useCountdown.jsx)

   - [判断视口是否小于指定宽度](https://github.com/Kori000/kot/tree/main/src/hooks/useLessWidth.jsx)

   - [判断视口是否同时小于指定宽度和高度](https://github.com/Kori000/kot/tree/main/src/hooks/useMonitor.jsx)

   - [axios 网络请求器](https://github.com/Kori000/kot/tree/main/src/hooks/useRequest.jsx)

   - [自定义 antdMessage 弹窗](https://github.com/Kori000/kot/tree/main/src/hooks/useAntdCustomMessage.jsx)

6. 已创建 BANPage 页面: 提示当前区域不支持访问
7. 已配置默认字体和 tailwindcss 基础配置
8. 已集成路由
9. 已配置 viteconfig
10. 已配置 404 页面
11. 已集成 国际化配置

- 可以在项目初期 执行 **remove-i18n** 命令移除 国际化

```bash
yarn remove-i18n
```

12. 已集成 Redux

- @reduxjs/toolkit
- react-redux
- redux
