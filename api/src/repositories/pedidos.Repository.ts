import { JsonValue } from "@prisma/client/runtime/client";
import { prisma } from "../config/prisma";
import { CreatePedidosDTO, ResponsePedidos, Status } from "../dtos/pedidos.dto";
import Pedidos from "../interfaces/pedidos.interface";
import NormRepository from "./norm.Repository";
import { CreateNormDTO, UpdateNormDTO } from "../dtos/norm.dto";
import fs from "fs/promises";
import path from "path";
import { ValidatorError } from "../help/typeError";

export default class PedidoRepositorie implements Pedidos {
  private static NormRepo = new NormRepository();
  
  public async createPedidos(
    pedido: CreatePedidosDTO,
  ): Promise<ResponsePedidos> {
    try {
      const respedido = await prisma.pedidosdeAlteracao.create({
        data: {
          id_user: pedido.id_user,
          id_norma: pedido.id_norma || null,
          status: pedido.status,
          notaorNorma: pedido.tipo,
          acaoDealteracao: pedido.acaoAlteracao,
          alteracao: pedido.alteracao as JsonValue,
        },
        select: {
          usuarios: {
            select: { user_name: true },
          },
          id: true,
          alteracao: true,
          acaoDealteracao: true,
          notaorNorma: true,
          status: true,
          data_pedido: true,
          normas: {
            select: { norm_titulo: true },
          },
        },
      });
      return {
        id_pedido: respedido.id,
        user_name: respedido.usuarios.user_name,
        alteracao: respedido.alteracao,
        acaoAlteracao: respedido.acaoDealteracao,
        tipo: respedido.notaorNorma,
        status: respedido.status,
        norma_nome: respedido.normas?.norm_titulo || 'Nova Norma',
        data_pedido: respedido.data_pedido,
      };
    } catch (error: any) {
      throw new ValidatorError('Não foi possivel criar', 400, error.message);
    }
  }

  public async getallPedidos(): Promise<Array<ResponsePedidos>> {
    const pedidos = await prisma.pedidosdeAlteracao.findMany({
      select: {
        usuarios: {
          select: { user_name: true },
        },
        alteracao: true,
        acaoDealteracao: true,
        notaorNorma: true,
        status: true,
        data_pedido: true,
        normas: {
          select: { norm_titulo: true },
        },
        id: true,
      },
    });

    return pedidos.map((pedido) => {
      return {
        id_pedido: pedido.id,
        user_name: pedido.usuarios.user_name,
        alteracao: pedido.alteracao,
        acaoAlteracao: pedido.acaoDealteracao,
        tipo: pedido.notaorNorma,
        status: pedido.status,
        norma_nome: pedido.normas?.norm_titulo || 'Pedido de criação de uma nova norma',
        data_pedido: pedido.data_pedido,
      };
    });
  }

  public async getMeusPedidos(
    id_user: number,
  ): Promise<Array<ResponsePedidos>> {
    const meusPedidos = await prisma.pedidosdeAlteracao.findMany({
      where: {
        id_user: id_user,
      },
      select: {
        usuarios: {
          select: { user_name: true },
        },
        alteracao: true,
        acaoDealteracao: true,
        notaorNorma: true,
        status: true,
        data_pedido: true,
        normas: {
          select: { norm_titulo: true },
        },
        id: true,
      },
    });
    return meusPedidos.map((pedido) => {
      return {
        id_pedido: pedido.id,
        user_name: pedido.usuarios.user_name,
        alteracao: pedido.alteracao,
        acaoAlteracao: pedido.acaoDealteracao,
        tipo: pedido.notaorNorma,
        status: pedido.status,
        norma_nome: pedido.normas?.norm_titulo || 'Pedido de criação de uma nova norma',
        data_pedido: pedido.data_pedido,
      };
    });
  }

  // AQUI ADICIONAMOS O id_adm NA ASSINATURA DA FUNÇÃO
  public async descisaoPedido(
    status: Status,
    id_pedido: number,
    id_adm?: number 
  ): Promise<void> {
    try {
      const pedido = await prisma.pedidosdeAlteracao.findUnique({
        where: { id: id_pedido },
        select: {
          usuarios: {
            select: { user_name: true },
          },
          alteracao: true,
          acaoDealteracao: true,
          notaorNorma: true,
          status: true,
          data_pedido: true,
          normas: {
            select: { norm_titulo: true },
          },
          id: true,
        },
      });

      if (!pedido) throw new Error("Pedido não encontrado");

      if (status == "APROVADO") {
        if (pedido.acaoDealteracao == "UPDATE") {
          const atualizarNorm = pedido.alteracao as unknown as UpdateNormDTO;
          await PedidoRepositorie.NormRepo.updateNorm(atualizarNorm);
        } else {
          // --- AQUI ESTÁ A CORREÇÃO ---
          const createNorm = JSON.parse(JSON.stringify(pedido.alteracao)) as CreateNormDTO;
          
          // Se um id_adm foi passado (quem aprovou), ele SOBRESCREVE o ID de quem pediu
          if (id_adm) {
              createNorm.adm_criador = Number(id_adm);
          }

          await PedidoRepositorie.NormRepo.createNorm(createNorm);
        }
      } else {
        const pedidoAlt = pedido.alteracao as unknown as
          | UpdateNormDTO
          | CreateNormDTO;
        await fs.unlink(
          path.resolve(__dirname, "..", "..", 'upload_pdf', pedidoAlt.pdf_caminho),
        ).catch(() => console.warn("Aviso: PDF não encontrado para deletar."));
      }
      
      await prisma.pedidosdeAlteracao.update({
        where: { id: id_pedido },
        data: {
          status: status,
        },
      });
      
    } catch (error: any) {
      throw new ValidatorError('Não foi possivel modificar o pedido', 400, error.message);
    }
  }
}