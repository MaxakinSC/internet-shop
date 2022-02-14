const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({
  email: String,
  phone: String,
  name: String,
  password: String,
});

usersSchema.index({ email: 1, phone: 1 }, { unique: true });
module.exports = mongoose.model('users', usersSchema);


