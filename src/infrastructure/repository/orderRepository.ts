import type { PrismaClient } from "@prisma/client";
import type { IOrder, ORDER } from "../../domain/Interfaces/IOrder.js";
import type { Order } from "../../domain/Entities/orderEntitie.js";

export class OrderRepository implements IOrder {
    constructor(private PrismaORM: PrismaClient
    ) {}

    async save(order: Order): Promise<void> {
        await this.PrismaORM.pedidos.create({
            data: {
                total: order.total,
                quantidade: order.quantidade,
                data_pedido: order.getData(),
                produtos: order.produto.getId() ? {
                        connect: { id: order.produto.getId() }
                    }: {}

            }
        });
    }

    async list(id: number): Promise<ORDER[]> {

        const pedidos = await this.PrismaORM.pedidos.findMany({where:{
            id
        }, include:{
            produtos: true
        }})
        
        return pedidos
    }
}