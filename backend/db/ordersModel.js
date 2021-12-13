const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  status: String,
});

module.exports = mongoose.model('orders', ordersSchema);
