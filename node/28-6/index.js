var express=require('express');
const db_handler = require('./controllers/db_handler');
const home = require('./controllers/home');
var session=require('./controllers/session');

var app=express();
app.set('view engine','ejs');
home(app);
// session(app);
db_handler(app)

console.log('listening on 2000')
app.listen(2000);