import { Order } from "../../domain/Entities/orderEntitie.js";
import type { IOrder, ORDER} from "../../domain/Interfaces/IOrder.js";

export class OrderService {
    constructor(private OrderREpository: IOrder,
                private OrderEnitie: Order
    ) { }

    async CreateOrder(ORDER: ORDER) {

        const { total, quantidade, produto} = ORDER
        if (!total || !quantidade || !produto) throw new Error("por favor preencha todas as informações do produtos")

        const pedidos = await this.OrderREpository.list(this.OrderEnitie.getId())

        if (pedidos) throw new Error("Pedido ja existe deverá ser criado outro")
        ORDER.total = this.OrderEnitie.totalValor(quantidade, produto.preco)

        const newPedido = await this.OrderREpository.save(ORDER)

        return newPedido

    }

}

