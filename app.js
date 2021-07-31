
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

const thingsToDo = ["take a class","work out", "take a walk"];
const workToDo = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));



app.get("/",function(req, res){
  const day = date.getDate();

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
