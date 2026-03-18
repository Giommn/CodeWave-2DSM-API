import * as  jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { Auth, ResponseUser } from "../dtos/user.dto";

dotenv.config();


const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
  throw new Error('JWT_SECRET não definida no .env');
}


export function criarToken(usuario:ResponseUser) {
  return jwt.sign(
    { 
      id: usuario.id_user,
      user_name:usuario.user_name,
      email: usuario.email,
      nivel_user:usuario.nivel_user
    },
    SECRET,
    { expiresIn: '1d' }
  );
}

export function verificaToken(token:Auth){
  try {
    if( jwt.verify(token.token, SECRET))
    return {
      valido: true,
      dados: {
        id_user: token.user.id_user,
        user_name: token.user.user_name,
        email: token.user.email,
        nivel_user: token.user.user_name
      },
      expirou: false
    };
  } catch (erro) {
    return {
      valido: false,
      dados: null,
      expirou: erro.name === 'TokenExpiredError',
      erro: erro.message
    };
  }
}