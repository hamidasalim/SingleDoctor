const rendezvousModels = require("../models/rendezvous.models")


const createRendezvous = async (req,res) =>{
    const newRendezvous = new rendezvousModels({
        service:req.body.service,
        date:req.body.date,
        patient:req.verifiedUser._id,
    });
    try{
        const savedRendezvous = await newRendezvous.save();
        return res.status(200).json(savedRendezvous);

    }catch(error){
        return res.status(500).json(error);
    }
};
const getRendezvouss = async (req,res)=>  {
    try{
        const rendezvouss = await rendezvousModels.find();
        return res.status(200).json(rendezvouss);
    }catch(error){
        return res.status(500).json(error);
    }
};
const getRendezvous = async (req,res)=>  {
    const id = req.params.rendezvousId;
    try{
        const rendezvous = await rendezvousModels.findById(id);
        return res.status(200).json(rendezvous);
    }catch(error){
        return res.status(500).json(error);
    }
};

const deleteRendezvous = async (req,res)=>  {
    const id = req.params.rendezvousId;
    try{
        const rendezvous = await rendezvousModels.findByIdAndDelete(id);
        return res.status(200).json(rendezvous);
    }catch(error){
        return res.status(500).json(error);
    }
};

const updateRendezvous = async (req,res)=>  {
    const id = req.params.rendezvousId;
    try{
        const rendezvous = await rendezvousModels.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        return res.status(200).json(rendezvous);
    }catch(error){
        return res.status(500).json(error);
    }
};
const confirmRdv= async (req,res)=>{
	const id=req.params.rendezvousId;
	try{
		const rdv= await rendezvousModels.findByIdAndUpdate(id,{$set:{isConfirmed:true}});
		return res.status(200).json(rdv);
		}catch(error){
			return res.status(500).json(error);
		}
};
const finishRdv= async (req,res)=>{
	const id=req.params.rendezvousId;
	try{
		const rdv= await rendezvousModels.findByIdAndUpdate(id,{$set:{isFinished:true}});
		return res.status(200).json(rdv);
		}catch(error){
			return res.status(500).json(error);
		}
};

module.exports.createRendezvous = createRendezvous;
module.exports.getRendezvouss = getRendezvouss;
module.exports.getRendezvous = getRendezvous;
module.exports.deleteRendezvous = deleteRendezvous;
module.exports.updateRendezvous = updateRendezvous;
module.exports.confirmRdv = confirmRdv;
module.exports.finishRdv = finishRdv;