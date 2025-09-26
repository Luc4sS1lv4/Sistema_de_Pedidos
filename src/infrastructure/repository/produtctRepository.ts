import type { PrismaClient } from "@prisma/client";
import type { IProduct, PRODUCT } from "../../domain/Interfaces/IProduct.js";
import { Product } from "../../domain/Entities/productEntitie.js";

export class ProductRepositpry implements IProduct {
    constructor(private ProdRepository: PrismaClient) { }

    findById = async (Product: Product) => {
        const produtos = await this.ProdRepository.produto.findMany({
            where: {
                id: Product.getId()
            }
        })
        return produtos
    }

    create = async (Product: PRODUCT): Promise<PRODUCT> => {
        const produtoNew = await this.ProdRepository.produto.create({
            data: {
                nome: Product.nome,
                estoque: Product.estoque,
                preco: Product.preco
            }
        })
        return produtoNew
    }
}