const User = require('../model/client');


// --------------create account for client------------------------------  
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



// --------------Login System for client------------------------------

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

// --------------Updata Client------------------------------

exports.updateClient= async (req, res) => {
  const { _id } = req.params;
  const { name, email, password, contact } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's data
    user.name = name;
    user.email = email;
    user.contact = contact;
    user.password= password;

    // Save the updated user
    const updatedUser = await user.save();

    // Return the updated user
    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// --------------GET all Client------------------------------

exports.getAllClient = async(req, res) =>{

  try{
    const clients = await User.find({}, "-password -__v")
    return res.status(200).json({clients})
}
catch(error){
  return res.status(500).json({message:"Internal server error"})
}  
}


// --------------GET Client By Email------------------------------

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


// --------------GET Client By Id------------------------------

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

