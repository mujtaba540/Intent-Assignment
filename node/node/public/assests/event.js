var event=require('events');
var util=require('util');

var messi=function(name){
this.name=name;
};

util.inherits(messi,event.EventEmitter);

var rooney=new messi("rooney");
var ronaldo=new messi("ronaldo");
var team=[rooney,ronaldo];

team.forEach(function(messi){
    messi.on('call',(msg)=>{
        console.log(messi.name+" calls "+msg);
    })
})

ronaldo.emit('call',"hey bud");