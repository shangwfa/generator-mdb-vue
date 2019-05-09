const path = require('path');
const chalk = require('chalk');
module.exports=function(context,answers){
    context.platform = answers.platform;
    context.isPC = answers.platform === 'pc';
    context.isAdmin = answers.isAdmin;
    context.isMobile = answers.platform ==='mobile';
    context.name = answers.name;
    context.description = answers.description;
    context.includeElementUI = answers.isAdmin?true:answers.includeElementUI;
    context.includePrerender = answers.includePrerender;
    context.isCDN = answers.isCDN;
    context.ieVersion = answers.ieVersion;

    context.log(chalk.green('platform: ', context.platform));
    context.log(chalk.green('isAdmin: ', context.isAdmin));
    context.log(chalk.green('name: ', context.name));
    context.log(chalk.green('description: ', context.description));
    context.log(chalk.green('includeElementUI: ', context.includeElementUI));
    context.log(chalk.green('includePrerender: ', context.includePrerender));
    context.log(chalk.green('isCDN: ', context.isCDN));
    context.log(chalk.green('ieVersion: ', context.ieVersion));
    
}