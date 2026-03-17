import { prisma } from '../config/prisma';
import { ResponseUser } from '../dtos/user.dto';
import IUser from '../interfaces/user.Interface';

export default class UserRepositorie implements IUser {
    public async getUser(id: number): Promise<ResponseUser> {
        const usuario: ResponseUser | null = await prisma.users.findUnique({
            where: {
                id_user: id
            },
            select: {
                id_user: true,
                user_name: true,
                email: true,
                nivel_user: true
            }
        });

        if (!usuario) {
            throw new Error(`Usuário não foi encontrado`);
        }

        return usuario;
    }

    public async deleteUser(id: number): Promise<ResponseUser> {
       const usuario=await prisma.users.delete({
            where: {
                id_user: id
            },
            select: {
                id_user: true,
                user_name: true,
                email: true,
                nivel_user: true
            }
        });

       if(!usuario)throw new Error(`Usuário não foi encontrado`)
        return usuario
    }
}