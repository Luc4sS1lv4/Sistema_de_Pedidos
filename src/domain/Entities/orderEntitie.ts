import type { Product } from "./productEntitie.js"

export class Order{
    constructor(
        private id: number ,
        public readonly total:number,
        public readonly quantidade: number,
        public readonly produto: { produto: Product}
    ){}

}