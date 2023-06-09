const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		firstName: { type: String, maxlength: 128 },
		lastName: { type: String, maxlength: 128 }, 
		email: {
			type: String,
			required: true,
			unique: true,
			index: true,
			lowercase: true,
		},
		username:{type: String},
		gender:{type:String},
        telephone:{type:String},
		dateOfBirth:{type : Date},
		password: { type: String, required: true, maxlength: 4096 },
		dateCreated: { type: Date, default: Date.now },
		isEmailVerified: { type: Boolean, default: false },
		role:{type:String , default:"user"},

	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
