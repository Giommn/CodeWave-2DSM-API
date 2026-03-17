import { ResponseUser } from "../dtos/user.dto";
export default interface UserRepository{
    public getUser(id:number):Promise<ResponseUser>{
  
    }
}