import type { Decimal } from "@prisma/client/runtime/library";


export type PRODUCT = {
    id: number
    nome: string
    preco: Decimal
    estoque: number
}

export interface IProduct{
    findById(id:number): Promise<PRODUCT[]>
    create(Product: PRODUCT): Promise<PRODUCT>
}