import { ResponseUser, CreateUserDTO, UpdateUser } from "../dtos/user.dto";

export default interface IUser {
  getUser(id?: number, email?: string): Promise<ResponseUser>;
  deleteUser(id: number): Promise<ResponseUser>;
  updateUser(usuario: UpdateUser): Promise<ResponseUser>;
  listUser(): Promise<Array<ResponseUser>>;
  createUser(usuario: CreateUserDTO): Promise<ResponseUser>;
}
