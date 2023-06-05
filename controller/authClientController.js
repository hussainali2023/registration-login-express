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

exports.getAllClient = async(req, res) =>{

  try{
    const clients = await User.find({}, "-password -__v")
    return res.status(200).json({clients})
}
catch(error){
  return res.status(500).json({message:"Internal server error"})
}  
}

exports.getClientByEmail = async(req, res) =>{
  const {email} = req.params;
  try{
    const client = await User.findOne({email}, "-password -__v");
    if(!client){
      return res.status(404).json({message:"user not found"})
    }
    return res.status(200).json({client})
  }
  catch(error){
    return res.status(500).json({message:"Internal server error"})
  }
}
exports.getClientById = async(req, res) =>{
  const {_id} = req.params;
  try{
    const client = await User.findOne({_id}, "-password -__v");
    if(!client){
      return res.status(404).json({message:"user not found"})
    }
    return res.status(200).json({client})
  }
  catch(error){
    return res.status(500).json({message:"Internal server error"})
  }
}
