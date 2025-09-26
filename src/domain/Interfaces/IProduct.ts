import type { Decimal } from "@prisma/client/runtime/library";
import type { Product } from "../Entities/productEntitie.js";

export type PRODUCT = {
    id: number
    nome: string
    preco: Decimal
    estoque: number
}

export interface IProduct{
    findById(Product: Product): Promise<PRODUCT[]>
    create(Product: PRODUCT): Promise<PRODUCT>
}