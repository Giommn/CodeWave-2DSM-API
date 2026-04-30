import { Request, Response } from "express";
import PedidoRepositorie from "../repositories/pedidos.Repository";
import PedidoService from "../service/pedidoService"
import { ValidatorError } from "../help/typeError";

export default class PedidoController{
    private static PedidoRepo=new PedidoRepositorie()
    private static PedidoServ=new PedidoService(PedidoController.PedidoRepo)


    static async createPedido(req:Request,res:Response){
        try{
            const metadata = JSON.parse(req.body.metadata);
        const { id_user,acaoAlteracao,
            tipo,
            status,
            id_norma}=metadata;
    
        const {
          norm_titulo,
           norm_desc,
           org_criador,
           adm_criador,
           emissao,
           norm_codigo,
           org_desc,
           org_sigla,
           referencias,
           notas,
           categoria
        }=metadata.alteracao
          const pedido={
            id_user:id_user,
            alteracao:{
                norm_codigo:norm_codigo,
                norm_titulo:norm_titulo,
                adm_criador:adm_criador,
                org_criador:org_criador,
                norm_desc:norm_desc,
                emissao:emissao,
                org_desc:org_desc,
                org_sigla:org_sigla,
                referencias:referencias,
                notas:notas,
                categoria:categoria,
              pdf_nome_original:req.file.originalname,
  pdf_caminho:req.file.filename
 
            },
            tipo:tipo,
            status:status,
            id_norma:id_norma,
             acaoAlteracao:acaoAlteracao
            
        }
        const resposta=await PedidoController.PedidoServ.createPedido(pedido)
        return res.status(200).json({
            status:"sucess",
            resposta
        })
        }catch(error){
          if(error instanceof ValidatorError)
            return res.status(400).json({
            status:"error",
            message:error.code
            })
          return res.status(500).json({
            status:"error",
            message:error
          })
        }
    }
    static async PegarPedidos(req:Request,res:Response){
        try{
            const resposta= await PedidoController.PedidoServ.PegarTodososPedidos()
            return res.status(200).json({
                status:"sucesss",
                resposta
            })

        }catch(error){
           if(error instanceof ValidatorError)
            return res.status(400).json({
            status:"error",
            message:error.message
            })
          return res.status(500).json({
            status:"error",
            message:500
          })
        }
    }
    static async PegarMeusPedidos(req:Request,res:Response){
             try{
            const {id}=req.params
            const resposta= await PedidoController.PedidoServ.PegarMeusPedidos(Number(id))
            return res.status(200).json({
                status:"sucesss",
                resposta
            })

        }catch(error){
           if(error instanceof ValidatorError)
            return res.status(400).json({
            status:"error",
            message:error.message
            })
          return res.status(500).json({
            status:"error",
            message:500
          })
        }
    }
    static async AceitacaoPedido(req:Request,res:Response){
      try{
        const {status,id_pedido}=req.body
        await PedidoController.PedidoServ.AceitacaodePedido(status,id_pedido)
        return res.status(200).json({
            status:'sucess'
        })
      }catch(error){
         if(error instanceof ValidatorError)
            return res.status(400).json({
            status:"error",
            message:error.code
            })
          return res.status(500).json({
            status:"error",
            message:500
          })
      }
    }

}