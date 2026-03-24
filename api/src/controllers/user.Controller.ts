import { Request,Response } from "express";
import UserService from "../service/user.Service";
import UserRepository from "../repositories/user.Repository";
import { Auth, ResponseUser } from "../dtos/user.dto";
import {  ValidatorError } from "../help/typeError";




export default class UserController{

    private static userRepository = new UserRepository();
    private static userService=new  UserService(UserController.userRepository);
   static async loginUser(req:Request,res:Response):Promise<Response>{
    try{
         const {email,senha}=req.body;
          if(!email || !senha)throw new ValidatorError('Invalid information',400,"Invalid Arguments");
          if(senha.length<8)throw new  ValidatorError('Invalid Password',400,"Invalid Password")
         const resposta:Auth=await UserController.userService.login(email,senha)
        
         return res.status(200).json({
             status:'success',
             resposta:resposta,
             msg:'Login completed',
             
         })
          

    }catch(erro){
        if(erro instanceof ValidatorError)
            return res.status(erro.statusCode).json({
            status: 'error', 
            message: erro.message
           
        });
        return res.status(500).json({
            status: 'error', 
            code: 500,
           
        });
       
    }}


    static async CreateUser(req:Request,res:Response):Promise<Response>{
        try{
            
        const {nome,email,senha,nivel_user}=req.body
       
        if(!nome || ! email || !senha ||! nivel_user)throw new Error('Invalid information')
        const resposta:ResponseUser=await UserController.userService.createUser(nome,email,senha,nivel_user)
        return res.status(200).json({
            resposta:resposta
        })
    }catch(error){
        if (error instanceof ValidatorError)
         return res.status(error.statusCode).json({
            status: 'error', 
            message: error.message
         })
         return res.status(500).json({
            status: 'error', 
            message: error.message,
           
        });
       
    }
    }

    static async DeleteUser(req:Request,res:Response):Promise<Response>{
        try{
            const {id}=req.params
            if (!id)throw new Error('Invalid information')
            const resposta:ResponseUser=await UserController.userService.deleteUser(Number(id));
            return res.status(200).json({
                status:"Success", 
                    resposta:resposta
           })
        } catch(error){
          if (error instanceof ValidatorError)
         return res.status(error.statusCode).json({
            status: 'error', 
            message: error.message
         })
         return res.status(500).json({
            status: 'error', 
            message: error.message,
           
        });
        }
    }
    static async UpdateUser(req:Request,res:Response):Promise<Response>{
        try{
            const {id,name,email,senha}=req.body
            const resposta:ResponseUser=await UserController.userService.updateUser(id,name,email,senha);
            return res.status(200).json({
                status: "Success",
                    resposta:resposta
            })
        } catch(error){
           if (error instanceof ValidatorError)
         return res.status(error.statusCode).json({
            status: 'error', 
            message: error.message
         })
         return res.status(500).json({
            status: 'error', 
            message: error.message,
           
        });
        }
    }
    static async ListUser(req:Request,res:Response):Promise<Response>{
        try{
            const resposta:Array<ResponseUser>=await UserController.userService.listUser();
            return res.status(200).json({
                  status: "Success",
                    resposta:resposta
            })
        }catch(error){
              if (error instanceof ValidatorError)
         return res.status(error.statusCode).json({
            status: 'error', 
            message: error.message
         })
         return res.status(500).json({
            status: 'error', 
            message: error.message,
           
        });
        }
    }




}
