import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { router } from "./routes/proverbs.js"
dotenv.config('.env')


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api', router)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`The server is now listening on ${PORT}`)
})