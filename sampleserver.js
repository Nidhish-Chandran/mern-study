


var http=require('http')

var fs=require('fs')

var url=require('url')

http.createServer(function(req,res){

    var q = url.parse(req.url,true)
    console.log(q.pathname)

    if(q.pathname === '/'){
        fs.readFile('sample.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}else{
    if(q.pathname === '/login'){
        fs.readFile('html/login.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}
    else{
        if(q.pathname === '/loginaction'){
            res.writeHead(200,{'Content-Type':'text/html'})
            console.log(q.query.username)
            res.write('<h1>Welcome '+q.query.username+'</h1>')
            res.end()
        }
        else{
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write('Page not found')
            res.end()
        }
    }
}
}).listen(7000,function(){
    console.log('Server is running on port 7000')
})

   