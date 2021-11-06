var Connection = require('tedious').Connection;  
var Request = require('tedious').Request  
var TYPES = require('tedious').TYPES; 
var sql=require('mssql');
module.exports=(app)=>{
    function conct(){
        var config = {  
            server: 'localhost', 
            authentication: {
                type: 'default',
                options: {
                    userName: 'sa', 
                    password: '123'  
                }
            },
            options: {
                encrypt: true,
                database: 'info' 
            }
        };  
        var connection = new Connection(config);  
        connection.on('connect', function(err) {  
            console.log("Connected");  
        });
        
        connection.connect();

    }
    


    app.get('/submit',conct,(req,res)=>{
       var q=new sql.Request();
       q.query("select * from info.Admin",(err,set)=>{
        if(err) console.log(err);
        res.send("done");
       });
       
    })
    
    
}  
