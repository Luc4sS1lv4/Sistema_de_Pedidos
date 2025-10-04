
import { Decimal } from "@prisma/client/runtime/library";
import type { IOrder } from "../../domain/Interfaces/IOrder.js";
import type { IProduct } from "../../domain/Interfaces/IProduct.js";

export class OrderService {
    constructor(private OrderREpository: IOrder,
        private ProductRepository: IProduct
    ) { }

    async CreateOrder(ORDER: { produto: number, quantidade: number }) {


        if (!ORDER.produto) throw new Error("por favor preencha todas as informações do produtos")

        const productExistis = await this.ProductRepository.findById(ORDER.produto)

        if (!productExistis || productExistis.length === 0) {
            throw new Error("produto não existe")
        }

        const preco_total = productExistis.reduce((acc, item) => {
            return acc + (item.preco.toNumber() * ORDER.quantidade)
        }, 0)

        const totais = Decimal(preco_total)


       productExistis.map(i => {
            this.OrderREpository.save({
                total: totais,
                data_pedido: new Date(),
                produto: {
                    podutoId: ORDER.produto,
                    quantidade: ORDER.quantidade,
                    preco_unitario: i.preco
            }
            })

        })
        return productExistis

        
    }

}

