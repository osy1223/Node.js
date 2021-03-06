

const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

var mysql = require('mysql');
var pool = mysql.createPool({
    host : 'localhost',
    port : '3001',
    user : 'user',
    password : '0000',
    database : 'test'
});


app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('index.html')
})

app.get('/about', function(req, res){
    res.render('about.html')
})

app.get('/db', function(req, res){
    pool.getConnection(function (err, connection){
        if (err) throw err;
        
        connection.query('select * from test', function(error, results, fields){
            
            res.send(JSON.stringify(results));
            console.log('results', results);

            connection.release();

            if (error) throw error;
        });
    });
})