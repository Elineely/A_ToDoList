
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/",function(req, res){

  var today = new Date();
  var day = today.getDay();
  var result = "";

  switch (day) {
    case 0 :
    result = "Sunday";
    break;
    case 1 :
    result = "Monday";
    break;
    case 2 :
    result = "Tuesday";
    break;
    case 3 :
    result = "Wendnesday";
    break;
    case 4 :
    result = "Thursday";
    break;
    case 5 :
    result = "Friday";
    break;
    case 6 :
    result = "Saturday";
    break;

    default :
    console.log("The result is " + result +".");
  }

    res.render('list', { kindOfDay : result });

});

app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
});
