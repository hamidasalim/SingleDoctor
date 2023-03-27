const doctorModels = require("../models/doctor.models")


const createDoctor = async (req,res) =>{
    const newDoctor = new doctorModels({
        profil:req.verifiedUser._id,
        bio:req.body.bio,
        profilepic:req.body.profilepic,
    });
    try{
        const savedDoctor = await newDoctor.save();
        return res.status(200).json(savedDoctor);

    }catch(error){
        return res.status(500).json(error);
    }
};
const getDoctors = async (req,res)=>  {
    try{
        const doctors = await doctorModels.find();
        doctors.secretary
        .populate();
        return res.status(200).json(doctors);
    }catch(error){
        return res.status(500).json(error);
    }
};
const getDoctor = async (req,res)=>  {
    const id = req.params.doctorId;
    try{
        const doctor = await doctorModels.findById(id);
        doctor.secretary
        .populate();
        return res.status(200).json(doctor);
    }catch(error){
        return res.status(500).json(error);
    }
};

const deleteDoctor = async (req,res)=>  {
    const id = req.params.doctorId;
    try{
        const doctor = await doctorModels.findByIdAndDelete(id);
        return res.status(200).json(doctor);
    }catch(error){
        return res.status(500).json(error);
    }
};

const updateDoctor = async (req,res)=>  {
    const id = req.params.doctorId;
    try{
        const doctor = await doctorModels.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        return res.status(200).json(doctor);
    }catch(error){
        return res.status(500).json(error);
    }
};

module.exports.createDoctor = createDoctor;
module.exports.getDoctors = getDoctors;
module.exports.getDoctor = getDoctor;
module.exports.deleteDoctor = deleteDoctor;
module.exports.updateDoctor = updateDoctor;