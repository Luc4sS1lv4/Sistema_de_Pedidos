
import { Decimal } from "@prisma/client/runtime/library";
import type { IOrder, ORDER } from "../../domain/Interfaces/IOrder.js";
import type { IProduct } from "../../domain/Interfaces/IProduct.js";

export class OrderService {
    constructor(private OrderREpository: IOrder,
        private ProductRepository: IProduct
    ) { }

    async CreateOrder(ORDER: ORDER) {

        const { total, quantidade, produto } = ORDER

        if (!total || !produto || !quantidade) throw new Error("por favor preencha todas as informações do produtos")

        const productExistis = await this.ProductRepository.findById(produto.podutoId)

        if (!productExistis || productExistis.length === 0) {
            throw new Error("produto não existe")
        }

        const preco_total = productExistis.reduce((acc, item) => {
            return acc + (item.preco.toNumber() * quantidade)
        }, 0)

        const totais = Decimal(preco_total)
        return this.OrderREpository.save({
            total: totais,
            quantidade,
            data_pedido: new Date(),
            produto
        })

    }

}

