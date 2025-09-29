import type { ProductService } from "../../application/service/ProductService.js";

export class ProductController{
    constructor(private ServicProduct: ProductService){}

    createProductService = async (req: any, rep: any)=>{
        const {nome, preco, quantida, id} = req.body
        try{
            return rep.status(201).json(this.ServicProduct.CreateProdutc({id,nome, preco, estoque: quantida}))
        }catch (e:any){
            return rep.status(400).json({Erro: e.message})
        }
    }

    
}