const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
	{
        titre :{type : String, required:true},
        prix : {type: String},
        dure: {type: String},
        description:{type:String}
	},
	{ timestamps: true }
);  

module.exports = mongoose.model("Service", ServiceSchema);