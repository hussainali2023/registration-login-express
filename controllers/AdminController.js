const User = require("../models/Admin")

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const signup = (req, res ) =>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
            let user = new User ({
                name: req.body.name,
                email: req.body.email,
                password: hashedPass
            })
            user.save()
            // res.send(user)
            .then(user =>{
                res.json({
                    message:"User created Successfully"
                })
            })
            .catch(error =>{
                res.json({
                    message:"An error occured"
                })
            })
        }
    })

}

module.exports = {
    signup
}