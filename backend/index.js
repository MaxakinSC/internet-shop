const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const mongoose = require('mongoose')
const carsModel = require('./db/carsModel')
const usersModel = require('./db/usersModel')
const ordersModel = require('./db/ordersModel')

app.use(bodyParser.json());

//cars:

  app.post('/cars', async (req, res) => {
    try {
      const result1 = await carsModel.create(req.body);
      res.send(result1);
    }
    catch(err) {
      if ( err.code === 11000 )
        res.send('The car is already exist');
      else
        res.send('Unknown error')
    }
})

app.get('/cars', async (req, res) => {
  const result1 = await carsModel.find();
  res.send(result1);
})

app.get('/cars/:carBrand', async (req, res) => {
  const data1 = await carsModel.find({ brand: req.params.carBrand });
  res.send(data1);
})

app.get('/cars/:carBrand/:carModel', async (req, res) => {
  const data2 = await carsModel.find({ brand: req.params.carBrand, model: req.params.carModel });
  res.send(data2);
})

app.get('/cars/:carBrand/:carModel/:carYear', async (req, res) => {
  const data3 = await carsModel.find({ brand: req.params.carBrand, model: req.params.carModel, year: req.params.carYear });
  res.send(data3);
})

//usersPost:

app.post('/users', async (req, res) => {
  try {
    const result2 = await usersModel.create(req.body);
    res.send(result2);
  }
  catch (err1) {
    if (err1.code === 11000)
      res.send('This user already exist')
    else
      res.send('Unknown error')
  }
})



app.get('/users', async (req, res) => {
  const result2 = await usersModel.find();
  res.send(result2);
})

app.get('/users/:userName', async (req, res) => {
  const data4 = await usersModel.find({ name: req.params.userName });
  res.send(data4);
})

app.get('/users/:userName/:userYear', async (req, res) => {
  const data5 = await usersModel.find({ name: req.params.userName, year: req.params.userYear });
  res.send(data5);
})

app.get('/users/:userName/:userYear/:userMail', async (req, res) => {
  const data6 = await usersModel.find({ name: req.params.userName, year: req.params.userYear, mail: req.params.userMail });
  res.send(data6);
})

//ordersPost:

app.post('/orders', async (req, res) => {
  const result3 = await ordersModel.create(req.body);
  res.send(result3);
})

//ordersGet:

app.get('/orders', async (req, res) => {
  const result3 = await ordersModel.create(req.body);
  res.send(result3);
})

app.get('/orders/:userId', async (req, res) => {
  const result3 = await ordersModel.find({ userId: req.params.userId });
  res.send(result3);
})

//start:

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
    start();
})

const start = async () => {
  await mongoose.connect('mongodb+srv://maxim:Tt2528593@cluster0.lfth6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  // await mongoose.connect('mongodb://127.0.0.1/database');
  console.log('mongodb is connected');
  const cars = await carsModel.find();
  const users = await usersModel.find();
  const orders = await ordersModel.find();
}
