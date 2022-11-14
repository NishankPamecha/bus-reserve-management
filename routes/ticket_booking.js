const express=require('express')
const router=express.Router()  //instance of router

const {createTicket, getTickets, getTicket, delTicket, updateTicket, seats_avail}=require('../controllers/ticket_booking')


router.get('/', getTickets)

router.post('/', createTicket)

router.get('/:id', getTicket)

router.delete('/:id', delTicket)

router.patch('/:id', updateTicket)
module.exports=router