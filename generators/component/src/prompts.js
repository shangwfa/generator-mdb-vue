const path = require('path');
module.exports=[
    {
      type: 'list',
      name: 'type',
      message: 'What type of component do you want to create?',
      choices: [
        {
          name: 'base',
          value: 'base'
        },
        {
          name: 'business',
          value: 'business'
        },
        {
          name: 'page',
          value: 'page'
        }
      ]
    },
    {
      type: 'input',
      name: 'pageName',
      message: 'Specify a page name: ',
      default: 'defaultPage',
      when: answers => {
        return answers.type === 'page';
      }
    },
    {
      type: 'input',
      name: 'name',
      message: 'Specify a component name: ',
      default: 'defaultComponent'
    },
    {
      type: 'confirm',
      name: 'isFunction',
      message: 'Is a Function component ?',
      default: false
    },
    {
      type: 'confirm',
      name: 'isMapToStore',
      message: 'Would you like to include "mapToStore" in your component?',
      default: false,
      when: answers => {
        return !answers.isFunction;
      }
    },
    {
      type: 'confirm',
      name: 'isSlot',
      message: 'Is a Slot component ?',
      default: false
    },
    {
      type: 'list',
      name: 'slot',
      message: 'What type of slot do you want to create?',
      choices: [
        {
          name: 'default',
          value: 'default'
        },
        {
          name: 'scope',
          value: 'scope'
        },
      ],
      when:answers=>{
        return answers.isSlot;
      }
    },
    {
      type: 'confirm',
      name: 'isGlobalStyle',
      message: 'Would you like to include "globalStyle" in your component?',
      default: false
    }
];