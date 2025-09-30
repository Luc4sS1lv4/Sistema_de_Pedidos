import type { Decimal } from "@prisma/client/runtime/library";
import type { Product } from "../Entities/productEntitie.js";


export type ORDER = {
    total?: Decimal
    quantidade: number
    produto?: Product
    data_pedido: Date
}

export interface IOrder {
    save(order: ORDER): Promise<void>
    find(id:number): Promise<ORDER[]>
}

