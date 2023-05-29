const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
	{ 
		username : {type:String},
        profil:{type: mongoose.Schema.Types.ObjectId, ref: "User"},

	},
	{ timestamps: true }
);

module.exports = mongoose.model("Patient", PatientSchema);
