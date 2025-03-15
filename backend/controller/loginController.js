const loginData=require('../model/loginModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')



const signUp=async(req,res)=>{
    try{
       const{name,email,password}=req.body
       if(!name||!email || !password){
        return res.status(202).json({msg:"please enter all fields"})
       }
       const isEmailAlreadyExist=await loginData.findOne({email})
       if(isEmailAlreadyExist){
        return res.status(203).json({msg:"your email is already exist"})
       }
       const salt=await bcrypt.genSalt(10)
       const hashedPassword=await bcrypt.hash(password,salt)
       const newUser=await loginData.create({
        name,
        email,
        password:hashedPassword,
       })
       return res.status(200).json({newUser})
    }
    catch(e){
        return res.status(500).json({err:e.message})
    }
}

const signIn=async(req,res)=>{
    try{
        const {email,password}=req.body

        if(!email || !password){
            return res.status(201).json({msg:"please enter all fields"})
        }
        const findEmail=await loginData.findOne({email})
        if(!findEmail){
            console.log("email not registered")
            return res.status(202).json({msg:"your email id is not registered"})
        }
        const comaprePass=bcrypt.compare(password,findEmail.password)
        if(!comaprePass){
            return res.status(203).json({msg:"please enter correct password"})
        }
        console.log(email +"  "+ password)

        return res.status(200).json({
            name:findEmail.name,
            email,
            password:findEmail.password,
            token:createToken(findEmail.id),
        })
    }
    catch(e){
        return res.status(500).json({err:e.message})
    }
}

const changePassword=async(req,res)=>{
    try{
        const{email,password,newPassword}=req.body
        if(!email||!password||!newPassword){
            return res.status(201).json({msg:"please enter all fields"})
        }
        const findUser=await loginData.findOne({email})
        if(!findUser){
            return res.status(202).json({msg:'no user found enter correct email id'})
        }

        const comaprePassword=await bcrypt.compare(password,findUser.password)
        if(!comaprePassword){
            return res.status(203).json({msg:"enter password correctly"})
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(newPassword,salt)
        findUser.password=hashedPassword
        await findUser.save()
        return res.status(200).json({msg:"password changed successfully"})
    }
    catch(e){
        return res.status(500).json({err:e.message})
    }
}

const me=(req,res)=>{
    try{
        return res.status(200).json({
            id:req.user.id,
            name:req.user.name,
            email:req.user.email
        })

    }   
    catch(e){
        return res.status(500).json({err:e.message})
    }
}

const createToken=(id)=>{
    return jwt.sign({id},process.env.SECRET,{
        expiresIn:'30d'
    })
}

module.exports={signUp,signIn,changePassword,me}