const express = require('express');

const router = express.Router();

const SignupUser = require('../../../Schemas/UserSignup');

router.post('/Usersignup', async (req,res,next)=>{
    const {name,email,password,retype} = req.body;
    const UserSignup = new SignupUser({
        name,email,password,retype
    });

    if(password === retype)
    {
        UserSignup.save().then(result=>{
            res.status(200);
            res.json();
        });
    }
    
});

module.exports = router;