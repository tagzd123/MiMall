module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'https://www.imooc.com',
                chaneOrigin:true,
                pathRewrite:{
                    '/activity':'/activity'
                }
            }
        }
    }
}