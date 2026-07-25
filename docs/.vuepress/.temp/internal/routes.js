export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/Documents/Default Project/namachoko-docs/docs/README.md"), meta: {"title":"首页"} }],
  ["/guide/arcade.html", { loader: () => import(/* webpackChunkName: "guide_arcade.html" */"F:/Documents/Default Project/namachoko-docs/docs/guide/arcade.md"), meta: {"title":"街机厅"} }],
  ["/guide/changelog.html", { loader: () => import(/* webpackChunkName: "guide_changelog.html" */"F:/Documents/Default Project/namachoko-docs/docs/guide/changelog.md"), meta: {"title":"更新日志"} }],
  ["/guide/checkin.html", { loader: () => import(/* webpackChunkName: "guide_checkin.html" */"F:/Documents/Default Project/namachoko-docs/docs/guide/checkin.md"), meta: {"title":"签到与资料"} }],
  ["/guide/feedback.html", { loader: () => import(/* webpackChunkName: "guide_feedback.html" */"F:/Documents/Default Project/namachoko-docs/docs/guide/feedback.md"), meta: {"title":"反馈"} }],
  ["/guide/greetings.html", { loader: () => import(/* webpackChunkName: "guide_greetings.html" */"F:/Documents/Default Project/namachoko-docs/docs/guide/greetings.md"), meta: {"title":"问候语管理"} }],
  ["/guide/relationship.html", { loader: () => import(/* webpackChunkName: "guide_relationship.html" */"F:/Documents/Default Project/namachoko-docs/docs/guide/relationship.md"), meta: {"title":"情侣与关系"} }],
  ["/guide/shop.html", { loader: () => import(/* webpackChunkName: "guide_shop.html" */"F:/Documents/Default Project/namachoko-docs/docs/guide/shop.md"), meta: {"title":"商店与背包"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/Documents/Default Project/namachoko-docs/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);
