import { prisma } from "../config/prisma";
import { CreateNormDTO, ResponseNorm } from "../dtos/norm.dto";
import INorm from "../interfaces/norm.interface";
import { ValidatorError } from "../help/typeError";

export default class NormRepository implements INorm{

    public async createNorm(norma: CreateNormDTO): Promise<ResponseNorm> {
     try{
        const norma_ = await prisma.norma.create({
            data:{
                norm_titulo:norma.norm_titulo,
                norm_desc:norma.norm_desc,
                norm_codigo:norma.norm_codigo,
                emissao:norma.emissao,
                pdf_nome_original:norma.pdf_nome_original,
                pdf_caminho:norma.pdf_caminho,
                usuario:{connect:{id_user:norma.adm_criador}},
                orgaos:{
                connectOrCreate:{
                    where:{org_desc:norma.org_desc},
                    create:{
                        org_desc:norma.org_desc,
                        org_sigla:norma.org_sigla,
                        usuario:{connect:{id_user:norma.adm_criador}},
                    }
                }
            },
            },

            select:{
                norm_titulo: true,
                norm_codigo: true,
                org_criador: true,
                norm_desc: true,
                emissao: true,
                orgaos: {select:{org_desc:true}}
            }
        }) const norma_filtrada:ResponseNorm = {
                norm_titulo: norma_.norm_titulo,
                norm_desc: norma_.norm_desc,
                org_criador: norma_.orgaos.org_desc,
                emissao: norma_.emissao
                norm_codigo: norma_.codigo

        } return norma_filtrada
     } catch(error){
        throw new ValidatorError("Could'nt create norm or already exists.",400)
     }
             
        
    }
    public async deleteNorm(id: string, norm_codigo: string): Promise<ResponseNorm> {
        try{
            const norma = await prisma.norma.delete({
                where:{
                    norm_codigo: norm_codigo
                }, select:{
                        norm_titulo: true,
                        norm_codigo: true,
                        org_criador: true,
                        norm_desc: true,
                        emissao: true,
                        orgaos: {select:{org_desc:true}} 
                }

            }) const norma_filtrada:ResponseNorm = {
                norm_titulo: norma_.norm_titulo,
                norm_desc: norma_.norm_desc,
                org_criador: norma_.orgaos.org_desc,
                emissao: norma_.emissao
                norm_codigo: norma_.codigo

        } return norma_filtrada 
    } catch(error){
        throw new ValidatorError("Could'nt delete norm",400)
    }
    }
}
