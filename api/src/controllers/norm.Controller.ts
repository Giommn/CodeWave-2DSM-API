import path from "path";
import { ValidatorError } from "../help/typeError";
import NormRepository from "../repositories/norm.Repository";
import NormService from "../service/norm.Service";
import { Request, Response } from "express";
import fs from "fs/promises";
export default class NormController {
  private static norm_repository: NormRepository = new NormRepository();
  private static norm_service: NormService = new NormService(
    this.norm_repository,
  );

  public static async CadastroNorms(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      if (!req.file)
        return res.status(400).json({
          status: "error",
          message: "File is obrigation",
        });
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
      } = JSON.parse(req.body.metadata);
      const pdf_caminho: string = req.file.filename;
      const pdf_nome_original: string = req.file.originalname;
      const resposta = await NormController.norm_service.createNorm({
        norm_titulo: norm_titulo,
        norm_desc: norm_desc,
        org_criador: parseInt(org_criador),
        adm_criador: parseInt(adm_criador),
        emissao: emissao,
        norm_codigo: norm_codigo,
        org_desc: org_desc,
        org_sigla: org_sigla,
        referencias: referencias,
        notas:notas,
        pdf_caminho: pdf_caminho,
        pdf_nome_original: pdf_nome_original,
        categoria:categoria
      });
      return res.status(201).json({
        status: "sucess",
        resposta,
      });
    } catch (erro) {
      const deleteOFarquvio = path.resolve(
        __dirname,
        "..",
        "..",
        "upload_pdf",
        req.file.filename,
      );
      await fs.unlink(deleteOFarquvio);
      if (erro instanceof ValidatorError)
        return res.status(erro.statusCode).json({
          status: "error",
          message: erro.message,
        });

      return res.status(500).json({
        status: "error",
        message: 500,
      });
    }
  }

  public static async DeleteNorms(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;
      if (!id) throw new ValidatorError("ID is required", 400);
      const resposta = await NormController.norm_service.deleteNorm(
        Number(id),
      );
      
     fs.unlink(path.resolve(
        __dirname,
        "..",
        "..",
        "upload_pdf",
        resposta.pdf_caminho,
      ))
      return res.status(200).json({
        status: "sucess",
        resposta,
      });
    } catch (erro) {
      if (erro instanceof ValidatorError) {
        return res.status(400).json({
          status: "error",
          message: erro.message,
        });
      }
      return res.status(500).json({
        status: "error",
        message: 500,
      });
    }
  }
  public static async UpdateNorms(req: Request, res: Response) {
    try {
      if (!req.file)
        return res.status(400).json({
          status: "error",
          message: "File is obrigation",
        });
      const { norm_codigoAtual, norm_codigo, norm_titulo, norm_desc, emissao } =
        JSON.parse(req.body.metadata);
      const pdf_nome_original = req.file.originalname;
      const pdf_caminho = req.file.filename;
      const resposta = await NormController.norm_service.updateNorm({
        norm_titulo: norm_titulo,
        norm_codigo: norm_codigo,
        norm_codigoAtual: norm_codigoAtual,
        norm_desc: norm_desc,
        emissao: emissao,
        pdf_caminho: pdf_caminho,
        pdf_nome_original: pdf_nome_original,
      });
      return res.status(200).json({
        status: "sucess",
        resposta,
      });
    } catch (erro) {
      if (erro instanceof ValidatorError) {
        return res.status(400).json({
          status: "error",
          message: erro.message,
        });
      }
      return res.status(500).json({
        status: "error",
        message: 500,
      });
    }
  }

  public static async GetNorms(req: Request, res: Response) {
    try {
      const resposta = await NormController.norm_service.getNorms();
      return res.status(200).json({
        status: "sucess",
        resposta,
      });
    } catch (erro) {
      if (erro instanceof ValidatorError) {
        return res.status(400).json({
          status: "error",
          message: erro.message,
        });
      }
      return res.status(500).json({
        status: "error",
        message: 500,
      });
    }
  }
  public static async SaveHistoric(req: Request, res: Response){
    try {
      const { id_norm, id_user } = req.body;
      if (!id_norm || !id_user)
        return res
          .status(400)
          .json({ status: "error", message: "Id is obrigation" });
      await NormController.norm_service.saveHistoric(id_norm, id_user);
      return res.status(200).json({
        status: "sucess",
      });
    } catch (erro) {
      console.log(erro.message)
      if (erro instanceof ValidatorError) {
        return res.status(400).json({
          status: "error",
          message: erro.message,
        });
      }
      return res.status(500).json({
        status: "error",
        message: 500,
      });
    }
  }

  public static async GetHistoricNorms(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id)
        return res
          .status(400)
          .json({ status: "error", message: "Id is obrigation" });

      const resposta = await NormController.norm_service.getHistoric(
        Number(id),
      );
      return res.status(200).json({
        status: "sucess",
        resposta,
      });
    } catch (erro) {
      console.log(erro)
      if (erro instanceof ValidatorError) {
        return res.status(400).json({
          status: "error",
          message: erro.message,
        });
      }
      return res.status(500).json({
        status: "error",
        message: 500,
      });
    }
  }
  public static getPdf(req:Request,res:Response){
    try{
        const arquivo=req.params.nome
        const caminhoDoArquivo=path.resolve(__dirname,'..','..','upload_pdf',String(arquivo))
        res.sendFile(caminhoDoArquivo)
    }catch(erro){
        return res.status(404).json({
          status:"error",
          message:erro.message
        })
    }
        
  }

  public static async adicionarFavoritos(req:Request,res:Response){
    try{
        const {id_user,id_norm}=req.body;
        if(!id_norm || !id_user)return res.status(400).json({status:"error",message:"Não temos dados o suficiente"})
          await NormController.norm_service.favoritarNorma(id_user,id_norm)
        return res.status(200).json({
          status:"sucess"
        })

    }catch(error){
      console.error("Erro real disparado pelo Service/Repository:", error);
         return res.status(404).json({
          status:"error",
          message:error.code
        })
    }
  }
  public static async tirarDosFavoritos(req:Request,res:Response){
    try{
   const {id_user,id_norm}=req.params;
        if(!id_norm || !id_user)return res.status(400).json({status:"error",message:"Não temos dados o suficiente"})
          await NormController.norm_service.tirardosfavoritados(Number(id_user),Number(id_norm))
        return res.status(200).json({
          status:"sucess"
        })
      }catch(error){
       return res.status(404).json({
          status:"error",
          message:error.message
        })
      }
  }
  public static async VerFavoritos(req:Request,res:Response){
    try{
       const {id_user}=req.params;
       if(!id_user)return res.status(400).json({status:"error",message:"Não temos dados o suficiente"})
         await NormController.norm_service.Verfavoritos(Number(id_user))
    }catch(error){
        return res.status(404).json({
          status:"error",
          message:error.message
        })
    }
 }
 

}
