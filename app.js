
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let thingsToDo = ["take a class","work out", "take a walk"];
let workToDo = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));



app.get("/",function(req, res){

  let today = new Date();
  let options = {
    weekday : "long",
    day : "numeric",
    month : "long",
    year : "numeric"
  };

  let day = today.toLocaleDateString("en-KR", options);

  res.render("list", { listTitle : day, newItems : thingsToDo});

});

app.get("/work",function(req, res){

  res.render("list", { listTitle : "Work", newItems : workToDo});

});

app.get("/contact", function(req, res){
  res.render("contact");
  console.log("Server is running on port 3000");
});



app.post("/", function(req, res){
  if(req.body.list === "Work"){
    workToDo.push(req.body.newItem);
    res.redirect("/work");
  }else{
    thingsToDo.push(req.body.newItem);
    res.redirect("/");
  };

});



app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
});
