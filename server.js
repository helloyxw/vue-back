let http = require('http')

let users = [
    {id: 1, name: 'yxw1'},
    {id: 2, name: 'yxw2'},
    {id: 3, name: 'yxw3'}
]

let server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if(req.url === '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end('Not Found')
    }
})
server.listen(3000, () => {
    console.log('后端API接口服务启动在3000端口上了')
})