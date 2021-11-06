var bodyParser=require('body-parser');
var data=[{item:"egg"},{item:"egkg"},{item:"milk"}]

var parser=bodyParser.urlencoded({extended:false});

module.exports=function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{data:data});
    });

    app.post('/todo',parser,function(req,res){
        data.push(req.body);
        res.json(data);
    

    });

    app.delete('/todo',function(req,res){

    });
}