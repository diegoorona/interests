var express = require('express');
var router = express.Router();
var Interest = require("../public/models/interest").Interest;
var Component = require("../public/models/component").Component;
var cloudinary = require("cloudinary"); 

cloudinary.config({ 
  cloud_name: 'dwyk9xxmr', 
  api_key: '742122983219814', 
  api_secret: 'S-mX4bsD2H5JaS1Lp5ETIj-pYaQ'
});

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
				res.render("show",{ components: documento, interest: documentInt});
			});
	  });
  	}
});
router.post('/interests/:id', function(req,res){
	var data = {
		name: req.body.name,
		description: req.body.description,
		interest_id: req.params.id
	} 
	console.log(data);

	var component = new Component(data);
	if (req.params.id.match(/^[0-9a-fA-F]{24}$/)){
		cloudinary.uploader.upload(req.files.image_avatar.path, 
			function(result){
				component.image = result.url;

				component.save(function(err){
					console.log(component);
					Interest.findOne({"_id": req.params.id}, function(errorInt, documentInt){
					  	if(errorInt){console.log(err);}
					  		Component.find({"interest_id" : req.params.id},function(err,documento){
					  			console.log(documento);
								res.render("show",{ components: documento, interest: documentInt});
						});
				  });
				});
		});
	}
});

module.exports = router;