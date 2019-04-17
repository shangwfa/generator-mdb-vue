const { spawn } = require('child_process');
const extend = require('deep-extend');
const mkdirp = require('mkdirp-promise')


module.exports= async function(context){
    buildMkdir(context);
    copyTemplates(context);
    extendPkgJson(context);
}
const buildMkdir= async (context)=>{
    let rootPath = context.destinationPath()+'/'+context.name;
    context.log('buildMkdir',rootPath);
    await mkdirp(rootPath)
    context.destinationRoot(rootPath)
    context.rootPath = rootPath
    context.log('buildMkdir',context.destinationPath())
}
const copyTemplates=(context)=>{
    context.log('copyTemplates',context.destinationPath())
    spawn('cp', ['-r', context.templatePath('./.vscode'),context.destinationPath()]);
    context.fs.copy(
        context.templatePath(),
        context.destinationPath()
      );
}
const extendPkgJson=(context)=>{
    const pkg = context.fs.readJSON(context.destinationPath('package.json'), {});
    extend(pkg,{
        name:context.name,
        description:context.description,
        version:context.version,
    })
    context.fs.writeJSON(context.destinationPath('package.json'), pkg);
}