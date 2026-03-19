import UserController from "../controllers/user.Controller";
import express from "express";
const router= express.Router();

router.post('/',UserController.loginUser);
 

export default router;