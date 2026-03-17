import { ResponseUser } from "../dtos/user.dto";
export default interface IUser{
    getUser(id:number):Promise<ResponseUser>
    deleteUser(id:number):Promise<ResponseUser>
    updateUser(id:number,name?:string,senha?:string,email?:string):Promise<ResponseUser>
    listUser():Promise<Array<ResponseUser>>
    

    
}