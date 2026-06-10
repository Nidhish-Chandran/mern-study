const express = require('express')

const app = express()

const path = require('path')

app.use(express.urlencoded({ extended: true }));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'signin.html'))
})

// app.get('/signup',function(req,res){
//     res.sendFile(path.join(__dirname,'sample.html'))
// })


// app.get('/signup', function(req, res) {
//     console.log(req.query.email);
//     console.log(req.query.password);

//     res.send(req.query.email+'Data received'+req.query.password);
// });

app.get('/signup', function(req, res) {
    res.send(`
        <html>
        <body>
            <h1>User Details</h1>
            <h2>Email: ${req.query.email}</h2>
            <h2>Password: ${req.query.password}</h2>
        </body>
        </html>
    `);
});

app.listen(3000,function(){
    console.log('Server is running on port 3000')
})

