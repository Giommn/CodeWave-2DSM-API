import { prisma } from "../config/prisma";
import { CreateNormDTO, ResponseNorm } from "../dtos/norm.dto";
import INorm from "../interfaces/norm.interface";

export default class NormRepository implements INorm{
    public createNorm(norma: CreateNormDTO): Promise<ResponseNorm> {
     try{
        return await prisma.norma.create({
            data:{
                norm_titulo:norma.norm_titulo,
                norm_desc:norma.norm_desc,
                norm_codigo:norma.norm_codigo,
                emissao:norma.emissao,
                pdf_nome_original:norma.pdf_nome_original,
                pdf_caminho:norma.pdf_caminho
            }
        })
     }
             
        
    }
}