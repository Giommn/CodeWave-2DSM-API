import { prisma } from "../config/prisma";
import { CreateNotaDTO, ResponseNota } from "../dtos/nota.dto";
import Nota from "../interfaces/nota.interface";

export default class  NotaRepositorie implements Nota{
       public async createNota(nota: CreateNotaDTO): Promise<ResponseNota> {
     const respostaNota= await  prisma.notas.create({
            data:{
                not_titulo:nota.notaTitulo,
                not_IT:nota.notaIT,
                not_AB:nota.notaAB,
                not_Pa:nota.notaPA,
                norm_criador:nota.norm_criador,
                adm_criador:nota.adm_criador
            },
            select:{
                not_titulo:true,
                not_AB:true,
                not_IT:true,
                not_Pa:true,
                usuario:{
                      select:{user_name:true}
                },
                normas:{
                    select:{norm_titulo:true}
                }
            }
           })
             return {
        notaIT:respostaNota.not_IT,
      notaTitulo:respostaNota.not_titulo,
      notaAB:respostaNota.not_AB,
      notaPA:respostaNota.not_Pa,
      norm_criador:respostaNota.normas.norm_titulo,
      adm_criador:respostaNota.usuario.user_name
        }
       };
  
}