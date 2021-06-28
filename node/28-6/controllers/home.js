module.exports=(app)=>{
    //display home page
    app.get('/form',(req,res)=>{
        res.render('form',{title:"form"})
    })

    app.get('/error',(req,res)=>{
        res.send("ERROR");
    })
}