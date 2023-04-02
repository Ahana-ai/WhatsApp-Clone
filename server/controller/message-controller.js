import Message from "../models/message-model.js";
import Conversation from '../models/conversations-model.js'

class MessageController {
    constructor() {}

    /**
     * @method newMessage
     * @description To store the new msg in db
     */
    async newMessage (req, res) {
        try {
            const newMessage = new Message(req.body);

            await newMessage.save();
            await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text })

            return res.status(200).json("Message has been sent successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    /**
     * @method getMessage
     * @description To fetch msgs from db
     */
    async getMessage ( req, res ) {
        try {
            const messages = await Message.find({ conversationId: req.params.id });
            return res.status(200).json(messages);
        } catch (error) {
            res.status(200).json(error);
        }
    }
}

export default MessageController = new MessageController();