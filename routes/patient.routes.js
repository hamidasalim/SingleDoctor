const {
	
	getPatient,
	getPatients,
	updatePatient,
	deletePatient,
	makePatient,
	createPatient,

} = require("../controllers/patient.controllers");
const patientModel = require("../models/patient.models");

const router = require("express").Router();

router.param("patient", async (req, res, next, id) => {
	try {
		const patient = await patientModel.findById(id);

		if (!patient) {
			return res.status(404).json("patient not found");
		}

		req.patient = patient;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});


router.put("/makepatient/:patientId", makePatient);
router.get("/patient", getPatients);
router.get("/patient/:patientId", getPatient);
router.put("/patient/:patientId", updatePatient);
router.delete("/patient/:patientId", deletePatient);
router.post("/patient/:patientId",createPatient);



module.exports = router;
