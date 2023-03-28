const userModels = require("../models/user.models");
const patientModels= require("../models/patient.models");


const createPatient = async (req,res) =>{
    const id=req.params.userId;
	try{
		const newPatient = new patientModels({
			salary : req.body.salary,
			profil:id,
			cin:req.body.cin,
		});
		const savedPatient = await newPatient.save();
		return res.status(200).json(savedPatient);
		}catch(error){
			return res.status(500).json(error);
		}
};

const getPatients = async (req, res) => {
	try {
		const patients = await patientModels.find();
		return res.status(200).json(patients);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const getPatient = async (req, res) => {
	const id = req.params.patientId;

	try {
		const patient = await patientModels.findById(id);
		return res.status(200).json(patient);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const deletePatient = async (req, res) => {
	const id = req.params.patientId;
	try {
		const sec = await patientModels.findById(id);
		const user= await userModels.findByIdAndDelete(sec._id);
		const patient = await patientModels.findByIdAndDelete(id);
		return res.status(200).json(patient);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const updatePatient = async (req, res) => {
	const id = req.params.patientId;
	try {
		const patient = await patientModels.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(patient);
	} catch (err) {
		return res.status(500).json(err);
	}
}; 


const makePatient= async (req,res)=>{
	const id=req.params.userId;
	try{
		const user= await userModels.findByIdAndUpdate(id,{$set:{isPatient:true}});
		if(user.isPatient != true){
			const user1= await userModels.findByIdAndUpdate(id,{$set:{isPatient:true}});
			return res.status(200).json(user1);
		}
		return res.status(200).json(user);
		}catch(error){
			return res.status(500).json(error);
		}
};






module.exports.makePatient = makePatient;
module.exports.getPatients = getPatients;
module.exports.getPatient = getPatient;
module.exports.deletePatient = deletePatient;
module.exports.updatePatient = updatePatient;
module.exports.createPatient = createPatient;
