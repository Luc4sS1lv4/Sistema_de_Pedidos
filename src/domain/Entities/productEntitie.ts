import type { Decimal } from "@prisma/client/runtime/library"


export class Product {
    constructor(
        private id: number,
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
    getId() {
        return this.id
    }

    //setdiminuirEstoque(quantidade:number){
      //  return this.estoque - quantidade
    //}
    

}