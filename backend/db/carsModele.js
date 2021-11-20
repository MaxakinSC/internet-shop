const mongoose =require('mongoose');

const carsSchema=new mongoose.Schema({
  model:String,
  brand:String,
  year:String,
})

module.exports = mongoose.model('cars',carsSchema);
