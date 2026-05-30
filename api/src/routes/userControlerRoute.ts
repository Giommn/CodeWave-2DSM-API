import UserController from "../controllers/user.Controller";
import express from "express";
import * as jwt from "../config/jwt";
const router= express.Router();


router.post('/login',UserController.loginUser);

router.post('/createuser',//jwt.authToken//
UserController.CreateUser)

router.put('/updateuser',jwt.authToken,UserController.UpdateUser)
router.delete("/deleteuser/:id",jwt.authToken,UserController.DeleteUser)
router.get('/getusers',UserController.ListUser)


export default router;
