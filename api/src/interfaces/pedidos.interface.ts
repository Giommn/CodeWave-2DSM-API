import { CreatePedidosDTO, ResponsePedidos } from "../dtos/pedidos.dto";

export default interface Pedidos{
     getallPedidos():Promise<Array<ResponsePedidos>>;
     getMeusPedidos(id_user:number):Promise<Array<ResponsePedidos>>
     createPedidos(pedido:CreatePedidosDTO):Promise<ResponsePedidos>
     descisaoPedido(status:string,id_pedido:number):Promise<void>


}