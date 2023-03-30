import express from "express";
const router = express.Router();
import UserController from "../controller/user-controller.js";

router.post('/add', UserController.addUser);

export default router;