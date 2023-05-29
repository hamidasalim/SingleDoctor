const {
	
	getSecreatry,
	getSecreatrys,
	updateSecreatry,
	deleteSecreatry,
	makeSecreatry,
	createSecreatry,

} = require("../controllers/secretary.controllers");
const secretaryModel = require("../models/secretary.models");

const router = require("express").Router();

router.param("secretary", async (req, res, next, id) => {
	try {
		const secretary = await secretaryModel.findById(id);

		if (!secretary) {
			return res.status(404).json("secretary not found");
		}

		req.secretary = secretary;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});


router.get("/", getSecreatrys);
router.get("/:secretaryId", getSecreatry);
router.put("/:secretaryId", updateSecreatry);
router.delete("/:secretaryId", deleteSecreatry);
router.post("/:secretaryId",createSecreatry);
router.put("/make/:secretaryId",makeSecreatry);




module.exports = router;
