import { Auth, ResponseUserHash, NivelUser, ResponseUser, CreateUserDTO, UpdateUser, LoginDTO } from "../dtos/user.dto";
import bcrypt from 'bcryptjs';
import * as jw from '../config/jwt';
import UserRepository from "../repositories/user.Repository";
import { ValidatorError } from "../help/typeError";

export default class UserService {
    constructor(private userRepository: UserRepository) {}

    public async login(reqUser: LoginDTO): Promise<Auth> {
        const userCompleto = await this.userRepository.getUser(undefined, reqUser.email);
        
        if (!userCompleto || !await bcrypt.compare(reqUser.senha, userCompleto.user_senha_hash)) {
            throw new ValidatorError('Invalid information', 400, "Not Found");
        }

        return {
            token: jw.criarToken(userCompleto),
            user: {
                id_user: userCompleto.id_user,
                user_name: userCompleto.user_name,
                email: userCompleto.email,
                nivel_user: userCompleto.nivel_user
            }
        };
    }

    public async createUser(reqUser: CreateUserDTO): Promise<ResponseUser> {
        reqUser.senha = await bcrypt.hash(reqUser.senha, 10);
        return await this.userRepository.createUser(reqUser);
    }

    public async updateUser(reqUser: UpdateUser): Promise<ResponseUser> {
        if (reqUser.senha) {
            reqUser.senha = await bcrypt.hash(reqUser.senha, 10);
        }
        return await this.userRepository.updateUser(reqUser);
    }

    public async deleteUser(id: number): Promise<ResponseUser> {
        return await this.userRepository.deleteUser(id);
    }

    public async listUser(): Promise<Array<ResponseUser>> {
        return await this.userRepository.listUser();
    }
}
