const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { spawn } = require('child_process');
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

    configuring(){
        proxy.configuring(this);
    }

    async writing() {
        proxy.writing(this);
    }

    install() {
        spawn('cd',[this.name]);
        this.yarnInstall();
    }

    end() {
        
        spawn('yarn',['serve']);
        this.log(chalk.green('Construction completed!'));
    }
    
}