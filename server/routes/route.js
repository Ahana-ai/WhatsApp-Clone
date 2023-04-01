import express from "express";
const router = express.Router();
import ConversationController from "../controller/conversation-controller.js";
import UserController from "../controller/user-controller.js";
import MessageController from "../controller/message-controller.js";

// User 
router.post('/add', UserController.addUser);
router.get('/users', UserController.getUser);

// Conversation
router.post('/conversation/add', ConversationController.newConversation);
router.post('/conversation/get', ConversationController.getConversation);

//Message
router.post('/message.add', MessageController.newMessage);

export default router;