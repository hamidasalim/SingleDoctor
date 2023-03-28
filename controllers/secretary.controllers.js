const userModels = require("../models/user.models");
const secretaryModels= require("../models/secretary.models");


const createSecreatry = async (req,res) =>{
    const id=req.params.userId;
	try{
		const newSecreatry = new secretaryModels({
			salary : req.body.salary,
			profil:id,
			cin:req.body.cin,
		});
		const savedSecreatry = await newSecreatry.save();
		return res.status(200).json(savedSecreatry);
		}catch(error){
			return res.status(500).json(error);
		}
};

const getSecreatrys = async (req, res) => {
	try {
		const secretarys = await secretaryModels.find();
		return res.status(200).json(secretarys);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const getSecreatry = async (req, res) => {
	const id = req.params.secretaryId;

	try {
		const secretary = await secretaryModels.findById(id);
		return res.status(200).json(secretary);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const deleteSecreatry = async (req, res) => {
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
const updateSecreatry = async (req, res) => {
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


const makeSecreatry= async (req,res)=>{
	const id=req.params.userId;
	try{
		const user= await userModels.findByIdAndUpdate(id,{$set:{isSecreatry:true}});
		if(user.isSecreatry != true){
			const user1= await userModels.findByIdAndUpdate(id,{$set:{isSecreatry:true}});
			return res.status(200).json(user1);
		}
		return res.status(200).json(user);
		}catch(error){
			return res.status(500).json(error);
		}
};






module.exports.makeSecreatry = makeSecreatry;
module.exports.getSecreatrys = getSecreatrys;
module.exports.getSecreatry = getSecreatry;
module.exports.deleteSecreatry = deleteSecreatry;
module.exports.updateSecreatry = updateSecreatry;
module.exports.createSecreatry = createSecreatry;
