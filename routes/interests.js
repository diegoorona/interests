var express = require('express');
var interests = express.Router();
var Interest = require("./models/interest").Interest;
var Component = require("./models/component").Component;

/* GET home page. */
interests.get('/', function(req,res){
  Interest.find(function(err,docum){
		if(err){console.log(err);}
		respuesta.render("index",{ products: docum, url: req.url});
	})
});

module.exports = interests;