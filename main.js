var http = require('http')
var request = require('request');

// 这里填你的replit应用的url，多个url用逗号隔开
let replit_app_urls = ["https://luoyifan.cf","https://luoyifan.gq","https://luoyifan.ml","https://luofujia.ga","https://luofujia.cf","https://qq.car-care.cn","https://ee.car-care.cn","https://luoyifan.tk","https://luofujia.gq","https://luofujia.ml","https://luofujia.fun","https://car-care.cn","https://yy.luofujia.fun"]

var port = 4000
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain'})
    response.end('proccess to keep replit application alive is running !\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)

function head(url) {
    request({
        url: url,
        method: "HEAD"
    }, function (error, response, body) {
        if (!error) {
            console.log("地址--" + url + "发包成功！")
            //console.log("statusCode: "+response.statusCode)
            //console.log(response.headers)
        } else
            console.log("请求错误: " + error)
    });
}

function keepalive() {
    for (const url of replit_app_urls) {
        head(url)
    }
}

setInterval(keepalive, 20000);

