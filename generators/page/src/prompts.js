const path = require('path');
module.exports=[
    {
      type: 'input',
      name: 'name',
      message: 'Specify a page name: ',
      default: 'defaultPage'
    },
    {
      type: 'confirm',
      name: 'isMapToStore',
      message: 'Would you like to include "mapToStore" in your page?',
      default: false
    },
    {
      type: 'confirm',
      name: 'isGlobalStyle',
      message: 'Would you like to include "globalStyle" in your page?',
      default: false
    }
];