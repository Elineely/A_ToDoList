
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var thingsToDo = ["take a class","work out", "walk my little sister"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req, res){

  var today = new Date();
  var options = {
    weekday : "long",
    day : "numeric",
    month : "long",
    year : "numeric"
  };

  var day = today.toLocaleDateString("en-KR", options);

  res.render("list", { kindOfDay : day, newThingsToDo : thingsToDo});

});

app.post("/", function(req, res){
  thingsToDo.push(req.body.newItem);

  res.redirect("/");
  console.log(thingsToDo);

});

app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
});
