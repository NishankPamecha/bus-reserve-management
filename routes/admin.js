const express=require('express')
const router=express.Router()  //instance of router
const adminTable=require('../models/admin')
const {createAdmin, getAdmins, getAdmin, delAdmin, updateAdmin}=require('../controllers/admin')


router.get('/', getAdmins)

router.post('/', createAdmin)

router.get('/:id', getAdmin)

router.delete('/:id', delAdmin)

router.patch('/:id', updateAdmin)
module.exports=router