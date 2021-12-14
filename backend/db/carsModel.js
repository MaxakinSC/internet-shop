const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  price: Number,
});

carsSchema.index({ brand: 1, model: 1, year: 1 }, { unique: true });

module.exports = mongoose.model('cars',carsSchema);
