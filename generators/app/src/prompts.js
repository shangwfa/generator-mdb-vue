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
        name: 'isAdmin',
        message: 'Would you want to create a Admin project?',
        default: false,
        when: answers => {
          return answers.platform === 'pc';
        }
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
      {
        type: 'confirm',
        name: 'includePrerender',
        message: 'Would you like to use prerender-spa-plugin?',
        default: false,
      }
];