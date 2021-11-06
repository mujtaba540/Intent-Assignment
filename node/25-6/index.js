var express=require('express');
var form=require('./controllers/form');
var db_handler=require('./controllers/db_handler');
var bodyParser = require('body-parser');
var session=require('./controllers/session');

var app=express();

app.set('view engine','ejs');
form(app);
// session(app);
 db_handler(app);
app.listen(2000);
console.log("listening at 2000")