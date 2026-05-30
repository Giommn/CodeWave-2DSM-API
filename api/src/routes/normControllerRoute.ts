import {upload} from "../middleware/middleware";
import Express from "express";
import NormController from "../controllers/norm.Controller";
import * as jwt from "../config/jwt";
const route = Express.Router();

route.post("/norma/cadastro",jwt.authToken,upload.single('arquivo'),NormController.CadastroNorms)
route.delete("/norma/delete/:id",jwt.authToken,NormController.DeleteNorms)
route.put("/norma/update",jwt.authToken,upload.single('arquivo'),NormController.UpdateNorms)
route.get("/norma/getnorms",NormController.GetNorms)
route.post("/norma/saveinhistoric",NormController.SaveHistoric)
route.get("/norma/gethistoricacess/:id",NormController.GetHistoricNorms)
route.get("/norma/getpdf/:nome",NormController.getPdf)
route.get("/norma/favoritas/:id_user",NormController.VerFavoritos)
route.post("/norma/favoritar",NormController.adicionarFavoritos)
route.delete("/norma/favoritas/deletar/:id_user/:id_norm",NormController.tirarDosFavoritos)

export default route