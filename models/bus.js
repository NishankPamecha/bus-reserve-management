const mongoose=require('mongoose')
const schema=mongoose.Schema

//schema for bus

const busSchema = new schema({

    //busname
    bus_name:{
        type:String,
        require:true
    },
    //bus number
    bus_number:{
        type:Number,
        require:true
    },
    //total seats
    total_seats:{
        type:Number,
        
        default:30
    },

    seats_available:{
        type:Number,
        default:30
    },

    //bus desc
    bus_desc:{
        type:String,
    },

    //bus_type
    bus_type:{
        type:String
    }


},
{
    timestamps:true
})

module.exports=mongoose.model('BusSchema',busSchema)