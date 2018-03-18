/////////////////////////////////////////////////////////
// controllers/ burgers_controller.js
// routers retrieve data from database and render it to page
// exports router
// requires express and models/burger.js
///////////////////////////////////////////////////////////

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("-------------controller: router.get / burger.selectAll render index");
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
//  console.log("controller: router.get / res.render index hbsObject "+JSON.stringify(hbsObject));
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", function(req, res) {
console.log("-------------controller: router.post /api/burgers burger.insertOne");
  burger.insertOne(
  	["burger_name", "devoured"], 
    [req.body.burger_name, req.body.devoured], function(result) {
console.log("controller: send back res.json "+result.insertId)
    // Send back the ID of the new 
    res.json({ id: result.insertId });
  });
});


router.put("/api/burgers/:id", function(req, res) {
    console.log("------------controller: router.put /api/burgers:id "+req.params.id);
  var condition = "id = " + req.params.id;

  //console.log("controller: router.put /api/burgers update devoured ", condition);

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

module.exports = router;