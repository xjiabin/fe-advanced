const blog = require('./routers/blog')
const question = require('./routers/question')

module.exports = {
  title: '前端进阶',
  description: '记录前端知识点与面试题',
  base: '/fe-advanced/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '进阶·博文', link: '/blog/' },
      { text: '每日一题', link: '/question/' },
    ],
    sidebar: {
      '/blog/': blog,
      '/question/': question
    }
  }
}
