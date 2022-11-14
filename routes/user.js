const express=require('express')
const router=express.Router()  //instance of router
const schemaTable=require('../models/user')
const {createUser, getUsers, getUser, delUser, updateUser}=require('../controllers/User')


router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', delUser)

router.patch('/:id', updateUser)
module.exports=router
