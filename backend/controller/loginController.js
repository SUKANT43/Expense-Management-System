const loginData=require('../model/loginModel')

const signUp=(req,res)=>{
    try{

    }
    catch(e){
        return res.status(500).json({err:e.message})
    }
}

const signIn=(req,res)=>{
    try{

    }
    catch(e){
        return res.status(500).json({err:e.message})
    }
}

const changePassword=(req,res)=>{
    try{

    }
    catch(e){
        return res.status(500).json({err:e.message})
    }
}

const me=(req,res)=>{
    try{

    }
    catch(e){
        return res.status(500).json({err:e.message})
    }
}

module.exports={signUp,signIn,changePassword,me}