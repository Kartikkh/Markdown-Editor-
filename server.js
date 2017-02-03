var express = require('express');
var app = express();
//  var ejs = require('ejs');


app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

app.get('/',function (req,res) {
    res.render('page');
});

app.listen(3000,function (error) {
    if(error)throw error;
    console.log("server is running ");
});

