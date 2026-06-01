import { prisma } from "../config/prisma";
import { ResponseUser, ResponseUserHash, CreateUserDTO, UpdateUser,NivelUser} from "../dtos/user.dto";
import { ValidatorError } from "../help/typeError";
import IUser from "../interfaces/user.Interface";

export default class UserRepository implements IUser {
  public async getUser(id?: number, email?: string): Promise<ResponseUserHash> {
    const where: any = {};
    if (id !== undefined) where.id_user = id;
    if (email !== undefined) where.email = email;

    const usuario = await prisma.users.findUnique({
      where: where,
      select: {
        id_user: true,
        user_name: true,
        email: true,
        nivel_user: true,
        user_senha_hash: true
      },
    });

    if (!usuario) throw new ValidatorError(`User not Found`, 400, 'Not Found');
    return usuario as ResponseUserHash;
  }

  public async deleteUser(id: number): Promise<ResponseUser> {
    try {
      return await prisma.users.delete({
        where: { id_user: id },
        select: { id_user: true, user_name: true, email: true, nivel_user: true },
      });
    } catch (erro) {
      throw new ValidatorError(`User not Found`, 400, erro.code);
    }
  }

  public async updateUser(usuario: UpdateUser): Promise<ResponseUser> {
    try {
      return await prisma.users.update({
        where: { id_user: usuario.id },
        data: {
          user_name: usuario.nome,
          email: usuario.email,
          user_senha_hash: usuario.senha,
        },
        select: { id_user: true, user_name: true, email: true, nivel_user: true }
      });
    } catch (error) {
      throw new ValidatorError("User not Found", 400, error.code);
    }
  }

  public async listUser(): Promise<Array<ResponseUser>> {
    const usuarios = await prisma.users.findMany({
      select: { id_user: true, user_name: true, email: true, nivel_user: true },
    });
    if (usuarios.length === 0) throw new ValidatorError("Not Exists Users", 400, "Not Found");
    return usuarios;
  }

  public async createUser(usuario: CreateUserDTO): Promise<ResponseUser> {
    try {
      return await prisma.users.create({
        data: {
          user_name: usuario.nome,
          email: usuario.email,
          user_senha_hash: usuario.senha,
          nivel_user: usuario.nivel_user
        },
        select: { id_user: true, user_name: true, email: true, nivel_user: true }
      });
    } catch (erro) {
      throw new ValidatorError("Duplicate Elements", 400, erro.code);
    }
  }
}
