// //we first need to create a resource to hold the object we want to share
// const ress = require('./sub');

//ress.f1();
// ress.f2();

const newRess = require('./sub');
const http = require('http');
//the creation of a server is a promise.
//This is how you create a server.
http.createServer(function(req,res){
//in here can be anything you want it to do
    res.end("Hello User")
    console.log("in server") 
}).listen(2000, function(){
    console.log("server has started")
})









// newRess.login();
// newRess.loggedout();

//node modules--this is what drives node
//let's take a look at some
//1. http module--it is already built, if you want to make use of it then you have to import it.it is what makes your web server of node to work.
//2. URL module--
//3. querystring--
//4. path
//5. fs
//6. utility
//http 
