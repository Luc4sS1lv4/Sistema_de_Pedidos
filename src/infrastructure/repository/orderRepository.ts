import type { PrismaClient } from "@prisma/client";
import type { IOrder, ORDER } from "../../domain/Interfaces/IOrder.js";


export class OrderRepository implements IOrder {
    constructor(private PrismaORM: PrismaClient
    ) {}

    async save(order: ORDER): Promise<void> {
        await this.PrismaORM.pedidos.create({
            data: {
                total: order.total ? order.total : 0.00,
                quantidade: order.quantidade,
                data_pedido: order.data_pedido,
                produtos: order.produto?.getId() ? {
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