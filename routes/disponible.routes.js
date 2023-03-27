const { getDisponibles, createDisponible, getDisponible,deleteDisponible,updateDisponible} = require("../controllers/disponible.controllers");

const verifyToken = require("../middleware/verifyToken.js")

const router = require ("express").Router();
router.get("/",getDisponibles);
router.get("/:disponibleId",getDisponible);
router.post("/",verifyToken,createDisponible);
router.delete("/",deleteDisponible);
router.put("/:disponibleId",updateDisponible);

router.param("disponible", async (req, res, next, id) => {
	try {
		const disponible = await disponibleModel.findById(id);

		if (!disponible) {
			return res.status(404).json("disponible not found");
		}

		req.disponible = disponible;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});

module.exports=router;