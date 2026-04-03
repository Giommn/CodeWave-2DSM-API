<<<<<<< HEAD
import { Auth, ResponseUserHash ,NivelUser, ResponseUser} from "../dtos/user.dto";
=======
import { Auth, ResponseUser, CreateUserDTO, UpdateUser, LoginDTO } from "../dtos/user.dto";
>>>>>>> ad15f9a60509215b678982e821fc3f52176ac351
import bcrypt from 'bcryptjs';
import * as jw from '../config/jwt';
import UserRepository from "../repositories/user.Repository";
import { ValidatorError } from "../help/typeError";
<<<<<<< HEAD
=======

export default class UserService {
    constructor(private userRepository: UserRepository) {}
>>>>>>> ad15f9a60509215b678982e821fc3f52176ac351

    public async login(reqUser: LoginDTO): Promise<Auth> {
        const userCompleto = await this.userRepository.getUser(undefined, reqUser.email);
        
<<<<<<< HEAD
     const userCompleto:ResponseUserHash= await this.userRepository.getUser(undefined,email);
     
             if(!userCompleto || !await bcrypt.compare(senha,userCompleto.user_senha_hash ) )throw new ValidatorError('Invalid information',400,"Not Found");

        return {
            token:jw.criarToken(userCompleto),
            user:{
                
                user_name:userCompleto.user_name,
                email:userCompleto.email
=======
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
>>>>>>> ad15f9a60509215b678982e821fc3f52176ac351
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
<<<<<<< HEAD

    }

    public async createUser(nome: string, email: string, senha: string,nivel_user:NivelUser):Promise<ResponseUser>{
            
            senha= await bcrypt.hash(senha,10)
            const  user:ResponseUser=await this.userRepository.createUser(nome,email,senha,nivel_user);
            return user;
           }
    public async updateUser(id: number, nome?: string, email?: string, senha?: string):Promise<ResponseUser>{
            if (senha){ 
                senha = await bcrypt.hash(senha,10)
            }
            const user:ResponseUser=await this.userRepository.updateUser(id,nome,email,senha);
                return user; 
  
    }
    public async deleteUser(id: number):Promise<ResponseUser>{
        const user:ResponseUser=await this.userRepository.deleteUser(id);
        return user;

    }
    public async listUser():Promise<Array<ResponseUser>>{
        const users:Array<ResponseUser>=await this.userRepository.listUser()
        return users
    }
}  
=======
        return await this.userRepository.updateUser(reqUser);
    }

    public async deleteUser(id: number): Promise<ResponseUser> {
        return await this.userRepository.deleteUser(id);
    }

    public async listUser(): Promise<Array<ResponseUser>> {
        return await this.userRepository.listUser();
    }
}
>>>>>>> ad15f9a60509215b678982e821fc3f52176ac351
