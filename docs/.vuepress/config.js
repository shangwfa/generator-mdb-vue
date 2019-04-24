module.exports = {
    title: 'Hello generator-mdb-vue',
    description: '基于yoman的工程快速生成脚手架',
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'Languages',
            items: [
              { text: '中文', link: '/language/chinese' },
              { text: 'English', link: '/language/japanese' }
            ]
          }
        ],
        sidebar: {
          '/guide/':[
            '',
            'getting-started',
            'build-project',
            'build-page',
            'build-component'
          ]
        }
      }
  }