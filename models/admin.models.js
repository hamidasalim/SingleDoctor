const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
	{
        profil:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
	},
	{ timestamps: true }
);  

module.exports = mongoose.model("Admin", AdminSchema);