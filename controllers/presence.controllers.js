const presenceModels = require("../models/presence.models")


const createPresence = async (req,res) =>{
    const newPresence = new presenceModels({
        secretary:req.verifiedUser._id,
    });
    try{
        const savedPresence = await newPresence.save();
        return res.status(200).json(savedPresence);

    }catch(error){
        return res.status(500).json(error);
    }
};
const getPresences = async (req,res)=>  {
    try{
        const presences = await presenceModels.find();
        presences.secretary
        .populate();
        return res.status(200).json(presences);
    }catch(error){
        return res.status(500).json(error);
    }
};
const getPresence = async (req,res)=>  {
    const id = req.params.presenceId;
    try{
        const presence = await presenceModels.findById(id);
        presence.secretary
        .populate();
        return res.status(200).json(presence);
    }catch(error){
        return res.status(500).json(error);
    }
};

const deletePresence = async (req,res)=>  {
    const id = req.params.presenceId;
    try{
        const presence = await presenceModels.findByIdAndDelete(id);
        return res.status(200).json(presence);
    }catch(error){
        return res.status(500).json(error);
    }
};

const updatePresence = async (req,res)=>  {
    const id = req.params.presenceId;
    try{
        const presence = await presenceModels.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        return res.status(200).json(presence);
    }catch(error){
        return res.status(500).json(error);
    }
};

module.exports.createPresence = createPresence;
module.exports.getPresences = getPresences;
module.exports.getPresence = getPresence;
module.exports.deletePresence = deletePresence;
module.exports.updatePresence = updatePresence;