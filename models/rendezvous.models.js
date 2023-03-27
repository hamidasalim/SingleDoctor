const mongoose = require("mongoose");

const RendezvousSchema = new mongoose.Schema({
    //service:{type: mongoose.Schema.Types.ObjectId, ref: "Service",required:true},
    service:{type:String},
    date:{type: Date},
    isConfirmed:{type:Boolean, default:false},
    isFinished:{type:Boolean, default:false},
    patient:{type: mongoose.Schema.Types.ObjectId, ref: "User",required:true}
}
,
	{ timestamps: true });

module.exports = mongoose.model("Rendezvous",RendezvousSchema);