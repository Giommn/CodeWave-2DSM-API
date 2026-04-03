import { Request, Response } from "express";
import UserService from "../service/user.Service";
import UserRepository from "../repositories/user.Repository";
<<<<<<< HEAD
import { Auth, ResponseUser } from "../dtos/user.dto";
import {  ValidatorError } from "../help/typeError";

=======
import { Auth, ResponseUser, CreateUserDTO, UpdateUser, LoginDTO } from "../dtos/user.dto";
import { ValidatorError } from "../help/typeError";
>>>>>>> ad15f9a60509215b678982e821fc3f52176ac351


export default class UserController {
    private static userRepository = new UserRepository();
    private static userService = new UserService(UserController.userRepository);

<<<<<<< HEAD
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




=======
    static async loginUser(req: Request, res: Response): Promise<Response> {
        try {
            const reqUser: LoginDTO = req.body;
            if (!reqUser.email || !reqUser.senha) throw new ValidatorError('Invalid information', 400, "Invalid Arguments");
            
            const resposta:Auth = await UserController.userService.login(reqUser);
            return res.status(200).json({ status: 'success', resposta });
        } catch (erro) {
            if (erro instanceof ValidatorError) return res.status(erro.statusCode).json({ status: 'error', message: erro.message });
            return res.status(500).json({ status: 'error', message: 500 });
        }
    }

    static async CreateUser(req: Request, res: Response): Promise<Response> {
        try {
            const reqUser: CreateUserDTO = req.body;
            if (!reqUser.nome || !reqUser.email || !reqUser.senha || !reqUser.nivel_user) throw new Error('Invalid information');

            const resposta:ResponseUser = await UserController.userService.createUser(reqUser);
            return res.status(201).json({ status:"sucesss", resposta });
        } catch (error) {
            if (error instanceof ValidatorError) return res.status(error.statusCode).json({ status: 'error', message: error.message });
            return res.status(500).json({ status: 'error', message: 500 });
        }
    }

    static async UpdateUser(req: Request, res: Response): Promise<Response> {
        try {
            const reqUser: UpdateUser = req.body;
            if (!reqUser.id) throw new Error('ID is required');

            const resposta:ResponseUser = await UserController.userService.updateUser(reqUser);
            return res.status(201).json({ status: "Success", resposta });
        } catch (error) {
            if (error instanceof ValidatorError) return res.status(error.statusCode).json({ status: 'error', message: error.message });
            return res.status(500).json({ status: 'error', message: 500 });
        }
    }

    static async DeleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const resposta:ResponseUser = await UserController.userService.deleteUser(Number(id));
            return res.status(200).json({ status: "Success", resposta });
        } catch (error) {
            if (error instanceof ValidatorError) return res.status(error.statusCode).json({ status: 'error', message: error.message });
            return res.status(500).json({ status: 'error', message: 500 });
        }
    }

    static async ListUser(req: Request, res: Response): Promise<Response> {
        try {
            const resposta = await UserController.userService.listUser();
            return res.status(200).json({ status: "Success", resposta });
        } catch (error) {
            if (error instanceof ValidatorError) return res.status(error.statusCode).json({ status: 'error', message: error.message });
            return res.status(500).json({ status: 'error', message: 500  });
        }
    }
>>>>>>> ad15f9a60509215b678982e821fc3f52176ac351
}
