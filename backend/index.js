const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const carsModel = require('./db/carsModele')

app.get('/:carBrand', (req, res) => {
  res.send('this is a car brand' + ' ' + req.params.carBrand)
})

app.get('/:carBrand/:carModel', (req, res) => {
  res.send('this is a car model' + ' ' + req.params.carModel)
})

app.get('/:carBrand/:carModel/:carId', (req, res) => {
  res.send('this is a car id' + ' ' + req.params.carId)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
 start();
})

const start = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/сars');
  console.log("mongodb is connected");
  const cars = await carsModel.find();
  console.log(cars);
}

