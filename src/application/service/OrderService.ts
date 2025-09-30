
import type { IOrder, ORDER } from "../../domain/Interfaces/IOrder.js";

export class OrderService {
    constructor(private OrderREpository: IOrder
    ) { }

    async CreateOrder(ORDER: ORDER) {

        const { total, quantidade, produto } = ORDER
        
        if (!total || !quantidade || !produto) throw new Error("por favor preencha todas as informações do produtos")

        const produ = this.OrderREpository.find(produto)

        if(!produ) throw new Error("Produto não existe")

        const newPedido = await this.OrderREpository.save({
            total,
            quantidade,
            produto,
            data_pedido: new Date()
        })

        return newPedido

    }

}

