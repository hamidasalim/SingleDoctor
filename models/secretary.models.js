const mongoose = require("mongoose");

const SecretarySchema = new mongoose.Schema(
	{
        salary : {type: String},
        profil:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
		cin:{type:String},


	},
	{ timestamps: true }
);  

module.exports = mongoose.model("Secretary", SecretarySchema);
