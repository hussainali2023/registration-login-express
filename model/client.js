const mongoose = require('mongoose');
const {Schema, model } = mongoose


const currentTime = new Date();

// Convert to Indian Standard Time (IST)
const options = { timeZone: 'Asia/Kolkata' };
const indianTime = currentTime.toLocaleString('en-IN', options);
// console.log(indianTime)

const ClientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  createdAt: {type: String , default: indianTime},
  isActive: { type: Boolean, required: true }
});


const User = model("Client", ClientSchema);

module.exports = User;
