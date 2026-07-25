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
      { text: '签到与资料', link: '/guide/checkin' },
      { text: '问候语管理', link: '/guide/greetings' },
      { text: '街机厅', link: '/guide/arcade' },
      { text: '反馈', link: '/guide/feedback' },
      { text: '更新日志', link: '/guide/changelog' },
      { text: '商店与背包', link: '/guide/shop' },
      { text: '情侣与关系', link: '/guide/relationship' },
    ],
    sidebar: [
      { text: '介绍', link: '/' },
      {
        text: '指令详解',
        children: [
          '/guide/checkin',
          '/guide/greetings',
          '/guide/arcade',
          '/guide/feedback',
          '/guide/changelog',
          '/guide/shop',
          '/guide/relationship',
        ],
      },
    ],
  }),
})
