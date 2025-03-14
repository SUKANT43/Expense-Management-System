const express=require('express')
const app=express()
const cors=require('cors')
const env=require('dotenv').config()
const DB=require('./config/db')
const login=require('./router/loginRoute')
app.use(express.json())

app.use(cors())

app.use((req,res,next)=>{
    console.log(req.path)
    next()
})

app.use('/api/auth',login)



app.listen(process.env.PORT,()=>{
    DB()
    console.log("port is connected to:"+process.env.PORT)
})
