import { CreatePedidosDTO, Status } from "../dtos/pedidos.dto";
import PedidoRepositorie from "../repositories/pedidos.Repository";

export default class PedidoService{
       constructor(private PedidoRepo:PedidoRepositorie){}

       public async  createPedido(pedido:CreatePedidosDTO){
           return await this.PedidoRepo.createPedidos(pedido)

       }
       public async PegarTodososPedidos(){
        return await this.PedidoRepo.getallPedidos();
       }

       public async PegarMeusPedidos(id_user:number){
        return await this.PedidoRepo.getMeusPedidos(id_user)
       }

       public async AceitacaodePedido(status:Status,id_pedido:number){
              return await this.PedidoRepo.descisaoPedido(status,id_pedido)
       }
}