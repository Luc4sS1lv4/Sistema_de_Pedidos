import type { ProductService } from "../../application/service/ProductService.js";

export class ProductController{
    constructor(private ServicProduct: ProductService){}

    createProductService = async (req: any, rep: any)=>{
        try{
            const {nome, preco, quantida} = req.body
            return rep.status(201).send(await this.ServicProduct.CreateProdutc({nome, preco,  estoque: quantida}))
        }catch (e:any){
            return rep.status(400).send({Erro: e.message})
        }
    }

    
}