
import type { IOrder, ORDER, ORDER1 } from "../../domain/Interfaces/IOrder.js";

export class OrderService {
    constructor(private OrderREpository: IOrder
    ) { }

    async CreateOrder(ORDER: ORDER) {

        const { total, quantidade, produto } = ORDER
        
        if (!total || !produto || !quantidade) throw new Error("por favor preencha todas as informações do produtos")
    
        const newPedido = produto.forEach((item) =>{
            this.OrderREpository.save({
            total,
            quantidade,
            produto: item,
            data_pedido: new Date()
        })
        })
        

        return newPedido

    }

}

