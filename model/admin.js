const mongoose = require('mongoose');
const {Schema, model } = mongoose


const AdminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


const User = model("Admin", AdminSchema);

module.exports = User;
