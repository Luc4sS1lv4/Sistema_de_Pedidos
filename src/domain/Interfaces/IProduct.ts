import type { Product } from "../Entities/productEntitie.js";

export interface IProduct{
    findById(id: number): Promise<Product[]>
    create(Product: Product): Promise<Product>
}