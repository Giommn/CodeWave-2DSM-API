import express from 'express'
import router from './routes'
import cors from 'cors'
const app=express()

app.use(express.json());

const Port:number=3000;
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(router)


app.listen(Port,()=>{
    console.log("Server is running");
    console.log(`http://localhost:${Port}`)
});