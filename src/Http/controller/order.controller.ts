import type { OrderService } from "../../application/service/OrderService.js"


export class OrderController{
    constructor(private ServiceOrder: OrderService){}

    createProductService = async (req: any, rep: any)=>{
        const { id, produto, getId, totalValor, Order: {total, quantidade }} = req.body
        try{
            return rep.status(201).json(this.ServiceOrder.CreateOrder({ id, produto, getId, totalValor, Order: {total, quantidade} }))
        }catch (e:any){
            return rep.status(400).json({Erro: e.message})
        }
    }

    
}