import type { OrderService } from "../../application/service/OrderService.js"


export class OrderController{
    constructor(private ServiceOrder: OrderService){}

    createProductService = async (req: any, rep: any)=>{
        const { produto, total, quantidade, data_pedido } = req.body
        try{
            return rep.status(201).json(this.ServiceOrder.CreateOrder({produto, total, quantidade, data_pedido}))
        }catch (e:any){
            return rep.status(400).json({Erro: e.message})
        }
    }

    
}