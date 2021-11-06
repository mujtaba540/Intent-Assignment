var express=require("express");
var todo_controller=require("./controllers/todo_controller");

var app=express();
app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(express.json());

todo_controller(app);


app.listen("2000");
console.log('working at 2000');