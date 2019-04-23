const path = require('path');
module.exports=[
    {
      type: 'list',
      name: 'platform',
      message: 'Which platform would you like?',
      choices: [
        {
          name: 'PC',
          value: 'pc'
        },
        {
          name: 'Mobile',
          value: 'mobile'
        }
      ]
    },
    {
      type: 'confirm',
      name: 'isAdmin',
      message: 'Would you want to create a Admin project?',
      default: false,
      when: answers => {
        return answers.platform === 'pc';
      }
    },
    {
        type: 'input',
        name: 'name',
        message: 'Name of project:',
        default: path.basename(process.cwd())
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
        default: ''
      },
      {
        type: 'input',
        name: 'version',
        message: 'Version:',
        default: '1.0.0'
      },
      {
        type: 'confirm',
        name: 'useRouterHistory',
        message: 'Would you like to use "history" mode of vue-router?',
        default: false
      },
      {
        type: 'confirm',
        name: 'includeElementUI',
        message: 'Would you like to include "element-ui" in your project?',
        default: false,
        when: answers => {
          return answers.platform === 'pc';
        }
      },
      // 支持的IE的版本
      {
        type: 'list',
        name: 'ieVersion',
        message: 'Which "version of IE" would you like to support?',
        choices: [
          {
            name: 'IE 9',
            value: '9'
          },
          {
            name: 'IE 10',
            value: '10'
          },
          {
            name: 'IE 11 or higher',
            value: '11'
          }
        ],
        default: '11',
        when: answers => {
          return answers.platform === 'pc';
        }
      }
];