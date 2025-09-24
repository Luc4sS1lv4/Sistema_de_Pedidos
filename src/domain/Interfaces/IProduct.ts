import type { Product } from "../Entities/productEntitie.js";

export interface IProduct{
    findById(id: number): Promise<Product[]>
    update(Product: Product): Promise<void>
}