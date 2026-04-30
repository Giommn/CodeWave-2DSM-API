import NotaController from "../controllers/nota.Controller";
import { Router } from "express";

const router=Router()

router.post('/nota/create',NotaController.CreateNota)

export default router;