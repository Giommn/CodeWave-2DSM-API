import { Auth, ResponseUserHash } from "../dtos/user.dto";
import bcrypt from 'bcryptjs';
import * as jw from '../config/jwt'
import UserRepository from "../repositories/user.Repository";


export default class UserService{
    constructor(
        private userRepository:UserRepository,
    ){}

    public async login(email:string,senha:string):Promise<Auth>{
        
     const userCompleto:ResponseUserHash= await this.userRepository.getUser(undefined,email);
             if(!await bcrypt.compare(senha,userCompleto.user_senha_hash) )throw new Error('Invalid information');

        return {
            token:jw.criarToken(userCompleto),
            user:{
                id_user:userCompleto.id_user,
                user_name:userCompleto.user_name,
                nivel_user:userCompleto.nivel_user,
                email:userCompleto.email
            }
        }
     
}
}
