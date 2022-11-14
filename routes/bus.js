const express=require('express')
const router=express.Router()  //instance of router
const busTable=require('../models/bus')
const {createBus,getBus,getBuses, updateBus,delBus}=require('../controllers/bus')


router.get('/', getBuses)

router.post('/', createBus)

router.get('/:id', getBus)

router.delete('/:id', delBus)

router.patch('/:id', updateBus)
module.exports=router