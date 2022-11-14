const adminTable=require('../models/admin')
const mongoose=require('mongoose')


// create admin
const createAdmin = async(req, res)=>{

    //add doc to db
    const{name, email_id, phone_number, password}=req.body
    try
    {
        const admin = await adminTable.create({name, email_id, phone_number, password})
        res.status(200).json(admin)

    }
    catch(error){
        res.status(400).json({error: error.mssg})

    }
    
}

// get all admins
const getAdmins=async(_req, res)=>{
    const allAdmin= await adminTable.find({}).sort({createdAt:-1})
    res.status(200).json(allAdmin)
}


//get a single admin
const getAdmin = async(req, res)=>{
    
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "id is not a valid one"})
        }
        const admin=await adminTable.findById(id)
        if(!admin){
           return res.status(404).json({error: "no such admin found"})
        }
        res.status(200).json(admin)
   
}


//update a admin
const updateAdmin=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valid one"})
    }
    const admin=await adminTable.findOneAndUpdate({_id: id}, {...req.body})
    if(!admin){
        return res.status(404).json({error: "no such admin found"})
     }
     res.status(200).json(admin)


}




//delete a admin

const delAdmin=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valid one"})
    }
    const admin=await adminTable.findOneAndDelete({_id: id})
    if(!admin){
        return res.status(404).json({error: "no such admin found"})
     }
     res.status(200).json(admin)


}



module.exports = {
    createAdmin,
    getAdmin,
    getAdmins,
    updateAdmin,
    delAdmin
}
