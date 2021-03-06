var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  console.log(req.body);
  burger.create(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  var burgerId = req.body.id;
  console.log(burgerId);
  burger.update(burgerId, function(result) {
    res.redirect("/");
  });
});


module.exports = router;
