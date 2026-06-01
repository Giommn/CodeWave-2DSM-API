import { prisma } from "../config/prisma";
import { CreateNormDTO, ResponseNorm, UpdateNormDTO } from "../dtos/norm.dto";
import INorm from "../interfaces/norm.interface";
import { ValidatorError } from "../help/typeError"; 

// =======================================================
// HELPER: Extrai a data ignorando o fuso horário (UTC puro)
// Impede que a meia-noite de um dia vire 21h do dia anterior
// =======================================================
const extrairDataEmissao = (dataUTC: Date | string | null | undefined): string => {
    if (!dataUTC) return "N/A";
    try {
        const d = new Date(dataUTC);
        const dia = d.getUTCDate().toString().padStart(2, '0');
        const mes = (d.getUTCMonth() + 1).toString().padStart(2, '0');
        const ano = d.getUTCFullYear();
        return `${dia}-${mes}-${ano}`;
    } catch {
        return "Data Inválida";
    }
};

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
                    },
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
                emissao: extrairDataEmissao(norma_.emissao),
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
                    },
                    categoria:{
                        select:{cat:{select:{cat_nome:true}}}
                    }
                }
            });

            const norma_filtrada: ResponseNorm = {
                norm_titulo: norma.norm_titulo,
                norm_desc: norma.norm_desc,
                org_criador: norma.orgaos.org_desc,
                emissao: extrairDataEmissao(norma.emissao),
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
        try {
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
                        normas_origem:{select:{norma_destino:{select:{norm_titulo:true}}}},
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
                    emissao: extrairDataEmissao(normaAtualizada.emissao),
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
        } catch(erro) {
            throw new ValidatorError("It was not possible to update the standard", 400, erro.message);
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
                data_criacao: true,
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
        });
        
        return normas.map(n => ({
            norm_titulo: n.norm_titulo,
            norm_desc: n.norm_desc,
            norm_codigo: n.norm_codigo,
            org_criador: n.orgaos.org_desc, 
            emissao: extrairDataEmissao(n.emissao),
            adm_criador:n.usuario.user_name,
            id_norm:n.id_norm,
            criacao:n.data_criacao.toLocaleDateString('pt-BR').replace(/\//g, '-'),
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
                        data_criacao: true,
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
        });

        return normas.map(n=>{
            return{
                norm_titulo: n.normas.norm_titulo,
                norm_desc: n.normas.norm_desc,
                norm_codigo: n.normas.norm_codigo,
                org_criador: n.normas.orgaos.org_desc, 
                emissao: extrairDataEmissao(n.normas.emissao),
                criacao: n.normas.data_criacao ? n.normas.data_criacao.toLocaleDateString('pt-BR').replace(/\//g, '-') : undefined,
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
            }
        });
    } 

    public async favoritarNorma(id_user:number,id_norm:number){
        try{
            await prisma.favoritos.create({
                data:{
                    id_norma:id_norm,
                    id_user:id_user
                }
            });
        }catch(error){
            throw new ValidatorError("Não foi possivel adicionar aos favoritos",400,error.message);
        }
    }

    public async tirarFavoritoNorma(id_user: number, id_norm: number): Promise<void> {
        try{
            await prisma.favoritos.delete({
                where:{id_user_id_norma:{id_norma:id_norm,id_user:id_user}},
            });
        }catch(error){
            throw new ValidatorError("Não foi possivel remover",400,error.message);
        }
    }

    public async pegarMinhasNormasFavoritas(id_user: number): Promise<Array<ResponseNorm>> {
        try{
            const listaNormas= await prisma.favoritos.findMany({
                where:{id_user:id_user},
                select:{
                    norma:{
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
                                select:{cat:{select:{cat_nome:true}}}
                            }
                        }
                    }
                }
            });

            return  listaNormas.map(n=>{
                return{
                    norm_titulo: n.norma.norm_titulo,
                    norm_desc: n.norma.norm_desc,
                    norm_codigo: n.norma.norm_codigo,
                    org_criador: n.norma.orgaos.org_desc, 
                    emissao: extrairDataEmissao(n.norma.emissao),
                    adm_criador:n.norma.usuario.user_name,
                    id_norm:n.norma.id_norm,
                    pdf_caminho:n.norma.pdf_caminho,
                    referencias:n.norma.normas_origem.map(ref=> ref.norma_destino.norm_titulo),
                    categoria:n.norma.categoria.map(cat=>cat.cat.cat_nome),
                    notas:n.norma.notas.map(nota=>{ return {
                        notaIT:nota.not_IT,
                        notaTitulo:nota.not_titulo,
                        notaAB:nota.not_AB,
                        notaPA:nota.not_Pa,
                        norm_criador:nota.normas.norm_titulo,
                        adm_criador:nota.usuario.user_name
                    }})
                }
            });
        }catch(erro){
            throw new ValidatorError("Ouve um erro ao procurar pelas suas normas",400,erro.message);
        }
    }

   public async PegarVersoesNormas(id_norm: number) {
     const versoes = await prisma.normas_Versoes.findMany({
       where: { norma_id: id_norm },
       select: {
         norm_titulo: true,
         norma_id: true,
         norma_codigo: true,
         emissao: true,
         criado_em: true,
         pdf_caminho: true,
         norm_dec: true,
         norma: {
           select: {
             categoria: {
               select: {
                 cat: { select: { cat_nome: true } }
               }
             },
             orgaos: {
               select: { org_desc: true }
             },
             notas: {
               select: {
                 not_IT: true,
                 not_titulo: true,
                 not_AB: true,
                 not_Pa: true,
                 normas: { select: { norm_titulo: true } },
                 usuario: { select: { user_name: true } }
               }
             },
             normas_origem: {
               select: {
                 norma_destino: { select: { norm_titulo: true } }
               }
             },
             adm_criador: true,
             emissao: true
           }
         }
       }
     });

     return versoes.map((normas) => ({
       norm_titulo: normas.norm_titulo,
       norm_desc: normas.norm_dec,
       org_criador: normas.norma.orgaos.org_desc,
       emissao: extrairDataEmissao(normas.norma.emissao),
       norm_codigo: normas.norma_codigo,
       adm_criador: String(normas.norma.adm_criador),
       id_norm: normas.norma_id,
       pdf_caminho: normas.pdf_caminho,
       referencias: normas.norma.normas_origem.map((ref) => ref.norma_destino.norm_titulo),
       categoria: normas.norma.categoria.map((cat) => cat.cat.cat_nome),
       criado:normas.criado_em.toLocaleDateString('pt-BR').replace(/\//g, '-'),
       notas: normas.norma.notas.map((nota) => ({
         notaIT: nota.not_IT,
         notaTitulo: nota.not_titulo,
         notaAB: nota.not_AB,
         notaPA: nota.not_Pa,
         norm_criador: nota.normas.norm_titulo,
         adm_criador: nota.usuario.user_name,
       })),
     }));
   }
}