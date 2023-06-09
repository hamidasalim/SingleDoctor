const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
	{
        profil:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
        bio : {type: String},

	},
	{ timestamps: true }
);  

module.exports = mongoose.model("Doctor", DoctorSchema);