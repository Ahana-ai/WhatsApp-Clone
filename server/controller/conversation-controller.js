import Conversation from '../models/conversations-model.js'

class ConversationController {
    constructor() {}

    /**
     * @method newConversation
     * @description To check if a old conversation already exists, if not create a new one or else continue to chat
     */
    async newConversation (req, res) {
        try {
            const senderId = req.body.senderId;
            const recieverId = req.body.recieverId;

            const exist = await Conversation.findOne({ members: { $all: [senderId, recieverId] } });

            if(exist)
                return res.status(200).json('Conversation already exists');
            
            //If convo doesn't exist, we need to create a new one
            const newConversation = new Conversation({
                members : [ senderId, recieverId ]
            })
            await newConversation.save();
            return res.status(200).json('Conversation saved successfully!');
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

export default ConversationController = new ConversationController();