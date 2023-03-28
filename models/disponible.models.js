const mongoose = require("mongoose");

const DisponibleSchema = new mongoose.Schema({
    date :{type: Date },
    startTime:{type: String },
    endTime:{type: String },
}
,
	{ timestamps: true });

module.exports = mongoose.model("Disponible",DisponibleSchema);