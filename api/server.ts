import express from 'express'
import router from './routes'
import cors from 'cors'
import path from 'path'
import UserService from './src/service/user.Service'
import { NivelUser } from './src/generated/prisma'
import UserRepository from './src/repositories/user.Repository'
const app=express()
async function seed(){
    
    const userepo=new UserService(new UserRepository())
    const continuar= await userepo.listUser()
    if(continuar.length>0){
        return 
    }

    const  usuarios=[{
  nome: "ADM",
  senha: "12345678",
  email: "adm@sistema.com",
  nivel_user: NivelUser.ADM
},{
  nome: "USER",
  senha: "12345678",
  email: "user@sistema.com",
  nivel_user: NivelUser.USER
},{
  nome: "CHECKER",
  senha: "12345678",
  email: "checker@sistema.com",
  nivel_user: NivelUser.CHECKER
}]

for(const x of usuarios){
    const usuario =await userepo.createUser(x)
    console.log("Usuario:"+usuario.user_name)

}
}
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json());
app.use('/norma/getpdf',express.static(path.resolve(__dirname,'upload_pdf')))
const Port:number=3000;

app.use(router)


app.listen(Port,async ()=>{
    console.log("Server is running");
    console.log(`http://localhost:${Port}`)
    await seed()



});
