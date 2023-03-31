import express from "express";
const router = express.Router();
import UserController from "../controller/user-controller.js";

router.post('/add', UserController.addUser);
router.get('/users', UserController.getUser);

export default router;