const mongoose=require('mongoose')
const schema=mongoose.Schema


 const adminSchema = new schema({
    name: {
        type: String,
        require: true
    },

    
    email_id: {
        type: String,
        required: true,
        unique:true
    },

    phone_number: {
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

 module.exports=mongoose.model('adminTable', adminSchema)
