const { spawn } = require('child_process');
const extend = require('deep-extend');
const mkdirp = require('mkdirp-promise')
const fs = require('fs-extra')


module.exports= async function(context){
    await buildMkdir(context);
    copyTemplates(context);
    extendPkgJson(context);
}
const buildMkdir= async (context)=>{
    let rootPath = context.destinationPath()+'/'+context.name;
    context.log('buildMkdir',context.destinationPath());
    await mkdirp(rootPath)
    context.destinationRoot(rootPath)
    context.rootPath = rootPath
    context.log('buildMkdir',context.destinationPath())
}
const copyTemplates=(context)=>{
    context.log('copyTemplates',context.destinationPath())
    copyDotFiles(context);
    context.fs.copy(
        context.templatePath(),
        context.destinationPath()
      );
}
const copyDotFiles=(context)=>{
    const dotFilesName=['.eslintrc.js','.gitignore','.browserslistrc'];
    spawn('cp', ['-r', context.templatePath('./.vscode'),context.destinationPath()]);
    dotFilesName.map((fileName=>{
        spawn('cp', ['-f', context.templatePath(`./${fileName}`),context.destinationPath()]);
    }))
}
const extendPkgJson=(context)=>{

    const pkg = context.fs.readJSON(context.templatePath('package.json'), {});
    console.log('extendPkgJson',pkg);
    extend(pkg,{
        name:context.name,
        description:context.description,
        version:context.version,
    })
    context.fs.writeJSON(context.destinationPath('package.json'), pkg);
}