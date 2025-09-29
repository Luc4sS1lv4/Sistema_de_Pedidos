import { Decimal } from "@prisma/client/runtime/library"
import type { Product } from "./productEntitie.js"
export class Order {
    constructor(
        private id: number,
        public total: Decimal | null,
        public quantidade: number,
        public produto?: Product,
        private data_pedido?: Date
    ) { }

    getId() {
        return this.id
    }

    totalValor(quantidade: number, preco: Decimal) {
        const Valortotal = quantidade * preco.toNumber()
        return Decimal(Valortotal)
    }

    getData(){
        return this.data_pedido
    }


}