const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const carsModel = require('./db/carsModel')

app.get('/:carBrand', async (req, res) => {
  const data = await carsModel.find({ brand: req.params.carBrand });
  res.send(data)
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
  await mongoose.connect('mongodb://127.0.0.1:27017/cars');
  console.log('mongodb is connected')
  const cars = await carsModel.find();
  console.log(cars);
}
