const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  userId: String,
  items: String,
  status: Number
});

module.exports = mongoose.model('orders',ordersSchema);
