//var http = require('http');
//var mysql = require('mysql');
//var express = require('express');
//var app = express();
//var router = express.Router();
//var path = __dirname + "/";
////var path = __dirname + '/views/';
//
//router.use(function (req,res,next) {
//  console.log("/" + req.baseUrl);
//  console.log(req.originalUrl);
//  next();
//});
//
//router.get("/",function(req,res){
//  console.log("here" + req.originalUrl)
//  res.sendFile(path + "index.html");
//});
//
//router.get("/about",function(req,res){
//  res.sendFile(path + "about.html");
//});
//
//router.get("/contact",function(req,res){
//  res.sendFile(path + "contact.html");
//});
////
////app.use(express.static('css'));
////app.use(express.static('js'));
//app.use("/",router);
//
////app.use("*",function(req,res){
////  console.log(req.baseUrl);
////  res.sendFile(path + "404.html");
////});
//



var express = require('express');
var app = express();

app.use('/css',express.static('css'));
app.use('/font-awesome', express.static('font-awesome'));
app.use('/fonts',express.static('fonts'));
app.use('/js',express.static('js'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.listen(3000,function(){
  console.log("Live at Port 3000");
});