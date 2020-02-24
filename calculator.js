const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html")
})
app.get("/bmical",function(req,res){
	res.sendFile(__dirname+"/bmical.html")
})
app.post("/",function(req,res){
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1 + num2;
	res.send("the result is "+result);

})
app.post("/bmical",function(req,res){
	var num1 = Number(req.body.bugat);
	var num2 = Number(req.body.taas);
	var result = num1 /num2**2;
	res.send("the result is "+result);

})




app.listen(port);