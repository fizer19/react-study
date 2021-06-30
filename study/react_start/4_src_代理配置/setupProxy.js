const proxy = require('http-proxy-middleware')
const { func } = require('prop-types')

module.exports = function(app) {
    app.use(
        proxy('/api1',{//遇见/api1前缀的请求，就会触发该代理配置
            target:'http://localhost:5000',//请求转发给代理
            changeDrigin: true,
            /* 
            changeDrigin: true,
            控制服务器接收到的请求头中Host字段的值（欺骗服务器，
            不加这个配置，服务器可以知道请求的真实来源，console.log('请求来自于',request.get('Host')); //localhost:3000
            加上后 console.log('请求来自于',request.get('Host')); //localhost:5000
            */
            pathRewrite: {'^/api1': ''}//重写请求路径
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeDrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    )
}