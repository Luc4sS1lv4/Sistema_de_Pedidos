import type { Order } from "../../domain/Entities/orderEntitie.js";
import type { IOrder, ORDER } from "../../domain/Interfaces/IOrder.js";

export class OrderService {
    constructor(private OrderREpository: IOrder) { }

    async CreateOrder(ORDER: Order) {

        const { getId, total, quantidade, produto, totalValor } = ORDER
        if (!total || !quantidade || !produto) throw new Error("por favor preencha todas as informações do produtos")

        const pedidos = await this.OrderREpository.list(getId())

        if (pedidos) throw new Error("Pedido ja existe deverá ser criado outro")
        ORDER.total = totalValor(quantidade, ORDER.produto.getPreco())

        const newPedido = await this.OrderREpository.save(ORDER)

        return newPedido

    }
}