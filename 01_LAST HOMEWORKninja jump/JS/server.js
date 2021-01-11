var express = require("express");
server = express();

var cart={ "orderID": 12345,  "shopperName": "John Smith",  
"shopperEmail": "johnsmith@example.com",  
"contents": [{"productID": 34,"productName": "SuperWidget",
"quantity": 1},
 {"productID": 56,"productName": "WonderWidget","quantity": 3}
  ],  "orderCompleted": true};

var DB=require("nedb");//MongoDB -> mongoose
var Users = new DB({filename:__dirname+"/data/users.db", autoload:true});
var Taiwan = new DB({filename:__dirname+"/data/taiwan.db", autoload:true});

var bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({limit:'2mb', extended:true}));
server.use(bodyParser.json({limit:'2mb'}));

server.use(express.static(__dirname+"/public")); //web root

server.get("/save", function(req, res){
    console.log(req.query.user);
    res.send("Hello "+req.query.user);
})

server.get("/getOrder", function(req, res){
    //get order from DB
    res.send(JSON.stringify(cart))
})

server.get("/record", function(req, res){
    Users.find({}).sort({"score":-1}).limit(1).exec(function(err,result){
        res.send(result[0]);
    })
})

server.post("/save", function(req,res){
    if(req.body.score!=undefined){
        Users.update({userid:req.body.userid}, {$set:{score:Number(req.body.score)}}, {upsert:true}, function(err,doc){
          res.send("Success");   
        });
    }
    else{
        res.send("Failed");
    }
});


server.listen(8080)