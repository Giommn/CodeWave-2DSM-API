import { Auth } from "../dtos/user.dto";
import bcrypt from 'bcryptjs';
import UserRepository from "../repositories/user.Repository";


export default class UserService{
    constructor(
        private userRepository:UserRepository,
    ){}

    public async login(email:string,senha:string):Promise<Auth>{
 

    }
}