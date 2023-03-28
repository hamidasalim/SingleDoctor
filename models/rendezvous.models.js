const mongoose = require("mongoose");

const RendezvousSchema = new mongoose.Schema({
    date:{type: Date},
    title:{type:String},
    isConfirmed:{type:Boolean, default:false},
    isFinished:{type:Boolean, default:false},
    patient:{type: mongoose.Schema.Types.ObjectId, ref: "User",required:true},
    rdvType:{type:String}
}
,
	{ timestamps: true });

module.exports = mongoose.model("Rendezvous",RendezvousSchema);