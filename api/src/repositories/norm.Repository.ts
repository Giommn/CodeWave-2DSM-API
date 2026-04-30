 import { prisma } from "../config/prisma";

import { CreateNormDTO, ResponseNorm, UpdateNormDTO } from "../dtos/norm.dto";

import INorm from "../interfaces/norm.interface";

import { ValidatorError } from "../help/typeError"; 

export default class NormRepository implements INorm {

    public async createNorm(norma: CreateNormDTO): Promise<ResponseNorm> {
        try {
            const norma_ = await prisma.norma.create({
                data: {
                    norm_titulo: norma.norm_titulo,
                    norm_desc: norma.norm_desc,
                    norm_codigo: norma.norm_codigo,
                    
                    emissao: new Date(norma.emissao),
                    pdf_nome_original: norma.pdf_nome_original,
                    pdf_caminho: norma.pdf_caminho,
                    usuario: { connect: { id_user: norma.adm_criador } },
                    orgaos: {
                        connectOrCreate: {
                            where: { org_desc: norma.org_desc },
                            create: {
                                org_desc: norma.org_desc,
                                org_sigla: norma.org_sigla,
                                usuarios: { connect: { id_user: norma.adm_criador } },
                            }
                        },
                    },
                 normas_origem: {
                    create: norma.referencias?.map(id => ({ norma_destino_id: id }))
                }
                ,
                notas:{
                    create: norma.notas?.map(nota=>({
                        not_titulo:nota.notaTitulo,
                        not_IT:nota.notaIT,
                        not_AB:nota.notaAB,
                        not_Pa:nota.notaPA,
                        usuario:{ connect:{id_user:nota.adm_criador}},
                        
                    }))
                },
                categoria:{
                       create: norma.categoria?.map(categoria=>({
                          cat:{
                            connectOrCreate:{
                                where:{cat_nome:categoria},
                                create:{
                                    cat_nome:categoria,
                                    adm_criador:norma.adm_criador
                                }
                            }
                          }
                       }))
                }
                },
                select: {
                    norm_titulo: true,
                    norm_desc: true,
                    norm_codigo: true,
                    emissao: true,
                    orgaos: { select: { org_desc: true } },
                    usuario:{select:{user_name:true}},
                    id_norm:true,
                    normas_origem: {
                        select:{norma_destino:{
                            select:{norm_titulo:true}
                        }}
                    },
                    pdf_caminho:true,
                    notas:{
                        select:{
                            not_IT:true,
                            not_titulo:true,
                            not_AB:true,
                            not_Pa:true,
                            normas:{
                                select:{norm_titulo:true}
                            },
                           usuario:{
                            select:{user_name:true}
                           }
                        }
                    },
                    categoria:{
                        select: {cat:{select:{cat_nome:true}}}
                    }
                }
            });

            const norma_filtrada: ResponseNorm = {
                norm_titulo: norma_.norm_titulo,
                norm_desc: norma_.norm_desc,
                org_criador: norma_.orgaos.org_desc,
                emissao: norma_.emissao.toLocaleDateString('pt-BR').replace(/\//g, '-'),
                norm_codigo: norma_.norm_codigo,
                adm_criador:norma_.usuario.user_name,
                id_norm:norma_.id_norm,
                pdf_caminho:norma_.pdf_caminho,
                referencias:norma_.normas_origem.map(ref=> ref.norma_destino.norm_titulo),
                categoria:norma_.categoria.map(cat=>cat.cat.cat_nome),
                notas:norma_.notas.map(nota=>{ return {
                     notaIT:nota.not_IT,
                     notaTitulo:nota.not_titulo,
                     notaAB:nota.not_AB,
                     notaPA:nota.not_Pa,
                     norm_criador:nota.normas.norm_titulo,
                     adm_criador:nota.usuario.user_name
                     
            }})

            };

            return norma_filtrada;

        } catch (error) {
           
            throw new ValidatorError("Could not create norm or already exists.", 400, error.message);
        }
    }

    public async deleteNorm(id: number): Promise<ResponseNorm> {
        try {
            const norma = await prisma.norma.delete({
                where: { id_norm:id },
                select: {
                    norm_titulo: true,
                    norm_desc: true,
                    norm_codigo: true,
                    emissao: true,
                    orgaos: { select: { org_desc: true } },
                    usuario:{select:{user_name:true}},
                    id_norm:true,
                      normas_origem: {
                        select:{norma_destino:{
                            select:{norm_titulo:true}
                        }}
                    },
                    pdf_caminho:true,
                     notas:{
                        select:{
                            not_IT:true,
                            not_titulo:true,
                            not_AB:true,
                            not_Pa:true,
                            normas:{
                                select:{norm_titulo:true}
                            },
                           usuario:{
                            select:{user_name:true}
                           }
                        }
                    }
                    ,
                    categoria:{
                        select:{cat:{select:{cat_nome:true}}}
                    }
                
                }
            });

            const norma_filtrada: ResponseNorm = {
                norm_titulo: norma.norm_titulo,
                norm_desc: norma.norm_desc,
                org_criador: norma.orgaos.org_desc,
                emissao: norma.emissao.toLocaleDateString('pt-BR').replace(/\//g, '-'),
                norm_codigo: norma.norm_codigo,
                adm_criador:norma.usuario.user_name,
                id_norm:norma.id_norm,
                pdf_caminho:norma.pdf_caminho,
                referencias:norma.normas_origem.map(ref=> ref.norma_destino.norm_titulo),
                 categoria:norma.categoria.map(cat=>cat.cat.cat_nome),
                   notas:norma.notas.map(nota=>{ return {
                     notaIT:nota.not_IT,
                     notaTitulo:nota.not_titulo,
                     notaAB:nota.not_AB,
                     notaPA:nota.not_Pa,
                     norm_criador:nota.normas.norm_titulo,
                     adm_criador:nota.usuario.user_name
            }})
                
            };

            return norma_filtrada;
        } catch (error) {
            throw new ValidatorError("Could not delete norm", 400, error.message);
        }
    }
   public async updateNorm(update_norm: UpdateNormDTO): Promise<ResponseNorm> {
    try{
   return await prisma.$transaction(async (tx) => {


const normaOriginal = await tx.norma.findUnique({
where: { norm_codigo: update_norm.norm_codigoAtual },
include: { _count: { select: { versoes: true } } }
 });

if (!normaOriginal) {
throw new ValidatorError("Not Found Norm", 400);
}

const tempoUpdate = new Date();

await tx.normas_Versoes.create({
data: {
norma_id: normaOriginal.id_norm,
norma_codigo: normaOriginal.norm_codigo, 
 norm_titulo: normaOriginal.norm_titulo,
 norm_dec: normaOriginal.norm_desc,
emissao: normaOriginal.emissao,


criado_em: normaOriginal.data_update,
criado_em_novo: tempoUpdate,

pdf_nome_original: normaOriginal.pdf_nome_original,
pdf_caminho: normaOriginal.pdf_caminho,
}
 });


 const normaAtualizada = await tx.norma.update({
 where: { id_norm: normaOriginal.id_norm },
data: {
norm_codigo: update_norm.norm_codigo,
 norm_titulo: update_norm.norm_titulo,
 emissao: new Date(update_norm.emissao),
  norm_desc: update_norm.norm_desc,
 pdf_nome_original: update_norm.pdf_nome_original,
 pdf_caminho: update_norm.pdf_caminho,
 },
 select: {
 norm_titulo: true,
  norm_desc: true,
 norm_codigo: true,
 emissao: true,
  orgaos: { select: { org_desc: true } },
  usuario:{select:{user_name:true}},
  id_norm:true,
  normas_origem:{select:{norma_destino:{select:{norm_titulo:true},


}}},
pdf_caminho:true,
categoria:{
    select:{cat:{select:{cat_nome:true}}}
},
  notas:{
                        select:{
                            not_IT:true,
                            not_titulo:true,
                            not_AB:true,
                            not_Pa:true,
                            normas:{
                                select:{norm_titulo:true}
                            },
                           usuario:{
                            select:{user_name:true}
                           }
                        }
                    }

 }
 });
 return {
 norm_titulo: normaAtualizada.norm_titulo,
 norm_desc: normaAtualizada.norm_desc,
org_criador: normaAtualizada.orgaos.org_desc,
 emissao: normaAtualizada.emissao.toLocaleDateString('pt-BR').replace(/\//g, '-'),
norm_codigo: normaAtualizada.norm_codigo,
adm_criador:normaAtualizada.usuario.user_name,
id_norm:normaAtualizada.id_norm,
pdf_caminho:normaAtualizada.pdf_caminho,
referencias:normaAtualizada.normas_origem.map(ref=> ref.norma_destino.norm_titulo),
categoria:normaAtualizada.categoria.map(cat=>cat.cat.cat_nome),
   notas:normaAtualizada.notas.map(nota=>{ return {
                     notaIT:nota.not_IT,
                     notaTitulo:nota.not_titulo,
                     notaAB:nota.not_AB,
                     notaPA:nota.not_Pa,
                     norm_criador:nota.normas.norm_titulo,
                     adm_criador:nota.usuario.user_name
            }})
};
});
    }catch(erro){
        throw new ValidatorError("It was not possible to update the standard",400,erro.message);
    }
}
    public async getNorms(): Promise<Array<ResponseNorm>> {
        const normas= await prisma.norma.findMany({
            select:{
                norm_titulo:true,
                norm_desc:true,
                orgaos:{select:{org_desc:true}},
                emissao:true,
                norm_codigo:true,
                usuario:{select:{user_name:true}},
                id_norm:true,
                normas_origem:{select:{norma_destino:{select:{norm_titulo:true}}}},
                pdf_caminho:true,
                categoria:{
                    select: {cat:{select:{cat_nome:true}}}
                },
                notas:{
                    select:{
                        not_IT:true,
                            not_titulo:true,
                            not_AB:true,
                            not_Pa:true,
                            normas:{
                                select:{norm_titulo:true}
                            },
                           usuario:{
                            select:{user_name:true}
                           }
                    }
                }
            }
        })
        return normas.map(n => ({
        norm_titulo: n.norm_titulo,
        norm_desc: n.norm_desc,
        norm_codigo: n.norm_codigo,
        org_criador: n.orgaos.org_desc, 
        emissao: n.emissao.toLocaleDateString('pt-BR').replace(/\//g, '-'),
        adm_criador:n.usuario.user_name,
        id_norm:n.id_norm,
        pdf_caminho:n.pdf_caminho,
        referencias:n.normas_origem.map(ref=> ref.norma_destino.norm_titulo),
        categoria:n.categoria.map(cat=>cat.cat.cat_nome),
        notas:n.notas.map(nota=>{ return {
                     notaIT:nota.not_IT,
                     notaTitulo:nota.not_titulo,
                     notaAB:nota.not_AB,
                     notaPA:nota.not_Pa,
                     norm_criador:nota.normas.norm_titulo,
                     adm_criador:nota.usuario.user_name
            }})
    }));
        
    }
   public async saveNormsInHistoric(id_norm: number, id_user: number):Promise<void> {
       try {
        await prisma.historico_Acesso_Normas.upsert({
            where: {
               
                id_norma_id_user: {
                    id_norma: id_norm,
                    id_user: id_user
                }
            },
            update: {
               
                data_acesso: new Date()
            },
            create: {
              
                id_norma: id_norm,
                id_user: id_user,
                data_acesso: new Date()
            }
        });

    } catch (erro) {
        throw new ValidatorError("Não foi possível salvar no histórico", 400, erro.message);
    }
    }
    public async getHistoricNorms(id_user: number): Promise<Array<ResponseNorm>> {
        const normas= await prisma.historico_Acesso_Normas.findMany({
            where: {id_user:id_user},
            take:10,
            orderBy:{
                data_acesso:'desc'
            },
            select:{
               normas:{
                   select:{
                    id_norm:true,
                    norm_titulo:true,
                    norm_desc:true,
                    norm_codigo:true,
                    emissao:true,
                    orgaos:{select:{org_desc:true}},
                    usuario:{select:{user_name:true}},
                    normas_origem:{
                        select:{norma_destino:{select:{norm_titulo:true}}}
                    },
                    pdf_caminho:true,
                    notas:{
                    select:{
                        not_IT:true,
                            not_titulo:true,
                            not_AB:true,
                            not_Pa:true,
                            normas:{
                                select:{norm_titulo:true}
                            },
                           usuario:{
                            select:{user_name:true}
                           }
                    }
                },
                categoria:{
                    select:{cat:{select:{cat_nome:true}}}
                }
                   }
                   
               }
            }
        })
        return normas.map(n=>{
      return{
        norm_titulo: n.normas.norm_titulo,
        norm_desc: n.normas.norm_desc,
        norm_codigo: n.normas.norm_codigo,
        org_criador: n.normas.orgaos.org_desc, 
        emissao: n.normas.emissao.toLocaleDateString('pt-BR').replace(/\//g, '-'),
        adm_criador:n.normas.usuario.user_name,
        id_norm:n.normas.id_norm,
        pdf_caminho:n.normas.pdf_caminho,
        referencias:n.normas.normas_origem.map(ref=> ref.norma_destino.norm_titulo),
        categoria:n.normas.categoria.map(cat=>cat.cat.cat_nome),
        notas:n.normas.notas.map(nota=>{ return {
                     notaIT:nota.not_IT,
                     notaTitulo:nota.not_titulo,
                     notaAB:nota.not_AB,
                     notaPA:nota.not_Pa,
                     norm_criador:nota.normas.norm_titulo,
                     adm_criador:nota.usuario.user_name
            }})
    }});
        } 

    
    }