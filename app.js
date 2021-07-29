
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let thingsToDo = ["take a class","work out", "take a walk"];

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
