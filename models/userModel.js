const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true, unique: true },
  address: { type: String }
});

module.exports = mongoose.model('User', userSchema);
