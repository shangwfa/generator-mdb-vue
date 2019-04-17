const fs = require('fs');
const { spawn } = require('child_process');
module.exports=function(){
    if (!fs.existsSync('.git')) {
        spawn('git', ['init']);
      } 
}