import {upload} from "../middleware/middleware";
import Express from "express";
import NormController from "../controllers/norm.Controller";
const route = Express.Router();

route.post("/norma/cadastro",upload.single('arquivo'),NormController.CadastroNorms)
route.delete("/norma/delete/:id",NormController.DeleteNorms)
route.put("/norma/update",upload.single('arquivo'),NormController.UpdateNorms)
route.get("/norma/getnorms",NormController.GetNorms)
route.post("/norma/saveinhistoric",NormController.SaveHistoric)
route.get("/norma/gethistoricacess/:id",NormController.GetHistoricNorms)

export default route