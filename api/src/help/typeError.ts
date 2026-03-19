import { Prisma } from "../generated/prisma";
export class PrismaError{
  
    static async verifyError(erro:unknown){
    if(erro instanceof Prisma.PrismaClientKnownRequestError)
       switch(erro.code){
        case 'P2002':return new Error("Duplicate Elemets");
        case 'P2025':return new Error("Register Not Found");
        case 'P2011':return new Error("Camp Obrigatiob");
        case  'P2003':return new Error("Foreign Key Error")
        case 'P2014':return new Error("Relation  Error")
        case 'P2000':return new Error("Value too longo")
        default: return new Error("500");
       }
    else if(erro instanceof Error){
        switch(erro.message){
            case 'Invalid information':return erro;
            default: return new Error("500");
        }

    }
    }
   
}

