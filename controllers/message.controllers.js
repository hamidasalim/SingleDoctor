const MessageModels = require("../models/Message.models");

const createMessage = async (req, res) => {
    try {
     console.log("checkpoint0") 
      const user = req.verifiedUser._id; 
      console.log("checkpoint1") 

      const convos = req.params.conversationId; 
      console.log("checkpoint2") 

      if (user && convos) {

          const newMessage = new MessageModels({
            senderId: user,
            content:req.body.message,
            convo : convos
          });
          console.log("checkpoint 3") 

          const savedMessage = await newMessage.save();
          console.log("checkpoint 3") 

          return res.status(200).json(savedMessage);
        
      } else {
        console.log("fatal f catch 3") 

        return res.status(401).json("No message created cuz not user or convo");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  const getMessagesConvo = async (req, res) => {
    try {
      const conv = req.params.conversationId;
      const messagesConversation = await MessageModels.find({
        convo:conv,
      }).populate("senderId");
      return res.status(200).json(messagesConversation);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  const getMyMessagesConvo = async (req, res) => {
    try {
      const user = req.verifiedUser._id;
      const conversations = await conversationModels.find({
        members: { $in: [user] }    });
      const messagesConversation = await MessageModels.find({
        convo:conversations,
      }).populate("senderId");
   
      return res.status(200).json(messagesConversation);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  
  module.exports.getMessagesConvo = getMessagesConvo;
  module.exports.getMyMessagesConvo = getMyMessagesConvo;

  
  module.exports.createMessage = createMessage;
  