import type { PrismaClient } from "@prisma/client";
import type { IOrder, ORDER, ORDER1 } from "../../domain/Interfaces/IOrder.js";



export class OrderRepository implements IOrder {
    constructor(private PrismaORM: PrismaClient
    ) { }

    async save(order: ORDER1): Promise<void> {
        await this.PrismaORM.pedidos.create({
            data: {
                total: order.total,
                data_pedido: order.data_pedido,
                produtos: {
                    connect: { id: order.produto }
                }

            }
        });
    }

    async find(id: number): Promise<any> {

        const pedidos = await this.PrismaORM.produto.findUnique({
            where: {
                id
            }
        })

        return pedidos

    }
}