const _ = require('lodash');
module.exports= async function(context){
    copyTemplates(context);
}
const copyTemplates=(context)=>{
    let destinationPath = `src/pages/${_.camelCase(context.name)}/${context.name}.vue`;
    let params={
        pageName: context.name,
        kebabCaseName:context.kebabCaseName,
        isMapToStore:context.isMapToStore,
        isGlobalStyle:context.isGlobalStyle
    }
    context.log('params',params)
    context.fs.copyTpl(
        context.templatePath('Index.ejs'),
        context.destinationPath(destinationPath),
        params
    )

}
