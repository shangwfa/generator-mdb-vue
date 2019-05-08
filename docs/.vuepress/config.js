module.exports = {
    title: 'Hello generator-mdb-vue',
    description: '基于yoman的工程快速生成脚手架',
    markdown: {
      lineNumbers: true
    },
    head: [
      ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
      ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
      ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
  ],
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