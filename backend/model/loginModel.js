const mongoose=require('mongoose')

const schema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter the name"]
        },
        email:{
            type:String,
            required:[true,"plese enter all email"]
        },
        password:{
            type:String,
            required:[true,"please enter all password"]
        }
    },{
        timestamps:true
    }
)

module.exports=mongoose.model('user',schema)