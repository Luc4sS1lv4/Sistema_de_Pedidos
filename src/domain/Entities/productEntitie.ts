import type { Decimal } from "@prisma/client/runtime/library"


export class Product {
    constructor(
        private nome: string,
        private preco: Decimal,
        private estoque: number
    ) { }

    getNome() {
        return this.nome
    }
    getPreco() {
        return this.preco
    }
    getEstoque() {
        return this.estoque
    }

    

}