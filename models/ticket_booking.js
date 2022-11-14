const mongoose=require('mongoose')

const schema=mongoose.Schema

const ticketBookingScema=new schema({
    //name
    name:{
        type:String,
        require:true
    },

    //phonenumber
    phone_number:{
        type:Number,
        require:true
    },

    //passengers
    no_passengers:{
        type:Number,
        require:true
    },

    bus_number:{
        type:Number,
        required:true
    },

    //date
    date:{
        type:Date,
        default:Date.now
        
    }

},
{
    timestamps:true
})

module.exports=mongoose.model('TicketBookingSchema',ticketBookingScema)