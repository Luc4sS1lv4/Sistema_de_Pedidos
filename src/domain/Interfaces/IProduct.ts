import type { Decimal } from "@prisma/client/runtime/library";


export type PRODUCT = {
    nome: string
    preco: Decimal
    estoque: number
}

export interface IProduct {
    create(Product: PRODUCT): Promise<PRODUCT>
    findById(id: number): Promise<PRODUCT[]>
}