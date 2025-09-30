import type { Decimal } from "@prisma/client/runtime/library";
import type { PRODUCT } from "./IProduct.js";


export type ORDER = {
    total: Decimal
    quantidade: number
    produto: number
    data_pedido: Date
}

export interface IOrder {
    save(order: ORDER): Promise<void>
    find(id:number): Promise<
    PRODUCT[]>
}

