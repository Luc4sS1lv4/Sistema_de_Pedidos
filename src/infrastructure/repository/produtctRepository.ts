import type { PrismaClient } from "@prisma/client";
import type { IProduct } from "../../domain/Interfaces/IProduct.js";
import { Product } from "../../domain/Entities/productEntitie.js";

export class ProductRepositpry implements IProduct {
    constructor(private ProdRepository: PrismaClient) { }

    findById = async (id: number) => {
        const produtos = await this.ProdRepository.produto.findMany({
            where: {
                id
            }
        })
        return produtos.map(p => new Product(p.nome, p.preco, p.estoque))
    }

    create = async (Product: Product): Promise<Product> => {
        const produtoNew: any = await this.ProdRepository.produto.create({
            data: {
                nome: Product.getNome(),
                estoque: Product.getEstoque(),
                preco: Product.getPreco()
            }
        })
        return produtoNew
    }
}