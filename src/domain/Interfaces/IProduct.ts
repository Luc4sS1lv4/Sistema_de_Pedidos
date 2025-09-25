import type { Decimal } from "@prisma/client/runtime/library";
import type { Product } from "../Entities/productEntitie.js";

export type PRODUCT = {
    nome: string
    preco: Decimal
    estoque: number
}

export interface IProduct{
    findById(nome: string): Promise<Product[]>
    create(Product: PRODUCT): Promise<Product>
}