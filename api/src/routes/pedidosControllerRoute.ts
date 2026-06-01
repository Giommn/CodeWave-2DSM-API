import express from 'express'
import { upload } from "../middleware/middleware";
import PedidoController from "../controllers/pedidos.Controller";
const router =express.Router()

router.get('/pedidos/getall',PedidoController.PegarPedidos)
router.get('/pedidos/meuspedidos/:id',PedidoController.PegarMeusPedidos)
router.post('/pedidos/create',upload.single('arquivo'),PedidoController.createPedido)
router.post('/pedidos/aceitacaopedido',PedidoController.AceitacaoPedido)
export default router