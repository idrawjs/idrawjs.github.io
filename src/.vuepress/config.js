module.exports = {
  base: '/',
  title: 'iDraw.js',
  description: 'A JavaScript Framework for Drawing on web',
  locales: {
    '/': {
      lang: 'English', 
      title: 'iDraw.js',
      description: 'iDraw.js A simple JavaScript framework for Drawing on the web',
    },
    '/index-zh': {
      lang: '中文',
      title: 'iDraw.js',
      description: 'iDraw.js 一个前端画图JavaScript框架',
    },
  },
  themeConfig: {
    nav: [],
    repo: 'idrawjs/idraw',
    docsRepo: 'idrawjs/idraw',
    locales: {
      '/': {
        path: '/index.md', 
      },
      '/index-zh': {
        path: '/index-zh.md', 
      }
    }
  },
}