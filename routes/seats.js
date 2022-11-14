const express=require('express')
const router=express.Router()  //instance of router

const {createSeat, getSeat, getSeats, updateSeat, delSeat}=require('../controllers/seats')


router.get('/', getSeats)

router.post('/', createSeat)

router.get('/:id', getSeat)

router.delete('/:id', delSeat)

router.patch('/:id', updateSeat)
module.exports=router