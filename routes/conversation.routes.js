const {
		getConversations,
	createConversation,

} = require("../controllers/conversation.controllers");
const verifyToken = require("../middleware/verifyToken.js")

const conversationModel = require("../models/conversation.models");

const router = require("express").Router();

router.param("conversation", async (req, res, next, id) => {
	try {
		const conversation = await conversationModel.findById(id);

		if (!conversation) {
			return res.status(404).json("conversation not found");
		}

		req.conversation = conversation;
		next();
	} catch (err) {
		console.log("error in catch router")

		return res.status(500).json(err);
	}
});


router.get("/",verifyToken, getConversations);
router.post("/",verifyToken,createConversation);




module.exports = router;
