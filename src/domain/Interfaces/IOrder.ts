import type { Order } from "../Entities/orderEntitie.js";

export interface IOrder{
    save(order:Order): Promise<void>
    list(): Promise<Order[]>
}