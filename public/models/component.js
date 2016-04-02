var mongoose = require("mongoose");
var Interest = require("./component").Interest;
var Schema = mongoose.Schema;

var componentSchema = new Schema({
	name:String,
	imageUrl:String,
	description:String,
	interest: { type: Schema.ObjectId, ref: "Interest" } 
});

var Component = mongoose.model('Component', componentSchema);

module.exports.Component = Component; 