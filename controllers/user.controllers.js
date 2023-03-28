const userModels = require("../models/user.models");

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

