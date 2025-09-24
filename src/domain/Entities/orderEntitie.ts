export class Order{
    constructor(
        private total:number,
        private quantidade: number,
        private produto: number
    ){}

    getTotal(){
        return this.total
    }
    getQuantidade(){
        return this.quantidade
    }
    getProduto(){
        return this.produto
    }
}