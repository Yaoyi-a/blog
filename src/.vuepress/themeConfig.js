/*
 * @Author: Mr.Hope
 * @Date: 2019-09-20 19:39:33
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-22 14:19:37
 * @Description: 主题配置文件
 */

module.exports = {
  /** 头部导航栏的配置 */
  nav: [
    { text: '主页', link: '/', icon: 'homefill' },
    { text: '笔记心得', link: '/note/', icon: 'note' },
    { text: '个人空间', link: 'https://user.qzone.qq.com/158737832/main' },
    { text: 'u校园', link: 'https://u.unipus.cn' }
  ],

  /** 侧边栏配置 */
  sidebar: {
    // fallback
    '/': [
      '',       /* / */
      'note/'   /* /note/ */
    ]
  },

  /** 侧边栏标题显示深度，0-2 */
  sidebarDepth: 2,

  /** 语言设置 */
  locales: {
    /** 默认语言 */
    '/': {
      lang: 'zh-CN',
      selectText: '选择语言',
      lastUpdated: '上次编辑时间',
      label: '简体中文'
    }
  },

  /** repo地址 */
  repo: 'https://github.com/yaoyi-a/blog',

  /** 文档目录 */
  docsDir: 'src',

  /** 自定义仓库链接文字 */
  repoLabel: 'Github',

  /** 开启编辑此页链接 */
  editLinks: true, // 默认是 false, 设置为 true 来启用

  /** 编辑此页链接提示文字 */
  editLinkText: '在 GitHub 上编辑此页' // 默认为 "Edit this page"
};
