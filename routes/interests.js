var express = require('express');
var router = express.Router();
var Interest = require("../public/models/interest").Interest;
var Component = require("../public/models/component").Component;

/* GET home page. */
router.get('/', function(req,res){
  	Interest.find(function(err,documento){
		if(err){console.log(err);}
		//console.log(documento);
		console.log(req.url);
		res.locals.url = req.url; 
		res.render("index",{ interests: documento });
	});
});
router.get('/interests/:id', function(req,res){
	//Para asegurarnos que el req.params.id sea un ObjectId
	if (req.params.id.match(/^[0-9a-fA-F]{24}$/)){
		Interest.findOne({"_id": req.params.id}, function(errorInt, documentInt){
		  	if(errorInt){console.log(err);}
		  	Component.find({"interest_id" : req.params.id},function(err,documento){
				if(err){console.log(err);}
				console.log(documento);
				console.log(documentInt);
				res.render("show",{ components: documento, interest: documentInt});
			});
	  });
  	}
});

/*var data = {
			title:"Places",
			imageUrl:"http://p1.pichost.me/i/53/1770649.jpg",
			reason: "That feeling of making you part of that place."
		};
  	var interest = Interest(data);
  	interest.save(function(err){
						console.log(interest);
						//respuesta.render("/");
					});*/

module.exports = router;