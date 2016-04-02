var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var interestSchema = new Schema({
	title:String,
	imageUrl:String,
	reason:String,
});

var Interest = mongoose.model("Interest", interestSchema); 

module.exports.Interest = Interest;

