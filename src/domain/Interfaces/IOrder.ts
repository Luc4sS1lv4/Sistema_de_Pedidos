import type { Decimal } from "@prisma/client/runtime/library";



export type ORDER = {
    total: Decimal
    quantidade: number
    produto: number
    data_pedido: Date
}

export interface IOrder {
    save(order: ORDER): Promise<void>
    find(id:number): Promise<ORDER>
}

