const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  name: String,
  password: String,
});

module.exports = mongoose.model('users', usersSchema);
