const seatTable=require('../models/seats')
const mongoose=require('mongoose')


// create seat
const createSeat = async(req, res)=>{

    //add doc to db
    const{seat_number, seat_type, seat_description}=req.body
    try
    {
        const seat = await seatTable.create({seat_number, seat_type, seat_description})
        res.status(200).json(seat)

    }
    catch(error){
        res.status(400).json({error: error.mssg})

    }
    
}

// get all seats
const getSeats=async(_req, res)=>{
    const allseat= await seatTable.find({}).sort({createdAt:-1})
    res.status(200).json(allseat)
}


//get a single seat
const getSeat = async(req, res)=>{
    
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "id is not a valid one"})
        }
        const seat=await seatTable.findById(id)
        if(!seat){
           return res.status(404).json({error: "no such seat found"})
        }
        res.status(200).json(seat)
   
}


//update a seat
const updateSeat=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valid one"})
    }
    const seat=await seatTable.findOneAndUpdate({_id: id}, {...req.body})
    if(!seat){
        return res.status(404).json({error: "no such seat found"})
     }
     res.status(200).json(seat)


}




//delete a seat

const delSeat=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valid one"})
    }
    const seat=await seatTable.findOneAndDelete({_id: id})
    if(!seat){
        return res.status(404).json({error: "no such seat found"})
     }
     res.status(200).json(seat)


}



module.exports = {
    createSeat,
    getSeat,
    getSeats,
    updateSeat,
    delSeat
}