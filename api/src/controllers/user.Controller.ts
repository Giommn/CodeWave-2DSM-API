import { Request,Response } from "express";
import UserService from "../service/user.Service";
import UserRepository from "../repositories/user.Repository";
import { Auth, ResponseUser } from "../dtos/user.dto";
import { PrismaError } from "../help/typeError";



export default class UserController{
   static async loginUser(req:Request,res:Response):Promise<Response>{
    try{
         const {email,senha}=req.body;
         if(!email || !senha)throw new Error('Invalid information');
         const user_service=new UserService(new UserRepository())
         const resposta:Auth=await user_service.login(email,senha)
        
         return res.status(200).json({
             status:'success',
             resposta:resposta,
             msg:'Login completed',
             
         })
          

    }catch(erro){
        console.log(erro)
        if((( PrismaError.verifyError(erro)).message)!="500")
            return res.status(400).json({
            status: 'error', 
            message: erro.message,
           
        });
        return res.status(500).json({
            status: 'error', 
            code: 500,
           
        });
       
    }}


    static async CreateUser(req:Request,res:Response):Promise<Response>{
        try{
        const {nome,email,senha,nivel_user}=req.body
        const CreateUser=new UserService(new UserRepository())
        const resposta:ResponseUser=await CreateUser.createUser(nome,email,senha,nivel_user)
        return res.status(200).json({
            resposta:resposta
        })
    }catch(error){
        if (error.message!="500")
         return res.status(400).json({
            status: 'error', 
            message: error.message,
         })
         return res.status(500).json({
            status: 'error', 
            code: 500,
           
        });
       
    }
    }

    static async DeleteUser(req:Request,res:Response):Promise<Response>{
        try{
            const {id}=req.body
            const DeleteUser=new UserService(new UserRepository())
            const resposta:ResponseUser=await DeleteUser.deleteUser(id);
            return res.status(200).json({
                status:"Success", 
                    resposta:resposta
           })
        } catch(error){
          return res.status(400).json({
              status: 'error',
              message: error.message
          })
        }
    }
    static async UpdateUser(req:Request,res:Response):Promise<Response>{
        try{
            const {id,name,email,senha}=req.body
            const UpdateUser=new UserService(new UserRepository())
            const resposta:ResponseUser=await UpdateUser.updateUser(id,name,email,senha);
            return res.status(200).json({
                status: "Success",
                    resposta:resposta
            })
        } catch(error){
            return res.status(400).json({
                status: 'error',
                message: error.message
          })
        }
    }




}
