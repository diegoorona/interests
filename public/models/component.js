var mongoose = require("mongoose");
var Interest = require("./component").Interest;
var Schema = mongoose.Schema;

var componentSchema = new Schema({
	name:String,
	image:String,
	description:String,
	interest_id:Schema.ObjectId
});

var Component = mongoose.model('Component', componentSchema);

module.exports.Component = Component; 