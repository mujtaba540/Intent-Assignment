var cookie=require('cookie-parser');
var session=require('express-session');
const { NText } = require('mssql');

module.exports=(app)=>{
    app.use(cookie());

    function validate(req,res,next){
        const {cookies}=req;
        if('session_id' in cookies){
            console.log("already present");
            if(cookie.id==='123'){
                next();
            }else{
                res.status(403).send({msg:'NOPE'});
            }

        }else{res.status(403).send({msg:'NOPE'})};
    }

    app.get('/signin',validate,(req,res)=>{
        res.cookie('session_id','123');
        res.send(200).json({msg:'done'})
    })
}