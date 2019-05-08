const fs = require('fs');
const { s } = require('child_process');
function shspawn(command) {
  spawn('sh', ['-c', command], { stdio: 'inherit' });
} 
module.exports=function(context){
    context.log('rootPath',context.name); 
}