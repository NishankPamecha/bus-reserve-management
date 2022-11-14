const express=require('express')
const {register, login} = require('../controllers/auth_user')
const { body} = require('express-validator');
const router=express.Router() 

router.post('/register',[body('email_id').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 })], register)
router.post('/login',login)

module.exports=router