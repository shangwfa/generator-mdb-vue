const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');
module.exports=function(context,answers){
    context.name = answers.name;
    context.kebabCaseName =_.kebabCase(answers.name);
    context.isMapToStore = answers.isMapToStore;
    context.isGlobalStyle = answers.isGlobalStyle;

    context.log(chalk.green('name: ', context.name));
    context.log(chalk.green('isMapToStore: ', context.isMapToStore));
    context.log(chalk.green('isGlobalStyle: ', context.isGlobalStyle));
}