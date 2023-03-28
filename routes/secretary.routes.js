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


router.get("/secretary", getSecreatrys);
router.get("/secretary/:secretaryId", getSecreatry);
router.put("/secretary/:secretaryId", updateSecreatry);
router.delete("/secretary/:secretaryId", deleteSecreatry);
router.post("/secretary/:secretaryId",createSecreatry,makeSecreatry);



module.exports = router;
