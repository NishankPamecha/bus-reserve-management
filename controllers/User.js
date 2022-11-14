const userTable=require('../models/user')
const mongoose=require('mongoose')


// create user
const createUser = async(req, res)=>{

    //add doc to db
    const{name, email_id, mobile_number, password}=req.body
    try
    {
        const newUser = await userTable.create({name, email_id, mobile_number, password})
        res.status(200).json(newUser)

    }
    catch(error){
        res.status(400).json({error: error.mssg})

    }
    
}

// get all users
const getUsers=async(_req, res)=>{
    const allUsers= await userTable.find({}).sort({createdAt:-1})
    res.status(200).json(allUsers)
}


//get a single user
const getUser = async(req, res)=>{
    
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "id is not a valis one"})
        }
        const user=await userTable.findById(id)
        if(!user){
           return res.status(404).json({error: "no such user found"})
        }
        res.status(200).json(user)
   
}


//update a user
const updateUser=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valis one"})
    }
    const user=await userTable.findOneAndUpdate({_id: id}, {...req.body})
    if(!user){
        return res.status(404).json({error: "no such user found"})
     }
     res.status(200).json(user)


}




//delete a user

const delUser=async(req, res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "id is not a valis one"})
    }
    const user=await userTable.findOneAndDelete({_id: id})
    if(!user){
        return res.status(404).json({error: "no such user found"})
     }
     res.status(200).json(user)


}



module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    delUser
}