const {
  createMessage,
  getMessagesConvo,
  getMyMessagesConvo,

} = require("../controllers/message.controllers");
const messageModel = require("../models/Message.models");
const verifyToken = require("../middleware/verifyToken.js")

const router = require("express").Router();

router.param("message", async (req, res, next, id) => {
  try {
    const message = await messageModel.findById(id);

    if (!message) {
      return res.status(404).json("message not found");
    }

    req.message = message;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/:conversationId",verifyToken, createMessage);
router.get("/:conversationId",verifyToken, getMessagesConvo);
router.get("/my/my",verifyToken, getMyMessagesConvo);


module.exports = router;
