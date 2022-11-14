const bcrypt=require('bcryptjs')
const userTable=require('../models/user')
const {validationResult } = require('express-validator');



const register= async(req, res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser= await userTable.create({
           
            name:req.body.name,
            email_id:req.body.email_id,
            mobile_number:req.body.mobile_number,
            password:hash
        })
        
        res.status(200).json(newUser)


    }
    catch(error){
        res.status(400).json({error: error.mssg})

    }
}


//login
const login = async(req, res)=>{
    try{
        const user=await userTable.findOne({email_id:req.body.email_id})
        if(!user) 
            return res.status(404).json("please login with right credentials....")

        const isPasswordCorrect = await bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if(!isPasswordCorrect) 
            return res.status(400).json("please login with right credentials....")
        res.status(200).json({error:"logged in successfully"})
    }
    catch(error){
        res.status(400).json({error: "Oops something went wrong...."})

    }
    //res.send({mssg:"hiiii"})
}


module.exports={register,
    login}