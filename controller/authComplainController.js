const Complain = require("../model/complain")

exports.addComplain = async (req, res) =>{
    const {complain_id, email, complain_text, complain_status } = req.body

    try{
        const existingComplain = await Complain.findOne({complain_id})
        if(existingComplain){
            return res.status(400).json({message:"This complain_Id already exists"})
        }

        const complain = new Complain({
            complain_id, complain_text, complain_status, email
        })

        await complain.save()
        return res.status(200).json({complain})
    }

    catch(error){
        return res.status(500).json({message:"Internal Server Error"})
    }
}

exports.updateComplain= async (req, res) => {
    const {_id } = req.params;
    const { complain_text, complain_status } = req.body;
  
    try {
      // Find the complain by ID
      const complain = await Complain.findById(_id);
  
      if (!complain) {
        return res.status(404).json({ message: 'Complain not found' });
      }
  
      // Update the complain's data
     complain.complain_text=complain_text;
     complain.complain_status=complain_status
  
      // Save the updated complain
      const updatedComplain = await complain.save();
  
      // Return the updated complain
      return res.status(200).json({ user: updatedComplain });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  exports.getAllComplain = async(req, res) =>{
    try{
      const allComplain = await Complain.find({}, "-__v" )
      return res.status(202).json({allComplain})
    }
    catch(error){
      return res.status(500).json({message:"Internal server error"})
    }
  }


  exports.getComplainById = async(req, res) =>{
    const {_id} = req.params;
    try{
      const complain = await Complain.findById({_id}, " -__v");
      if(!complain){
        return res.status(404).json({message:"complain not found"})
      }
      return res.status(200).json({complain})
    }
    catch(error){
      return res.status(500).json({message:"Internal server error"})
    }
  }
  