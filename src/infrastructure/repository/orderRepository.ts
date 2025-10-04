import type { PrismaClient } from "@prisma/client";
import type { IOrder, ORDER } from "../../domain/Interfaces/IOrder.js";



export class OrderRepository implements IOrder {
    constructor(private PrismaORM: PrismaClient
    ) { }

    async save(order: ORDER): Promise<any> {
        const newPedido = await this.PrismaORM.pedidos.create({
            data: {
                total: order.total,
                data_pedido: order.data_pedido,
                produtos: {
                    create: {
                        quantidade: order.produto.quantidade,
                        preco_Unitario: order.produto.preco_unitario,
                        produtos: {
                            connect: { id: order.produto.podutoId }
                        }
                    }
                }
            },
            include: { produtos: true }
        });
        return newPedido
    }

    async find(id: number): Promise<any> {

        const pedidos = await this.PrismaORM.pedidos.findUnique({
            where: {
                id
            }, include: {
                produtos: true
            }
        })

        return pedidos

    }
}