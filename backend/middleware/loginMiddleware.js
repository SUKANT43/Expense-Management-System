const jwt=require('jsonwebtoken')
const userData=require('../model/loginModel')

const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(" ")[1]
            const decode= jwt.verify(token,process.env.SECRET)
            req.user=await userData.findById(decode.id)
            if(!req.user){
                return res.status(201).json({msg:"please enter a valid token"})
            }
            next()
        }
        catch(e){
            console.log(e.message)
        }
    }
}

module.exports={protect}