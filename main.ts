import fastify from "fastify"
import dotenv from "dotenv"
import { Routers } from "./src/Http/routers/main.Router.js"

dotenv.config()
const app = fastify()

const env: any = {
PORT: process.env.PORT ?? 3000,
SECRET_KEY: process.env.SECRET_KEY
}

app.register(Routers)



app.listen({port:env.PORT},()=>{
    console.log(`server is running in port: ${env.PORT}`)
})