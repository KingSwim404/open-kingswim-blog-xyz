# open-kingswim-blog-xyz

  本人的简易个人网站部分代码开源。

  个人网址：www.kingswim.xyz

  界面很简易，主要用于学习Vue的使用：

- 路由（懒加载）
- 懒加载图片
- 部分组件独立打包
- 项目模块大小分析
- PostCss的多种插件用法

另外，强烈推荐学习并使用PostCss而不是Less、Sass。

虽然 @apply 还有些瑕疵不支持导入在全局样式里面定义的样式集，以后应该会支持。

## 项目启动

```
yarn install  或者  npm  install
```

### 开发模式——开启热更新

```
yarn run dev  或者  npm run dev 
```

### 打包生成发布代码

```
yarn run pro  或者  npm run pro
```

###  通过FTP发布代码到服务器 （需要配置FTP相关数据，具体如何配置见：https://github.com/pantoffski/vue-cli-plugin-ftp-deploy）

```
yarn run deploy  或者  npm run deploy
```

### 打包代码同时FTP发布到服务器

```
yarn run dep   或者  npm run dep
```

### 检测包中各个模块的大小

```
yarn run ana  或者  npm run ana
```

### 具体使用到什么库和配置情况见如下文件：

package.json / vue.config.js


