//file system module
const fs = require('fs');

// fs.readFile('readme.txt',function(err,data){

//     console.log(data)
// })


const data = fs.readFileSync('datasource.json','utf-8');
//console.log(JSON.parse(data));
//console.log(data);
let newData = JSON.parse(data)
console.log(newData[0]['username'])
