import { Request, Response } from "express";
import UserService from "../service/user.Service";
import UserRepository from "../repositories/user.Repository";
import { Auth, ResponseUser, CreateUserDTO, UpdateUser, LoginDTO } from "../dtos/user.dto";
import { ValidatorError } from "../help/typeError";

export default class UserController {
    private static userRepository = new UserRepository();
    private static userService = new UserService(UserController.userRepository);

    static async loginUser(req: Request, res: Response): Promise<Response> {
        try {
            const reqUser: LoginDTO = req.body;
            if (!reqUser.email || !reqUser.senha) throw new ValidatorError('Invalid information', 400, "Invalid Arguments");
            
            const resposta:Auth = await UserController.userService.login(reqUser);
            return res.status(200).json({ status: 'success', resposta });
        } catch (erro) {
            if (erro instanceof ValidatorError) return res.status(erro.statusCode).json({ status: 'error', message: erro.message });
            return res.status(500).json({ status: 'error', code: 500 });
        }
    }

    static async CreateUser(req: Request, res: Response): Promise<Response> {
        try {
            const reqUser: CreateUserDTO = req.body;
            if (!reqUser.nome || !reqUser.email || !reqUser.senha || !reqUser.nivel_user) throw new Error('Invalid information');

            const resposta:ResponseUser = await UserController.userService.createUser(reqUser);
            return res.status(200).json({ resposta });
        } catch (error) {
            if (error instanceof ValidatorError) return res.status(error.statusCode).json({ status: 'error', message: error.message });
            return res.status(500).json({ status: 'error', message: error.message });
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
            return res.status(500).json({ status: 'error', message: error.message });
        }
    }

    static async DeleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const resposta:ResponseUser = await UserController.userService.deleteUser(Number(id));
            return res.status(200).json({ status: "Success", resposta });
        } catch (error) {
            if (error instanceof ValidatorError) return res.status(error.statusCode).json({ status: 'error', message: error.message });
            return res.status(500).json({ status: 'error', message: error.message });
        }
    }

    static async ListUser(req: Request, res: Response): Promise<Response> {
        try {
            const resposta = await UserController.userService.listUser();
            return res.status(200).json({ status: "Success", resposta });
        } catch (error) {
            if (error instanceof ValidatorError) return res.status(error.statusCode).json({ status: 'error', message: error.message });
            return res.status(500).json({ status: 'error', message: error.message });
        }
    }
}
