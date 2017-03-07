# webpack工程化
``` bash
# clone demo
$ git clone https://github.com/hzzly/webpack.git

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run watch

```
### 一、webpack是什么
>webpack is a module bundler. webpack takes modules with dependencies and generates static assets representing those modules

webpack 是一个模块打包工具，输入为包含依赖关系的模块集，输出为打包合并的前端静态资源。在上一节的前端工程化中，已经介绍过，webpack 是同时支持 AMD 和 CommonJs 的模块定义方式，不仅如此，webpack 可以将任何前端资源视为模块，如 css，图片，文本。

### 二、为什么要使用它

在 webpack 出现之前，已经有了一些打包工具，如 Browserify、grunt、gulp... 这些打包工具工具功能单一，只能完成特定的任务，然而 web 前端工程是复杂的，一个 webapp 对于业务代码的要求可能有：
> * 代码可以分块，实现按需加载
> * 首屏加载时间要尽量减少
> * 需要集成一些第三方库

webpack 的出现正式为了解决这些问题，在 webpack 中，提供了一下这些功能：

**1.代码分块：** webpack 有两种类型的模块依赖，一种是同步的，一种是异步的。在打包的过程中可以将代码输出为代码块（chunk），代码块可以实现按需加载。 异步加载的代码块通过分割点（spliting point）来确定。
**2.Loaders：** Webpack 本身只会处理 Javascript，为了实现将其他资源也定义为模块，并转化为 Javascript， Webpack 定义 loaders , 不同的 loader 可以将对应的资源转化为 Javascript 模块。
**3.智能的模块解析：** webpack 可以很容易将第三方库转化为模块集成到项目代码中，模块的依赖可以用表达式的方式（这在其他打包工具中是没有支持的），这种模块依赖叫做动态模块依赖。
**4.插件系统：** webpack 的可定制化在于其插件系统，其本身的很多功能也是通过插件的方式实现，插件系统形成了 webpack 的生态，是的可以使用很多开源的第三方插件。

### 三、webpack 核心思想
**1.万物皆模块：** 在 webpack 的世界中，除了 Javascript，其他任何资源都可以当做模块的方式引用。
**2.按需加载：** webapp 的优化关键在于代码体积，当应用体积增大，实现代码的按需加载是毕需，这也是 webpack 出现的根本原因。
**3.可定制化：** 任何一个工具都不可能解决所有问题，提供解决方案才是最可行的，webpack 基于可定制化的理念构建，通过插件系统，配置文件，可以实现大型项目的定制需求。

### 四、安装配置

在此之前你应该已经安装了 node.js.

全局安装webapck或webpack-dev-server(开启一个本地服务)
```Node
$ npm install webpack -g
$ npm install webpack-dev-server -g
```

在项目中安装webpack和webpack-dev-server
```Node
$ npm install webpack --save-dev
$ npm install webpack-dev-server --save-dev
```

**webpack使用**
```JavaScript
//name.js
let name = 'hzzly'
export default name

//index.js
import name from './name'
document.getElementById('app').textContent = `hello~${name}`
```
1.命令行的使用
```Node
$ webpack src/index.js dist/bundle.js
```
> 语法：webpack 要打包的文件 打包输出的文件

2.配置文件的使用
在项目目录下创建 webpack.config.js如下(简单的配置)：
```JavaScript
var webpack = require('webpack')
module.exports = {
  entry: './src/index.js',  //入口
  output: {
    path: './dist/',    //输出路径
    filename: 'bundle.js'   //输出文件名
  },
  module: {
	loaders: [
	  {
		test: /\.js[x]?$/,
	exclude: /node_modules/,
	loader: 'babel-loader',  //处理.js或.jsx文件loader
	query: {
	  presets: ['env']
	}
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"   //处理.css文件loader
      },
      {
	test: /\.(png|jpg)$/,
		loader: 'url-loader?limit=8192'    //处理图片loader
	  }
	]
  }
}
```
执行：
```Node
$ webpack
//或开启本地服务器并实时监听文件变化
$ webpack-dev-server --inline --colors --hot
```

**项目地址：** https://github.com/hzzly/webpack
欢迎大家的star啦~
