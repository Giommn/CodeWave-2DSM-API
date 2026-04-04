import express from 'express'
import router from './routes'
import cors from 'cors'
import path from 'path'
const app=express()

app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json());
app.use('/norma/getpdf',express.static(path.resolve(__dirname,'upload_pdf')))
const Port:number=3000;

app.use(router)


app.listen(Port,()=>{
    console.log("Server is running");
    console.log(`http://localhost:${Port}`)


});
