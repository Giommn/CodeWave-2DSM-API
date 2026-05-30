import { CreateNormDTO, ResponseNorm, UpdateNormDTO } from "../dtos/norm.dto";

export default interface INorm{
    getNorms():Promise<Array<ResponseNorm>>
    createNorm(norma:CreateNormDTO):Promise<ResponseNorm>
    updateNorm(norma:UpdateNormDTO):Promise<ResponseNorm>
    deleteNorm(id:number):Promise<ResponseNorm>
    getHistoricNorms(id_user:number):Promise<Array<ResponseNorm>>
    saveNormsInHistoric(id_norm:number,id_user:number):Promise<void>
    favoritarNorma(id_user:number,id_norm:number):Promise<void>
    tirarFavoritoNorma(id_user:number,id_norm:number):Promise<void>
    pegarMinhasNormasFavoritas(id_user:number):Promise<Array<ResponseNorm>>
}