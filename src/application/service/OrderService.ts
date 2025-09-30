import { Order } from "../../domain/Entities/orderEntitie.js";
import type { IOrder } from "../../domain/Interfaces/IOrder.js";

export class OrderService {
    constructor(private OrderREpository: IOrder
    ) { }

    async CreateOrder(ORDER: Order) {

        const { total, quantidade, produto, getId, totalValor } = ORDER
        if (!total || !quantidade || !produto) throw new Error("por favor preencha todas as informações do produtos")

        const pedidos = await this.OrderREpository.list(getId())

        if (pedidos) throw new Error("Pedido ja existe deverá ser criado outro")
        ORDER.total = totalValor(quantidade, produto.preco)

        const newPedido = await this.OrderREpository.save({
            total, quantidade,
            produto,
            data_pedido: new Date()
        })

        return newPedido

    }

}

