import type { Decimal } from "@prisma/client/runtime/library"


export class Product {
    constructor(
        private id: number,
        public nome: string,
        public preco: Decimal,
        public estoque: number
    ) { }

  
    getId() {
        return this.id
    }


}