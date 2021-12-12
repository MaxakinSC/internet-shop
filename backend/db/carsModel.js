const mongoose = require('mongoose');
module.exports = mongoose.model('cars',carsSchema);

const carsSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number
});

carsSchema.index({ brand: 1, model: 1, year: 1 }, { unique: true });


