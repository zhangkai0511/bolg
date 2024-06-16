import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/bolg/',
  title: "学习笔记",
  description: "A VitePress Site",
  markdown: {
    lineNumbers: true
  },
  
  themeConfig: {
    logo: '/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Python', link: '/python/' }
    ],

    sidebar: [
      {
        text: 'Python',
        items: [
          { text: 'Python基础', link: '/python/index' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      level: [2,6],
      label: '页面导航'
    }
  }
})
