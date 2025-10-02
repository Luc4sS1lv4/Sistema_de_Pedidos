import type { Decimal } from "@prisma/client/runtime/library";



export type ORDER = {
    total: Decimal
    quantidade: number
    produto: number[]
    data_pedido: Date
}

export type ORDER1 = {
    total: Decimal
    quantidade: number
    produto: number
    data_pedido: Date
}

export interface IOrder {
    save(order: ORDER1): Promise<void>
    find(id: number): Promise<ORDER>
}

