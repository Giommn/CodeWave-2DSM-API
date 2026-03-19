import express from 'express'
import router from './src/routes/userControlerRoute';
const app=express()

app.use(express.json());

const Port:number=3000;

app.use(router)

app.listen(Port,()=>{
    console.log("Server is running");
    console.log(`http://localhost:${Port}`)
});