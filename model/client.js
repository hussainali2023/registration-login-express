const mongoose = require('mongoose');
const {Schema, model } = mongoose


const ClientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  isActive: { type: Boolean, required: true }
});


const User = model("Client", ClientSchema);

module.exports = User;
