import { error } from "node:console";
import { prisma } from "../config/prisma";
import { ResponseUser } from "../dtos/user.dto";
import { NivelUser } from "../generated/prisma";
import { Public } from "../generated/prisma/runtime/client";
import IUser from "../interfaces/user.Interface";

export default class UserRepository implements IUser {
  public async getUser(id: number): Promise<ResponseUser> {
    const usuario: ResponseUser | null = await prisma.users.findUnique({
      where: {
        id_user: id,
      },
      select: {
        id_user: true,
        user_name: true,
        email: true,
        nivel_user: true,
      },
    });

    if (!usuario) {
      throw new Error(`User not found`);
    }

    return usuario;
  }

  public async deleteUser(id: number): Promise<ResponseUser> {
    const usuario = await prisma.users.delete({
      where: {
        id_user: id,
      },
      select: {
        id_user: true,
        user_name: true,
        email: true,
        nivel_user: true,
      },
    });

    if (!usuario) throw new Error(`User not found`);
    return usuario;
  }

  public async updateUser(
    id: number,
    name?: string,
    senha?: string,
    email?: string,
  ): Promise<ResponseUser> {
    try {
      const usuario = await prisma.users.update({
        where: {
          id_user: id,
        },
        data: {
          id_user: id,
          user_name: name != null ? name : undefined,
          email: email != null ? email : undefined,
          user_senha_hash: senha != null ? senha : undefined,
        },
      });
      return usuario;
    } catch (Error) {
      throw new Error("Unique constraint failed: duplicated register");
    }
  }
  public async listUser(): Promise<Array<ResponseUser>> {
    const usuario = await prisma.users.findMany({
      select: {
        id_user: true,
        user_name: true,
        email: true,
        nivel_user: true,
      },
    });
    if (!usuario) {
      throw new Error(`No users found`);
    } 
    return usuario;
  }
}
