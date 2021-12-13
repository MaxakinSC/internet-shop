const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  status: Number,
});

module.exports = mongoose.model('orders',ordersSchema);

