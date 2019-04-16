const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const fs = require('fs');
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

    
}