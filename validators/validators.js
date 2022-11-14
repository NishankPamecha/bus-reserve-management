const { body, validationResult  } = require("express-validator")


const validate_admin = async (req, res)=>{
    body('email_id').isEmail(),
    body('phone_number').isLength({ min: 10}),  
    body('password').isLength({ min: 5 })

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

}


const validate_user = async (req, res)=>{
    body('email_id').isEmail(),
    body('mobile_number').isLength({ min: 10}),  
    body('password').isLength({ min: 5 })

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

}

module.exports={
    validate_admin,
    validate_user
}
