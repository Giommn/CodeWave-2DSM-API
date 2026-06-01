import { Request, Response } from "express";
import { CreateNotaDTO } from "../dtos/nota.dto";
import NotaRepositorie from "../repositories/nota.Repositorie";
import NotaService from "../service/nota.service";
import { ValidatorError } from "../help/typeError";

export default class NotaController{
    private static notaRepose=new NotaRepositorie()
    private static notaService=new NotaService(this.notaRepose)

    static async CreateNota(req:Request,res:Response){
        try{
          const nota:CreateNotaDTO=req.body
          const resposta=await NotaController.notaService.createNota(nota)
          return res.status(200).json({
             status:'sucess',
            resposta          })
        }catch(error){
            if(error instanceof ValidatorError)
           return res.status(400).json({
            status:"error",
            message:error.message
           })
          
             return res.status(400).json({
            status:"error",
            message:500
           })
        }
          
    }
}