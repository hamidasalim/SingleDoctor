const serviceModels = require("../models/service.models")


const createService = async (req,res) =>{
    const newService = new serviceModels({
        titre:req.body.titre,
        prix:req.body.prix,
        dure:req.body.dure,
        description:req.body.description,

    });
    try{
        const savedService = await newService.save();
        return res.status(200).json(savedService);

    }catch(error){
        return res.status(500).json(error);
    }
};
const getServices = async (req,res)=>  {
    try{
        const services = await serviceModels.find();
        return res.status(200).json(services);
    }catch(error){
        return res.status(500).json(error);
    }
};
const getService = async (req,res)=>  {
    const id = req.params.serviceId;
    try{
        const service = await serviceModels.findById(id);
        return res.status(200).json(service);
    }catch(error){
        return res.status(500).json(error);
    }
};

const deleteService = async (req,res)=>  {
    const id = req.params.serviceId;
    try{
        const service = await serviceModels.findByIdAndDelete(id);
        return res.status(200).json(service);
    }catch(error){
        return res.status(500).json(error);
    }
};

const updateService = async (req,res)=>  {
    const id = req.params.serviceId;
    try{
        const service = await serviceModels.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        return res.status(200).json(service);
    }catch(error){
        return res.status(500).json(error);
    }
};

module.exports.createService = createService;
module.exports.getServices = getServices;
module.exports.getService = getService;
module.exports.deleteService = deleteService;
module.exports.updateService = updateService;