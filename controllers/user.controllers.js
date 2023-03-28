const userModels = require("../models/user.models");
const secretaryModels= require("../models/secretary.models");
/***** SECRETARY  */
const createSecretary = async (req,res) =>{
    const id=req.params.userId;
	try{
		const newSecretary = new secretaryModels({
			salary : req.body.salary,
			profil:id,
			cin:req.body.cin,
		});
		const savedSecretary = await newSecretary.save();
		return res.status(200).json(savedSecretary);
		}catch(error){
			return res.status(500).json(error);
		}
};

const getSecretarys = async (req, res) => {
	try {
		const secretarys = await secretaryModels.find();
		return res.status(200).json(secretarys);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const getSecretary = async (req, res) => {
	const id = req.params.secretaryId;

	try {
		const secretary = await secretaryModels.findById(id);
		return res.status(200).json(secretary);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const deleteSecretary = async (req, res) => {
	const id = req.params.secretaryId;
	try {
		const sec = await secretaryModels.findById(id);
		const user= await userModels.findByIdAndDelete(sec._id);
		const secretary = await secretaryModels.findByIdAndDelete(id);
		return res.status(200).json(secretary);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const updateSecretary = async (req, res) => {
	const id = req.params.secretaryId;
	try {
		const secretary = await secretaryModels.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(secretary);
	} catch (err) {
		return res.status(500).json(err);
	}
};

/* PATIENT */
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

/* MAKE */

 const makeSecretary= async (req,res)=>{
	const id=req.params.userId;
	try{
		const user= await userModels.findByIdAndUpdate(id,{$set:{isSecretary:true}});
		return res.status(200).json(user);
		}catch(error){
			return res.status(500).json(error);
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






const getUsers = async (req, res) => {
	try {
		const users = await userModels.find();
		return res.status(200).json(users);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const getUser = async (req, res) => {
	const id = req.params.userId;

	try {
		const user = await userModels.findById(id);
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const deleteUser = async (req, res) => {
	const id = req.params.userId;
	try {
		const user = await userModels.findByIdAndDelete(id);
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const updateUser = async (req, res) => {
	const id = req.params.userId;
	try {
		const user = await userModels.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json(err);
	}
};

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;
module.exports.makePatient = makePatient;
module.exports.getSecretarys = getSecretarys;
module.exports.getSecretary = getSecretary;
module.exports.deleteSecretary = deleteSecretary;
module.exports.updateSecretary = updateSecretary;
module.exports.makeSecretary = makeSecretary;
module.exports.createSecretary = createSecretary;
