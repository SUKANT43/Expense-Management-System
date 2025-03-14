const mongoose=require('mongoose')

const connect=async()=>{
    try{
    const connect=await mongoose.connect(process.env.MONGO_URL)
    if(connect){
        console.log("DB is connected")
    }
    else if(!connect){
        console.log("DB is not connected")
    }
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports=connect