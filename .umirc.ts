import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置标题 这里是全局的默认页面标题，也可以在路由配置中在设置单独对应的页面标题title属性，两者不能兼容）
  title: '小沈爱学习',
  //配置网页Logo
  favicon: '/',
  //路由配置
  routes: [
    {
      path: '/',
      component: '@/pages/PageModule/firstPage/index',
      title: '欢迎！',
    },
    {
      path: '/homepage',
      component: '@/pages/PageModule/HomePage/index',
      title: '首页',
    },
    {
      path: '/myproject',
      component: '@/pages/PageModule/portfolio/index',
      title: '作品',
    },
    {
      path: '/article',
      component: '@/pages/PageModule/article/index',
      title: '文章',
    },
  ],
  // 配置 主题 ：修改 Less 变量
  // 因为umijs 集成了ant.design ui框架 使用到了Less 预编译 这里可以进行修改整体风格主题或者对应的Less变量值
  // 参考：https://ant.design/docs/react/customize-theme-cn
  theme: {
    '@primary-color': '#0092da',
  },
  // 开启 视图快速更新 只要写了这个属性对象就是开启的
  fastRefresh: {},
  targets: {
    ie: 11,
  },
  //如果需要本地浏览，需要注释下面三个history/outputPath/publicPath，如果上传到了github，网络上浏览，就需要
  //路由改成 hash路由
  history: { type: 'hash' },
  //umi的打包路径需要修改，因为gh-pages默认发布build文件下的内容，而umi默认打包目录是dist
  outputPath: 'build',
  //静态资源访问的路径需要改变，如果想本机打开index.html能直接访问，就改成'./'  如果发布到github/gitee上,直接改成发布的网址，要以 / 结尾 https://Shei04.github.io/
  publicPath: './',
  //在一些场景中，无法做服务端的 html fallback，即让每个路由都输出 index.html 的内容，那么就要做静态化  执行 umi build，会为每个路由输出一个 html 文件
  // exportStatic: {},

  //还没弄懂一下内容这里
  // exact: false, path: '/', component: '@/layouts/HomeLayout',
  /*
  base:'/admin/', // 设置路由前缀，通常用于部署到非根目录
  hash:true,// 配置是否让生成的文件包含 hash 哈希后缀，通常用于增量发布和避免浏览器加载缓存
  publicPath:'https://www.baidu.com/cdn/', //可以使用 CDN 部署，把 publicPath 的值设为 CDN 的前缀域名和地址值就可以(打包后的静态文件前缀就会加上这个cdn 连接地址
  outputPath:'bulid', // 修改打包后的文件命名.（注意：不允许设定为 src、public、pages、mock、config 等约定目录）
  history:{ // 路由模式配置
    type:'hash' // 路由url前面 带#号 （浏览器兼容好）
    type:'browser' // 路由url前面 不带#号 同时不配置也是默认选项（个别浏览器不兼容）
  },
  //开启按需加载
  dynamicImport: {
  },
  //开启按需加载后把 css 打包成一个文件
  chainWebpack(config) {
    config.optimization.splitChunks({
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'async',
          minChunks: 1,
          minSize: 0,
        }
      },
    });
  },
  //配置 externals 还能减小编译消耗
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'moment': 'window.moment',
    'antd': 'window.antd',
  },
  scripts: [
    'https://cdn.bootcdn.net/ajax/libs/react/17.0.1/umd/react.development.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.1/moment.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.2/antd.min.js',
  ],
  //样式生效必须写在styles里面
  styles: [ 'https://cdnjs.cloudflare.com/ajax/libs/antd/4.8.2/antd.min.css'],
  dva: {
  },
  antd: false,//启用后自动配置 babel-plugin-import实现antd按需加载  false 表示不开启  {} 表示开启
  //sass配置
  sass: {
  },
  request: {
    dataField: 'data',
  },
  targets: { //配置浏览器最低版本,比如兼容ie11
    ie: 11
  },
  hash: true,  //开启打包文件的hash值后缀,
  
  */
});
