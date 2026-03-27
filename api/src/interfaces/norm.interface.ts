import { CreateNormDTO, ResponseNorm, UpdateNormDTO } from "../dtos/norm.dto";

export default interface INorm{
    getNorms():Promise<Array<ResponseNorm>>
    createNorm(norma:CreateNormDTO):Promise<ResponseNorm>
    updateNorm(norma:UpdateNormDTO):Promise<ResponseNorm>
    deleteNorm(id:string,norm_codigo:string):Promise<ResponseNorm>
    getHistocNorms(id_user:number):Promise<Array<ResponseNorm>>
    saveNormsInHistoric(id_norm:number,id_user:number):Promise<void>

}