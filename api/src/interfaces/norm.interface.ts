import { CreateNormDTO, ResponseNorm, UpdateNormDTO } from "../dtos/norm.dto";

export default interface INorm{
    getNorm(normcod:string):Promise<ResponseNorm>
    createNorm(norma:CreateNormDTO):Promise<ResponseNorm>
    updateNorm(norma:UpdateNormDTO):Promise<ResponseNorm>
    deleteNorm(id:string,norm_codigo:string):Promise<ResponseNorm>

}