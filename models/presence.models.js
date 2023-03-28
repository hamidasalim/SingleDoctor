const mongoose = require("mongoose");

const PresenceSchema = new mongoose.Schema({
    secretary:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
    date :{type: Date },
    startTime:{type: String },
    endTime:{type: String },
}
,
	{ timestamps: true });

module.exports = mongoose.model("Presence",PresenceSchema);