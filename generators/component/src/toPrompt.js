const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');
module.exports=function(context,answers){
    context.type = answers.type;
    context.name = answers.name;
    context.kebabCaseName =_.kebabCase(answers.name);
    context.isFunction = answers.isFunction;
    context.isMapToStore = answers.isMapToStore;
    context.isGlobalStyle = answers.isGlobalStyle;
    context.isSlot = answers.isSlot;
    context.slot = answers.slot;

    context.log(chalk.green('type: ', context.type));
    context.log(chalk.green('name: ', context.name));
    context.log(chalk.green('isFunction: ', context.isFunction));
    context.log(chalk.green('isMapToStore: ', context.isMapToStore));
    context.log(chalk.green('isGlobalStyle: ', context.isGlobalStyle));
    context.log(chalk.green('isSlot: ', context.isSlot));
    context.log(chalk.green('scope: ', context.slot));
    
}