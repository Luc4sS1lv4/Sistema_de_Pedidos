import fastify from "fastify"

const port = 8080
const app = fastify()


app.listen({port},()=>{
    console.log(`server is running in port: ${port}`)
})