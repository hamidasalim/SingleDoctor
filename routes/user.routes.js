const {
	getUser,
	getUsers,
	updateUser,
	deleteUser,
	getSecretary,
	getSecretarys,
	updateSecretary,
	deleteSecretary,
	makeSecretary,
	createSecretary,
	makePatient,
} = require("../controllers/user.controllers");
const secretaryModel = require("../models/secretary.models");
const userModel = require("../models/user.models");

const router = require("express").Router();

router.param("user", async (req, res, next, id) => {
	try {
		const user = await userModel.findById(id);

		if (!user) {
			return res.status(404).json("user not found");
		}

		req.user = user;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get("/", getUsers);
router.get("/:userId", getUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);
router.put("/makesecretary/:userId", makeSecretary);
router.put("/makepatient/:userId", makePatient);


router.get("/secretary", getSecretarys);
router.get("/secretary/:userId", getSecretary);
router.put("/secretary/:userId", updateSecretary);
router.delete("/secretary/:userId", deleteSecretary);
router.post("/secretary/:userId",createSecretary);



module.exports = router;
