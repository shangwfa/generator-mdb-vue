const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const proxy = require('./src/index')

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
      }
      
    initializing() {
        this.log(yosay(`Welcome to the shining ${chalk.cyan('generator-mdb-vue')} generator!`));
    }

    prompting() {
       return  this.prompt(proxy.prompts).then(answers=> proxy.toPrompt(this,answers));
    }

    async writing() {
        proxy.writing(this);
    }
    
    end() {
        this.log(chalk.green('Construction completed!'));
    }
    
}