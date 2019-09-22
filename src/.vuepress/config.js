/*
 * @Author: Mr.Hope
 * @Date: 2019-07-05 00:14:26
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-22 14:39:44
 * @Description: Vuepress配置
 */

module.exports = {
  /** 部署目录 */
  base: process.env.VuePress_BASE || '/',

  /** 网站标题 */
  title: '姚欢的博客',

  /** 网站描述 */
  description: "姚欢的个人博客",

  /** 生成网站头部的标签 */
  head: [
    // 设置网站图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    // 设置网站作者
    ['meta', { name: 'author', content: '姚欢' }],

    // 移动端App体验
    ['meta', {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
    }],

    // pwa相关
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#46bd87' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icon/appleIcon152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#46bd87' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icon/msIcon144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],

  // host: '0.0.0.0',
  // port:8080,
  // temp: './dist/temp',

  /** 构建文件输出目录 */
  dest: 'dist',

  /** 多语言配置选项
   * 
   * 键名是该语言所属的子路径
   * 作为特例，默认语言可以使用 '/' 作为其路径。
   */
  locales: {
    /** 默认语言 */
    '/': {
      /** 设置为中文 */
      lang: 'zh-CN' // 将会被设置为 <html> 的 lang 属性
    }
  },

  extraWatchFiles: [
    '.vuepress/themeConfig.js'
  ],

  /** 使用的主题 */
  // theme: '@vuepress/theme-default',

  /** 主题配置 */
  themeConfig: require('./themeConfig'),

  /** markdown-it的配置 */
  markdown: {
    linenumber: true
  },

  /** 是否只支持常青树浏览器 */
  evergreen: true, // 设置为true后将不会兼容IE等老旧浏览器

  /** 插件选项 */
  plugins: [
    /** 自定义容器配置 */
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': '警告'
      }
    }],

    /** 更新时间插件 */
    ['@vuepress/last-updated', {
      /** 转换时间戳 */
      transformer: (timestamp, lang) => {
        const moment = require('moment');

        moment.locale(lang);
        return moment(timestamp).format('LLL');
      }
    }],

    /** PWA 插件 */
    ['@vuepress/pwa', {
      /** 是否注册Service Worker */
      serviceWorker: true,
      /** 是否弹出页面更新提示 */
      updatePopup: {
        '/': {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    }],

    /** 搜索插件 */
    ['@vuepress/search', {
      /** 搜索展示数量 */
      searchMaxSuggestions: 10
    }],

    /** 图片缩放插件 */
    ['@vuepress/medium-zoom', {
      /** 图片选择器 */
      // selector: 'img.zoom-custom-imgs',

      /** 设置选项 */
      options: {
        /** 缩放后图片的外间距 */
        margin: 16,
        /** 缩放背景 */
        background: '#fff',
        /** 关闭缩放需要滚动的像素数 */
        scrollOffset: 40
      }
    }],

    /** chunk命名 */
    ['named-chunks']
  ]
};
