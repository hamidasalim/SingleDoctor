const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String },
    convo: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
