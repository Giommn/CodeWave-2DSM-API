import { Request,Response } from "express";
import UserService from "../service/user.Service";
import UserRepository from "../repositories/user.Repository";
import { Auth } from "../dtos/user.dto";



export default class UserController{
   static async loginUser(req:Request,res:Response):Promise<Response>{
    try{
         const {email,senha}=req.body;
         const user_service=new UserService(new UserRepository())
         const resposta:Auth=await user_service.login(email,senha)
        
         return res.status(200).json({
             status:'success',
             resposta:resposta,
             msg:'Login completed',
             
         })
          

    }catch(erro){
            return res.status(400).json({
            status: 'error', 
            message: 'Falha no login',
            erro: erro.message || 'Validation error',
           
        });
       
    }
   }
}