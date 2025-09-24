import type { PrismaClient } from "@prisma/client";
import type { IOrder } from "../../domain/Interfaces/IOrder.js";
import type { Order } from "../../domain/Entities/orderEntitie.js";

export class OrderRepository implements IOrder {
    constructor(private PrismaORM: PrismaClient
    ) { }

    async save(order: Order): Promise<void> {
        await this.PrismaORM.pedidos.create({
            data: {
                total: order.getTotal(),
                itens: {
                    create: {
                        quantidade: order.getQuantidade(),
                        produtos: {
                            connect: { id: order.getProduto() }
                        }
                    }
                }
            }
        });
    }

    async list(): Promise<Order[]> {
        
        const pedidos:any = await this.PrismaORM.pedidos.findMany()
        return pedidos
    }

}