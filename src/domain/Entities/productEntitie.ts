export class Product {
    constructor(
        private nome: string,
        private preco: number,
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