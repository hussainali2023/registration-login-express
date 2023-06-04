const User = require('../model/client');

exports.signup = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password:req.body.password,
    contact:req.body.contact,
    isActive:req.body.isActive
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
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Validate password
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
