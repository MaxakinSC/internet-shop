const mongoose = require('mongoose');
module.exports = mongoose.model('orders',ordersSchema);

const ordersSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  status: Number
});


