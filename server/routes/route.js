import express from "express";
import ConversationController from "../controller/conversation-controller.js";
const router = express.Router();
import UserController from "../controller/user-controller.js";

router.post('/add', UserController.addUser);
router.get('/users', UserController.getUser);

router.post('/conversation/add', ConversationController.newConversation);

export default router;