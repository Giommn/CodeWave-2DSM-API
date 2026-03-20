//Entrada
export interface CreateUserDTO {
  nome: string;
  senha: string;
  email: string;
  nivel_user:string
}

export interface UpdateUser {
  nome?: string;
  email?: string;
  senha?: string;
}

export interface LoginDTO {
  email: string;
  senha: string;
}
export type NivelUser="ADM" | "USER"
// Saida
export interface ResponseUser {
  id_user: number;
  user_name: string;
  email: string;
  nivel_user: string;
}

export interface Auth {
  token: string;
  user: ResponseUser;
}

export interface ResponseUserHash extends ResponseUser{
      user_senha_hash:string
}

