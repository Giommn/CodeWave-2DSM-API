
import path from "node:path";
import { upload } from "../middleware/middleware";
import Express from "express";
const route = Express.Router();

route.post("/norma",upload.single('bilada'), function(req,res,){ console.log(path.resolve(req.file.destination,req.file.filename))
    res.send(req.file.originalname)
})
export default route