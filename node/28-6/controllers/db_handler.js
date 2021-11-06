var db_handler=require('mssql');
var body_parser=require('body-parser');

module.exports=(app)=>{
    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended:false}));
    var config={
        user:'db_a7667a_mujtaba6099_admin',
        password:'5115814P@k',
        database:'db_a7667a_mujtaba6099',
        server:'SQL5053.site4now.net',
        port:1433,
        options:{
            trustServerCertificate:true
        }
    }

    db_handler.connect(config,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("no masla")
        }
    })

    app.get('/data',(req,res)=>{
        var handle=new db_handler.Request();
        handle.query('Select * from Admin',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                res.send(data)
                console.log(data)
            }
        })

    })

    app.post('/insert',(req,res)=>{
        var handle=new db_handler.Request();
        console.log(req.body.name)
        handle.query(`Insert into Admin (username,pwd) values ('${req.body.name}','${req.body.name}')`,(err)=>{
            if(err){
                console.log(err);
                res.status(500).send("NOT INSERTED");
            }else{
                res.send("DONE..INSERTED")
            }
        })

    })

    app.post('/delete',(req,res)=>{
        var handle=new db_handler.Request();
        handle.query(`Delete from Admin where username='${req.body.name}'`,(err)=>{
            if(err){
                console.log(err);
                res.status(500).send("NOT INSERTED");
            }else{
                res.send("DONE..deleted")
            }
        })

    })

    app.post('/update',(req,res)=>{
        var handle=new db_handler.Request();
        console.log(req.body.name)
        handle.query(`Update Admin Set pwd= '${req.body.pwd}' where username='${req.body.name}'`,(err)=>{
            if(err){
                console.log(err);
                res.status(500).send("NOT Updated");
            }else{
                res.send("DONE..Updated")
            }
        })

    })

}