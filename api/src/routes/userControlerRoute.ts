import UserController from "../controllers/user.Controller";
import express from "express";
const router= express.Router();

router.post('/',UserController.loginUser);
router.post('/createuser',UserController.CreateUser)
router.post('/updateuser',UserController.UpdateUser)

export default router;
