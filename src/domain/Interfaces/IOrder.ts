import type { Decimal } from "@prisma/client/runtime/library";
import type { Order } from "../Entities/orderEntitie.js";

export type ORDER = {
    total: Decimal,
    data_pedido: Date,
    id: number
}

export interface IOrder {
    save(order: Order): Promise<void>
    list(id: number): Promise<ORDER[]>
}

