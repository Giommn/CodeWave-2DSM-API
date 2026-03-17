//Entrada
export interface CreateUserDTO{
    nome:string,
    senha:string,
    email:string
}

export interface UpdateUser{
    nome:string,
    email:string
}

export interface LoginDTO{
    email:string,
    senha:string
}

// Saida
export interface ResponseUser{
    id_user:number,
    user_name:string,
    email:string,  
    nivel_user:string
}

export interface Authenticacao{
    token:string,
    user:ResponseUser
}