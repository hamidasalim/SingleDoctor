const { getServices, createService, getService,deleteService,updateService} = require("../controllers/service.controllers");

const verifyToken = require("../middleware/verifyToken.js")

const router = require ("express").Router();
router.get("/",getServices);
router.get("/:serviceId",getService);
router.post("/",verifyToken,createService);
router.delete("/:serviceId",deleteService);
router.put("/:serviceId",updateService);

router.param("service", async (req, res, next, id) => {
	try {
		const service = await serviceModel.findById(id);

		if (!service) {
			return res.status(404).json("service not found");
		}

		req.service = service;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});

module.exports=router;