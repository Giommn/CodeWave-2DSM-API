import { ResponseUser } from "../dtos/user.dto";
export default interface IUser {
  getUser(id: number,email:string): Promise<ResponseUser>;
  deleteUser(id: number): Promise<ResponseUser>;
  updateUser(
    id: number,
    name?: string,
    senha?: string,
    email?: string,
  ): Promise<ResponseUser>;
  listUser(): Promise<Array<ResponseUser>>;
  createUser(nome:string,email:string,senha:string,nivel_user:string):Promise<ResponseUser>
}
