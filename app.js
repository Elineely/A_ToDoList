
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req, res){

  var today = new Date();
  if(today.getDay === 0 || today.getDay === 6){
    res.send("Hooray! It's a weekend");
  }else{
    res.send("Boo.. It's another weekday");
  }
});

app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
});
