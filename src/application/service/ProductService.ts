import type { Product } from "../../domain/Entities/productEntitie.js";
import type { IProduct } from "../../domain/Interfaces/IProduct.js";


export class ProductService {
    constructor(private InterfaceReposiProduct: IProduct,
    ) { }

    async CreateProdutc(Product: Product) {
        const produto = {
            nome: Product.nome,
            preco: Product.preco,
            estoque: Product.estoque,
            id: Product.getId()
        }

        if (!produto.estoque || !produto.nome || !produto.preco) throw new Error("Todos os campos são obrigatórios")

        const ProductExist = await this.InterfaceReposiProduct.findById(produto.id)

        if (ProductExist) throw new Error(`Produto Existente ${ProductExist}`)

        const newProduct = await this.InterfaceReposiProduct.create(produto)

        return newProduct
    }
}

