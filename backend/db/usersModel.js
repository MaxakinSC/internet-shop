const mongoose = require('mongoose');
module.exports = mongoose.model('users', usersSchema);

const usersSchema = new mongoose.Schema({
  email: String,
  phone: Number,
  name: String,
  password: String,
});

usersSchema.index({ email: 1, phone: 1 }, { unique: true });


