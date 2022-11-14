const mongoose=require('mongoose')
const schema=mongoose.Schema

const seatsSchema=new schema({

    //seat number
    seat_number:{
        type:Number,
        require:true
    },

    //seat_type
    seat_type:{
        type:String,
        require:true
    },

    //seat description
    seat_description:{
        type:String
    }
},
{timestamps:true}
)

module.exports=mongoose.model('SeatSchema',seatsSchema)
