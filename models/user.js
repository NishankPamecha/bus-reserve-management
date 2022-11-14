const mongoose=require('mongoose')
const schema=mongoose.Schema


 const userSchema = new schema({
    name: {
        type: String,
        require: true
    },


    email_id: {
        type: String,
        required: true,
        unique:true
    },

    mobile_number: {
        type: Number,
        require: true

    },
    password:{
        type:String,
        require:true
    }
    
},
{
    timestamps: true
}


 );

 module.exports=mongoose.model('userTable', userSchema)
