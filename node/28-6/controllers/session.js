var session=require('express-session');
var body_parser=require('body-parser');
const { compose } = require('async');
var cookiePaarser=require('cookie-parser');

module.exports=(app)=>{
    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended:false}));
    app.use(cookiePaarser());
     app.use(session({secret:'123',saveUninitialized:false,resave:false}))

     function validate(req,res,next){
         if(req.body.name=='asd'){
            next();
         }else{
             res.status(404).render('error')
         }
         
     }

    app.post('/login',validate,(req,res)=>{
        res.cookie('user_name',req.body.name);
        res.send("dome")
    

})
}