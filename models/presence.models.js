const mongoose = require("mongoose");

const PresenceSchema = new mongoose.Schema({
    secretary:{type: mongoose.Schema.Types.ObjectId, ref: "User"}
}
,
	{ timestamps: true });

module.exports = mongoose.model("Presence",PresenceSchema);