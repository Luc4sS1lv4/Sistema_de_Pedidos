import type { FastifyInstance } from "fastify";


export function Routers(fastify: FastifyInstance){
    fastify.get("/", (req, rep)=>{
        rep.send("Rota funcionando")
    })
}