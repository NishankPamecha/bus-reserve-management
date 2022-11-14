const bcrypt=require('bcryptjs')
const adminTable=require('../models/admin')
const {validationResult } = require('express-validator');


const register= async(req, res, next)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newAdmin= await adminTable.create({
            name:req.body.name,
            email_id:req.body.email_id,
            phone_number:req.body.phone_number,
            password:hash
        })
        
        res.status(200).json(newAdmin)


    }
    catch(err){
        next(err)
    }
}

const login = async(req, res)=>{
    try{
        const admin=await adminTable.findOne({email_id:req.body.email_id})
        if(!admin) 
            return res.status(404).json("please login with right credentials....")

        const isPasswordCorrect = await bcrypt.compareSync(
            req.body.password,
            admin.password
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

module.exports={register, login}