import { Decimal } from "@prisma/client/runtime/library"
import type { Product } from "./productEntitie.js"
export class Order {
    constructor(
        private id: number,
        public total: Decimal,
        public readonly quantidade: number,
        public readonly produto: Product
    ) { }

    getId() {
        return this.id
    }

    totalValor(quantidade: number, preco: Decimal) {
        const Valortotal = quantidade * this.produto.getPreco().toNumber()
        return Decimal(Valortotal)
    }




}