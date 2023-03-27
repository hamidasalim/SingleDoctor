const { getRendezvouss, createRendezvous, getRendezvous,deleteRendezvous,updateRendezvous,confirmRdv,finishRdv } = require("../controllers/rendezvous.controllers");

const router = require ("express").Router();
router.get("/",getRendezvouss);
router.get("/:rendezvousId",getRendezvous);
router.post("/",createRendezvous);
router.delete("/:rendezvousId",deleteRendezvous);
router.put("/:rendezvousId",updateRendezvous);
router.put("/confirm/:rendezvousId",confirmRdv);
router.put("/finish/:rendezvousId",finishRdv);


router.param("rendezvous", async (req, res, next, id) => {
	try {
		const rendezvous = await rendezvousModel.findById(id);

		if (!rendezvous) {
			return res.status(404).json("rendezvous not found");
		}

		req.rendezvous = rendezvous;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});

module.exports=router;