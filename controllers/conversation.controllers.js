const userModels = require("../models/user.models");
const conversationModels = require("../models/conversation.models");




const createConversation = async (req, res) => {
  try {
    const user = req.verifiedUser._id;
    console.log("checkpoint 0 ")

    const pat = await userModels.findById(user);
    console.log("checkpoint 1 ")
    if (pat && pat.role=="patient") {
        console.log("checkpoint 2 ")

        const existConv = await conversationModels.findOne({
            members: { $in: [user] },
          });
          
      console.log("checkpoint 3 ")

      const doctor = await userModels.findOne({
        role: "doctor",
      });
      console.log("checkpoint 4 ")
      console.log(pat.username);
      if (existConv == null) {
        const newConversation = new conversationModels({
          name: pat.username,
          members: [user, doctor._id],
        });
        console.log("checkpoint 5 ")

        const savedConversation = await newConversation.save();
        console.log("checkpoint 6 ")

        return res.status(200).json(savedConversation);
      } else {
        return res.status(204,"No convo created cuz exist");
      }
    } else {
      return res.status(204,"No convo created cuz not patient");
    }
  } catch (error) {
    console.log("error in catch controller")
    return res.status(500).json(error);
  }
};

const getConversations = async (req, res) => {
  try {
    const user = req.verifiedUser._id;
    console.log("get checkpoint 1")
    const conversations = await conversationModels.find({
      members: { $in: [user] }    });
    console.log("get checkpoint 2")

    return res.status(200).json(conversations);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getConversations = getConversations;

module.exports.createConversation = createConversation;
