const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  email: String,
  phone: Number,
  name: String,
  password: String,
});

module.exports = mongoose.model('users', usersSchema);
