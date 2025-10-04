import type { OrderService } from "../../application/service/OrderService.js"


export class OrderController {
    constructor(private ServiceOrder: OrderService) { }

    createProductService = async (req: any, rep: any) => {
        try {
            const { produto, quantidade } = req.body
            return rep.status(201).send(await this.ServiceOrder.CreateOrder({ produto, quantidade }))
        } catch (e: any) {
            return rep.status(400).send({ Erro: e })
        }
    }


}