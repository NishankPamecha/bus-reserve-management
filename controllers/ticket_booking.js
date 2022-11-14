const ticketTable=require('../models/ticket_booking')
const busTable=require('../models/bus')
const mongoose=require('mongoose')


// create Ticket
const createTicket = async(req, res)=>{

    //add doc to db
    const{name, phone_number, no_passengers, date, bus_number}=req.body
    try
    {        
        const ticket = await ticketTable.create({name, phone_number, no_passengers, date, bus_number})          
        res.status(200).json(ticket)
    }
    catch(error){
        res.status(400).json({error: error.mssg})
    }
}

// get all tickets
const getTickets=async(_req, res)=>{
    const allTicket= await ticketTable.find({}).sort({createdAt:-1})
    res.status(200).json(allTicket)
}


//get a single Ticket
const getTicket = async(req, res)=>{
    
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "id is not a valid one"})
        }
        const ticket=await ticketTable.findById(id)
        if(!ticket){
           return res.status(404).json({error: "no such ticket found"})
        }
        res.status(200).json(ticket)
   
}


//update a ticket
const updateTicket=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valid one"})
    }
    const ticket=await ticketTable.findOneAndUpdate({_id: id}, {...req.body})
    if(!ticket){
        return res.status(404).json({error: "no such ticket found"})
     }
     res.status(200).json(ticket)


}




//delete a ticket

const delTicket=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valid one"})
    }
    const ticket=await ticketTable.findOneAndDelete({_id: id})
    if(!ticket){
        return res.status(404).json({error: "no such ticket found"})
     }
     res.status(200).json(ticket)


}

//seats available
const seats_avail=async(req, res)=>{

    const{bus_number}=req.body

    const bus = await busTable.findOne({ bus_number });
        if(!bus) 
            return res.status(400).json({error:"invalid bus number"})
        bus.seats_available -= req.body.passengers;
        await bus.save(); 
    res.status(200).json(bus)
}



module.exports = {
    createTicket,
    getTicket,
    getTickets,
    updateTicket,
    delTicket,
    seats_avail
}