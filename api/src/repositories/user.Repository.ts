import { prisma } from "../config/prisma";
import { ResponseUser, ResponseUserHash,NivelUser } from "../dtos/user.dto";
import { PrismaError } from "../help/typeError";
import IUser from "../interfaces/user.Interface";

export default class UserRepository implements IUser {
  public async getUser(id?: number,email?:string): Promise<ResponseUserHash> {
    const where: any = {}
   if (id !== undefined) where.id_user = id
   if (email !== undefined) where.email = email
    const usuario: ResponseUserHash = await prisma.users.findUnique({
      where: where,
      select: {
        id_user: true,
        user_name: true,
        email: true,
        nivel_user: true,
        user_senha_hash:true
        
      },
    });

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
    } catch (error) {
      throw PrismaError.verifyError(error)
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
   
    return usuario;
  }

  public async createUser(nome: string, email: string, senha: string,nivel_user:NivelUser): Promise<ResponseUser> {
    try{
            const usuario:ResponseUser=await prisma.users.create({
              data:{
                user_name:nome,
                email:email,
                user_senha_hash:senha,
                nivel_user:nivel_user
              },
              select: {
        id_user: true,
        user_name: true,
        email: true,
        nivel_user: true
      
                    }
            })

            return usuario;
          }catch(error){
           throw PrismaError.verifyError(error)
          }

  }
  
     

}
