const disponibleModels = require("../models/disponible.models")


const createDisponible = async (req,res) =>{
    const newDisponible = new disponibleModels({
        date:req.body.date,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        doctor:req.verifiedUser._id,

    });
    try{
        const savedDisponible = await newDisponible.save();
        return res.status(200).json(savedDisponible);

    }catch(error){
        return res.status(500).json(error);
    }
};
const getDisponibles = async (req,res)=>  {
    try{
        const disponibles = await disponibleModels.find();
        return res.status(200).json(disponibles);
    }catch(error){
        return res.status(500).json(error);
    }
};
const getDisponible = async (req,res)=>  {
    const id = req.params.disponibleId;
    try{
        const disponible = await disponibleModels.findById(id);
        return res.status(200).json(disponible);
    }catch(error){
        return res.status(500).json(error);
    }
};

const deleteDisponible = async (req,res)=>  {
    const id = req.params.disponibleId;
    try{
        const disponible = await disponibleModels.findByIdAndDelete(id);
        return res.status(200).json(disponible);
    }catch(error){
        return res.status(500).json(error);
    }
};

const updateDisponible = async (req,res)=>  {
    const id = req.params.disponibleId;
    try{
        const disponible = await disponibleModels.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        return res.status(200).json(disponible);
    }catch(error){
        return res.status(500).json(error);
    }
};

module.exports.createDisponible = createDisponible;
module.exports.getDisponibles = getDisponibles;
module.exports.getDisponible = getDisponible;
module.exports.deleteDisponible = deleteDisponible;
module.exports.updateDisponible = updateDisponible;