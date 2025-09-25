import { create } from "ts-node";
import type { Product } from "../../domain/Entities/productEntitie.js";
import type { IProduct } from "../../domain/Interfaces/IProduct.js";

export class ProductService{
    constructor(private InterfaceReposiProduct: IProduct){}

   async  CreateProdutc(Product: Product){
        const produto = {
            nome: Product.getNome(),
            preco: Product.getPreco(),
            estoque: Product.getEstoque()

        }

        if(!produto.estoque || !produto.nome || !produto.preco) throw new Error("Todos os campos são obrigatórios")

        const ProductExist = await this.InterfaceReposiProduct.findById(produto.nome)

        if(ProductExist){
            ProductExist.map(p =>{
                produto.estoque = p.getEstoque()
            })
            return ProductExist
        }

       const newProduct = await this.InterfaceReposiProduct.create({nome: produto.nome, preco: produto.preco, estoque:produto.estoque})

       return newProduct
    }
}