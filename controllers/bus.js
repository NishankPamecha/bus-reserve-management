const BusSchema=require('../models/bus')
const mongoose=require('mongoose')


// create bus
const createBus = async(req, res)=>{

    //add doc to db
    const{bus_name, bus_number, total_seats, bus_desc, bus_type}=req.body
    try
    {
        const bus = await BusSchema.create({bus_name, bus_number, total_seats, bus_desc, bus_type})
        res.status(200).json(bus)

    }
    catch(error){
        res.status(400).json({error: error.mssg})

    }
    
}

// get all buss
const getBuses=async(_req, res)=>{
    const allBus= await BusSchema.find({}).sort({createdAt:-1})
    res.status(200).json(allBus)
}


//get a single bus
const getBus = async(req, res)=>{
    
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "id is not a valid one"})
        }
        const bus=await BusSchema.findById(id)
        if(!bus){
           return res.status(404).json({error: "no such bus found"})
        }
        res.status(200).json(bus)
   
}


//update a bus
const updateBus=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valid one"})
    }
    const bus=await BusSchema.findOneAndUpdate({_id: id}, {...req.body})
    if(!bus){
        return res.status(404).json({error: "no such bus found"})
     }
     res.status(200).json(bus)


}




//delete a bus

const delBus=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valid one"})
    }
    const bus=await BusSchema.findOneAndDelete({_id: id})
    if(!bus){
        return res.status(404).json({error: "no such bus found"})
     }
     res.status(200).json(bus)


}



module.exports = {
    createBus,
    getBus,
    getBuses,
    updateBus,
    delBus
}