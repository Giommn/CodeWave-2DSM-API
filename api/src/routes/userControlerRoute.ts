import UserController from "../controllers/user.Controller";
import express from "express";
const router= express.Router();

router.post('/login',UserController.loginUser);
router.post('/createuser',UserController.CreateUser)
router.put('/updateuser',UserController.UpdateUser)
router.delete("/deleteuser/:id",UserController.DeleteUser)
router.get('/getusers',UserController.ListUser)
export default router;
