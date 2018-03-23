/////////////////////////////////////////////////////////
// controllers/ burgers_controller.js
// apps retrieve data from database and render it to page
// exports app
// requires express and models/burger.js
///////////////////////////////////////////////////////////

//var express = require("express");
// var app = express.App();
var path = require("path");
// Import the model (burger.js) to use its database functions.
var db = require("../models");

//var db = require("models")(app);

// Extracts the sequelize connection from the models object
//var sequelizeConnection = db.sequelize;

// Sync the tables
//sequelizeConnection.sync();

//console.log("db "+db)
// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

// Create routes
// ----------------------------------------------------

  app.get("/", function(req, res) {
console.log("--controller: app.get / burger.findAll render index");
 //  var Burger = require('../models/burger.js')(app)
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
  console.log("controller: app.get / res.render index hbsObject "+JSON.stringify(hbsObject));
    res.render("index", hbsObject);
  });
});

// Index Redirect
//app.get('/', function (req, res) {
//  res.redirect('/index');
//});
//}

// Post request to add the new burger
app.post("/api/burgers", function(req, res) {

  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  })
  .then(function(data) {
    //prints [object SequelizeInstance:Burger]
    console.log("post data "+JSON.stringify(data))
    res.json(data);
  });
});


app.put("/api/burgers/:id", function(req, res) {

  db.Burger.update({
    devoured: req.body.devoured
    }, {
    where: {
      id: req.params.id
    }
}).then(function(data) {
  console.log("put id "+req.params.id+"data "+data)
  res.json(data);
  });
});

}
/*
app.post("/api/burgers", function(req, res) {
console.log("-------------controller: app.post /api/burgers burger.insertOne");
  burger.insertOne(
  	["burger_name", "devoured"], 
    [req.body.burger_name, req.body.devoured], function(result) {
console.log("controller: send back res.json "+result.insertId)
    // Send back the ID of the new 
    res.json({ id: result.insertId });
  });
});


app.put("/api/burgers/:id", function(req, res) {
    console.log("------------controller: app.put /api/burgers:id "+req.params.id);
  var condition = "id = " + req.params.id;

  //console.log("controller: app.put /api/burgers update devoured ", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
  console.log("controller: burger.updateOne devoured "+req.body.devoured);

    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
*/

//module.exports = app;