const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const carsModel = require('./db/carsModel')

app.get('/:carBrand', async (req, res) => {
  const data1 = await carsModel.find({ brand: req.params.carBrand });
  res.send(data1)
})

app.get('/:carBrand/:carModel', async (req, res) => {
  const data2 = await carsModel.find({ brand: req.params.carBrand, model: req.params.carModel });
  res.send(data2)
})

app.get('/:carBrand/:carModel/:carYear', async (req, res) => {
  const data3 = await carsModel.find({ brand: req.params.carBrand, model: req.params.carModel, year: req.params.carYear });
  res.send(data3)
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
