const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  year: String,
  mail: { type: String, unique: true }
})

module.exports = mongoose.model('users', usersSchema);
