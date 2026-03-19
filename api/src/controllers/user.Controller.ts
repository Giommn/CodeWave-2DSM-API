import { Request,Response } from "express";
import UserService from "../service/user.Service";
import UserRepository from "../repositories/user.Repository";
import { Auth } from "../dtos/user.dto";
import { PrismaError } from "../help/typeError";



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
        if(((await PrismaError.verifyError(erro)).message)!="500")
            return res.status(400).json({
            status: 'error', 
            message: erro.message,
           
        });
        return res.status(500).json({
            status: 'error', 
            code: 500,
           
        });
       
    }
   }
}