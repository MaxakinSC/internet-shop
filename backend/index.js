const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const mongoose = require('mongoose')
const carsModel = require('./db/carsModel')
const usersModel = require('./db/usersModel')

app.use(bodyParser.json());

app.post('/cars', async (req, res) => {
  const result = await carsModel.create(req.body)
  res.send(result);
});

app.get('/cars/:carBrand', async (req, res) => {
  const data1 = await carsModel.find({ brand: req.params.carBrand });
  res.send(data1)
})

app.get('/cars/:carBrand/:carModel', async (req, res) => {
  const data2 = await carsModel.find({ brand: req.params.carBrand, model: req.params.carModel });
  res.send(data2)
})

app.get('/cars/:carBrand/:carModel/:carYear', async (req, res) => {
  const data3 = await carsModel.find({ brand: req.params.carBrand, model: req.params.carModel, year: req.params.carYear });
  res.send(data3)
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/users', async (req, res) => {
  const result1 = await usersModel.create(req.body)
  res.send(result1);
});

app.get('/users/:userName', async (req, res) => {
  const data4 = await usersModel.find({ name: req.params.userName });
  res.send(data4)
})

app.get('/users/:usersName/:usersMail', async (req, res) => {
  const data5 = await usersModel.find({ name: req.params.userName, mail: req.params.userMail });
  res.send(data5)
})

app.get('/users/:usersName/:usersMail', async (req, res) => {
  const data6 = await carsModel.find({ name: req.params.userName, mail: req.params.userMail, year: req.params.userYear });
  res.send(data6)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  start();
})


const start = async () => {
  await mongoose.connect('mongodb://127.0.0.1/cars');

  console.log('mongodb is connected')
  const cars = await carsModel.find();
  const users = await usersModel.find();
}



