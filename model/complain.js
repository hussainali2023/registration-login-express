const mongoose = require('mongoose');
const {Schema, model } = mongoose

const currentTime = new Date();

// Convert to Indian Standard Time (IST)
const options = { timeZone: 'Asia/Kolkata' };
const indianTime = currentTime.toLocaleString('en-IN', options);
// console.log(indianTime)

const ComplainSchema = new Schema({
  complain_id: { unique: true, type: String, required: true,  },
  email: { type: String, required: true },
  complain_text: { type: String, required: true },
  complain_status: { type: Boolean, required: true },
  createdAt: {type: String , default: indianTime}
});


const Complain = model("Complain", ComplainSchema);

module.exports = Complain;
