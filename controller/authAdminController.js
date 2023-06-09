// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const User = require('../model/admin');

exports.signup = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password:req.body.password
  })
  await newUser.save()
  .then(()=>{
    res.status(200).send(newUser)
  })
  .catch(err =>{
    console.log("Error is", err.message)
  })
   
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email' });
    }

    // Validate password
    if (user.password !== password) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
