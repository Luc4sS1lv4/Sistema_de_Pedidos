import type { IProduct, PRODUCT } from "../../domain/Interfaces/IProduct.js";


export class ProductService {
    constructor(private InterfaceReposiProduct: IProduct) { }

    async CreateProdutc(Product: PRODUCT) {
        const produto = {
            nome: Product.nome,
            preco: Product.preco,
            estoque: Product.estoque,
        }

        if (!produto.estoque || !produto.nome || !produto.preco) throw new Error("Todos os campos são obrigatórios")


        const newProduct = await this.InterfaceReposiProduct.create(produto)

        return newProduct
    }
}

