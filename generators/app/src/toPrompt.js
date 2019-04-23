const path = require('path');
const chalk = require('chalk');
module.exports=function(context,answers){
    context.platform = answers.platform;
    context.isPC = answers.platform === 'pc';
    context.isAdmin = answers.isAdmin;
    context.isMobile = answers.platform ==='mobile';
    context.name = answers.name;
    context.description = answers.description;
    context.includeElementUI = answers.includeElementUI;
    context.ieVersion = answers.ieVersion;
    if (context.isPC) {
        context.ieVersionSupport = '';
        switch (context.ieVersion) {
            case '9':
                context.ieVersionSupport = 'ie >= 9';
              break;
            case '10':
                context.ieVersionSupport = 'ie >= 10';
              break;
            default:
                context.ieVersionSupport = 'ie >= 11';
        }
        context.log('ieVersionSupport:',context.ieVersionSupport);
    }

    context.log(chalk.green('platform: ', context.platform));
    context.log(chalk.green('isAdmin: ', context.isAdmin));
    context.log(chalk.green('name: ', context.name));
    context.log(chalk.green('description: ', context.description));
    context.log(chalk.green('includeElementUI: ', context.includeElementUI));
    context.log(chalk.green('ieVersion: ', context.ieVersion));
    
}