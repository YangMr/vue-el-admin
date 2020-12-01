module.exports = {
    //打包时的静态资源的路径
    publicPath : "./",
    //配置vue-cli的服务器
    devServer : {
        //自动打开浏览器
        open : true,
        //设置打开的端口号
        port : 7777,
        //关闭https协议
        https : false,
        //设置主机名
        host : "localhost"
    },
    //关闭eslint
    lintOnSave : false,
    //设置打包时不生成.map后缀类型的文件,提高打包的构建速度
    productionSourceMap : false
}