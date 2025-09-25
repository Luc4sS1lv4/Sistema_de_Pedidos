import type { PrismaClient } from "@prisma/client";
import type { IProduct, PRODUCT } from "../../domain/Interfaces/IProduct.js";
import { Product } from "../../domain/Entities/productEntitie.js";

export class ProductRepositpry implements IProduct {
    constructor(private ProdRepository: PrismaClient) { }

    findById = async (nome: string) => {
        const produtos = await this.ProdRepository.produto.findMany({
            where: {
                nome
            }
        })
        return produtos.map(p => new Product(p.nome, p.preco, p.estoque))
    }

    create = async (Product: PRODUCT): Promise<Product> => {
        const produtoNew: any = await this.ProdRepository.produto.create({
            data: {
                nome: Product.nome,
                estoque: Product.estoque,
                preco: Product.preco
            }
        })
        return produtoNew
    }
}