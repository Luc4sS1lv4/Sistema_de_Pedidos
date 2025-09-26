import type { PrismaClient } from "@prisma/client";
import type { IOrder, ORDER } from "../../domain/Interfaces/IOrder.js";
import type { Order } from "../../domain/Entities/orderEntitie.js";

export class OrderRepository implements IOrder {
    constructor(private PrismaORM: PrismaClient
    ) { }

    async save(order: Order): Promise<void> {
        await this.PrismaORM.pedidos.create({
            data: {
                total: order.total,
                itens: order.produto.getId()
                    ? {
                        connect: { id: order.produto.getId() }
                    } : {}

            }
        });
    }

    async list(): Promise<ORDER[]> {

        const pedidos = await this.PrismaORM.pedidos.findMany()
        return pedidos


    }
}