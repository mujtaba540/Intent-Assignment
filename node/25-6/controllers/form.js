module.exports=(function(app){

    app.get('/hello',function(req,res){
        res.render('form',{title:'FORM'});
    })
   
    
});