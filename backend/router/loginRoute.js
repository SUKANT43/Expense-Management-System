const express=require('express')
const route=express.Router()
const {protect}=require('../middleware/loginMiddleware')
const {signUp,signIn,changePassword,me}=require('../controller/loginController')

route.post('/signup',signUp)
route.post('/signIn',signIn)
route.put('/changePassword',changePassword)
route.get('/me',protect,me)

module.exports=route