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
    id:number,
    nome:string,
    email:string,
    data_cricao:Date
}

export interface Authenticacao{
    token:string,
    user:ResponseUser
}