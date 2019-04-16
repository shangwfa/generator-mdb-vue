const path = require('path');
const chalk = require('chalk');
module.exports=function(context,answers){
    context.platform = answers.platform;
    context.name = answers.name;
    context.description = answers.description;
    context.includeElementUI = answers.includeElementUI;
    context.ieVersion = answers.ieVersion;
    if (context.platform === 'pc') {
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
    }else{
        context.log('mobile:');
    }

    context.log(chalk.green('platform: ', context.platform));
    context.log(chalk.green('name: ', context.name));
    context.log(chalk.green('description: ', context.description));
    context.log(chalk.green('includeElementUI: ', context.includeElementUI));
}