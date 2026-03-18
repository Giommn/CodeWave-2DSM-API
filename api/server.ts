import express,{Request,Response} from 'express'

const app=express()

app.use(express.json());

const Port:number=3000;

app.get("/",(req:Request,res:Response)=>{
    res.send({message:"Oi"})
})

app.listen(Port,()=>{
    console.log("Server is running");
});