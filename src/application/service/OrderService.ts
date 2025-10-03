
import { Decimal } from "@prisma/client/runtime/library";
import type { IOrder, ORDER} from "../../domain/Interfaces/IOrder.js";
import type { IProduct } from "../../domain/Interfaces/IProduct.js";

export class OrderService {
    constructor(private OrderREpository: IOrder,
                private ProductRepository: IProduct
    ) { }

    async CreateOrder(ORDER: ORDER) {

        const { total, quantidade, produto } = ORDER

        if (!total || !produto || !quantidade) throw new Error("por favor preencha todas as informações do produtos")

        const preco_total: number[] = [0]
        const productExistis = await this.ProductRepository.findById(produto.podutoId)

        if(!productExistis) throw new Error("produto bão existe")
        
           


        

    }

}

