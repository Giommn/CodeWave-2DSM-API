<<<<<<< HEAD
import { ResponseUser,NivelUser } from "../dtos/user.dto";
=======
import { ResponseUser, CreateUserDTO, UpdateUser } from "../dtos/user.dto";

>>>>>>> ad15f9a60509215b678982e821fc3f52176ac351
export default interface IUser {
  getUser(id?: number, email?: string): Promise<ResponseUser>;
  deleteUser(id: number): Promise<ResponseUser>;
  updateUser(usuario: UpdateUser): Promise<ResponseUser>;
  listUser(): Promise<Array<ResponseUser>>;
<<<<<<< HEAD
  createUser(nome:string,email:string,senha:string,nivel_user:NivelUser):Promise<ResponseUser>
=======
  createUser(usuario: CreateUserDTO): Promise<ResponseUser>;
>>>>>>> ad15f9a60509215b678982e821fc3f52176ac351
}
