module.exports= async function(context){
    copyTemplates(context);
}
const copyTemplates=(context)=>{
    let destinationPath = 'src/components/';
    switch(context.type){
        case "base":
            destinationPath +=`base/${context.name}.vue`
        break
        case "business":
            destinationPath +=`business/${context.name}.vue`
        break
        case "page":
            destinationPath =`src/pages/${context.pageName}/${context.name}.vue`
        break
    }
    
    let params={
        componentName: context.name,
        kebabCaseName:context.kebabCaseName,
        isMapToStore:context.isMapToStore,
        isGlobalStyle:context.isGlobalStyle,
        isDefaultSlot:context.slot==='default',
        isScopeSlot:context.slot==='scope'
    }
    context.log('params',params)
    context.fs.copyTpl(
        context.templatePath('Index.ejs'),
        context.destinationPath(destinationPath),
        params
    )

}
