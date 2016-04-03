var mongoose = require("mongoose");
var Interest = require("./component").Interest;
var Schema = mongoose.Schema;

var componentSchema = new Schema({
	name:String,
	image:String,
	description:String,
	interest_id:Schema.ObjectId
});

componentSchema.virtual("image.url").get(function(){//propiedad virtual, no va a la base de datos
	if(this.image === "" || this.image === "data.png"){//tengo acceso a this que es igual al producto
		return "http://res.cloudinary.com/dwyk9xxmr/image/upload/v1459521559/82142753482077503177_cam1cf.jpg";
	}
	return this.image;
});


var Component = mongoose.model('Component', componentSchema);

module.exports.Component = Component; 