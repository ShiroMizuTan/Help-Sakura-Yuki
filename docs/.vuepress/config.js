import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: 'Namachokoretomusu 指令文档',
  description: 'Namachokoretomusu QQ 机器人指令表',
  theme: defaultTheme({
    logo: null,
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '指令指南',
        children: [
          { text: '帮助与呼叫', link: '/guide/help' },
          { text: '签到与账号', link: '/guide/checkin' },
          { text: '街机厅', link: '/guide/arcade' },
          { text: '舞萌 DX', link: '/guide/maimai' },
          { text: 'Holodori', link: '/guide/holodori' },
          { text: '情侣与关系', link: '/guide/relationship' },
          { text: '群语录', link: '/guide/quotes' },
          { text: '图片', link: '/guide/image' },
          { text: '商店与背包', link: '/guide/shop' },
          { text: '问候语管理', link: '/guide/greetings' },
          { text: '反馈', link: '/guide/feedback' },
          { text: '更新日志', link: '/guide/changelog' },
        ],
      },
    ],
    sidebar: [
      { text: '介绍', link: '/' },
      {
        text: '基础功能',
        children: [
          '/guide/help',
          '/guide/checkin',
        ],
      },
      {
        text: '游戏查询',
        children: [
          '/guide/arcade',
          '/guide/maimai',
          '/guide/holodori',
        ],
      },
      {
        text: '社交互动',
        children: [
          '/guide/relationship',
          '/guide/quotes',
          '/guide/image',
        ],
      },
      {
        text: '其他功能',
        children: [
          '/guide/shop',
          '/guide/greetings',
          '/guide/feedback',
          '/guide/changelog',
        ],
      },
    ],
  }),
})
