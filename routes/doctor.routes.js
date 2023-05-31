const { getDoctors, createDoctor, getDoctor,deleteDoctor,updateDoctor} = require("../controllers/doctor.controller");

const verifyToken = require("../middleware/verifyToken.js")

const router = require ("express").Router();
router.get("/",getDoctors);
router.get("/:doctorId",getDoctor);
router.post("/",createDoctor);
router.delete("/:doctorId",deleteDoctor);
router.put("/:doctorId",updateDoctor);

router.param("doctor", async (req, res, next, id) => {
	try {
		const doctor = await doctorModel.findById(id);

		if (!doctor) {
			return res.status(404).json("doctor not found");
		}

		req.doctor = doctor;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});

module.exports=router;