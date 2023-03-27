const { getPresences, createPresence, getPresence,deletePresence,updatePresence} = require("../controllers/presence.controllers");

const verifyToken = require("../middleware/verifyToken.js")

const router = require ("express").Router();
router.get("/",getPresences);
router.get("/:presenceId",getPresence);
router.post("/",verifyToken,createPresence);
router.delete("/",deletePresence);
router.put("/:presenceId",updatePresence);

router.param("presence", async (req, res, next, id) => {
	try {
		const presence = await presenceModel.findById(id);

		if (!presence) {
			return res.status(404).json("presence not found");
		}

		req.presence = presence;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});

module.exports=router;