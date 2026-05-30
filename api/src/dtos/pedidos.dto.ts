import { Prisma } from "../generated/prisma"
import { CreateNormDTO, UpdateNormDTO } from "./norm.dto"

export  interface CreatePedidosDTO{
    id_user:number
    alteracao:PedidoJson
    acaoAlteracao: acaoDealteracao
    tipo:NotaOrNorma
    status:Status
    id_norma?:number
};

type PedidoJson = UpdateNormDTO | CreateNormDTO | Prisma.JsonValue;

type acaoDealteracao= "CREATE" | "UPDATE"


type NotaOrNorma = "NORMA" | "NOTA"

export type Status= "PENDENTE"| "REJEITADO" | "APROVADO"

// Saida 

export interface ResponsePedidos{
        id_pedido:number
        user_name:string
        alteracao:PedidoJson 
        acaoAlteracao:string
        tipo:string 
        status:string 
        norma_nome?:string
        data_pedido:Date
}
