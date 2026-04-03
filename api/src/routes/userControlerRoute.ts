import UserController from "../controllers/user.Controller";
import express from "express";
import * as jwt from "../config/jwt";
const router= express.Router();

<<<<<<< HEAD
router.post('/login',UserController.loginUser);
router.post('/createuser',UserController.CreateUser)
router.put('/updateuser',UserController.UpdateUser)
router.delete("/deleteuser/:id",UserController.DeleteUser)
router.get('/getusers',UserController.ListUser)
export default router;
=======

router.post('/login',UserController.loginUser);
router.post('/createuser',jwt.authToken,UserController.CreateUser)
router.put('/updateuser',jwt.authToken,UserController.UpdateUser)
router.delete("/deleteuser/:id",jwt.authToken,UserController.DeleteUser)
router.get('/getusers',jwt.authToken,UserController.ListUser)


export default router;
>>>>>>> ad15f9a60509215b678982e821fc3f52176ac351
