const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: String
})

module.exports = mongoose.model('cars', carsSchema);
