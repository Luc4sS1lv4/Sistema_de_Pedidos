import type { IOrder, ORDER } from "../../domain/Interfaces/IOrder.js";

export class OrderService{
    constructor(private OrderREpository: IOrder){}

    async CreateOrder(ORDER: ORDER){
        
    }
}