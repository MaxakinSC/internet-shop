const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require('mongoose');
const carsModel = require('./db/carsModel');
const usersModel = require('./db/usersModel');
const ordersModel = require('./db/ordersModel');

app.use(bodyParser.json());

//carsPost:

  app.post('/cars', async (req, res) => {
    try {
      const result1 = await carsModel.create(req.body);
      res.send(result1);
    }
    catch(err1) {
      if ( err1.code === 11000 )
        res.send('The car is already exist');
      else
        res.send('Unknown error');
    }
});

//carsGet:

app.get('/cars', async (req, res) => {
  const { minprice, maxprice, minyear, maxyear, page, limit, sort, order, model } = req.query;
  let match1 = {};
  let options = {};
  if (minprice !== undefined) {
    if (match1.price === undefined) {
      match1.price = {};
    }
    match1.price.$gte = minprice;
  }
  if (maxprice !== undefined) {
    if (match1.price === undefined) {
      match1.price = {};
    }
    match1.price.$lte = maxprice;
  }
  if (minyear !== undefined) {
    if (match1.year === undefined) {
      match1.year = {};
    }
    match1.year.$gte = minyear;
  }
  if (maxyear !== undefined) {
    if (match1.year === undefined) {
      match1.year = {};
    }
    match1.year.$lte = maxyear;
  }
  if (page !== undefined) {
    options.skip = (+page - 1) * +limit; // (page - 1) * limit
  }
  if (limit !== undefined) {
    options.limit = +limit
  }
  if (sort !== undefined && order !== undefined) {
    options.sort = { [sort]: order === 'asc' ? 1 : -1 }
  }
  if (model !== undefined) {
    match1.model = new RegExp(model, 'i')
  }
  const result1 = await carsModel.find(match1, {}, options); // { skip: 2, limit: 2, sort: { year: -1 } }
  res.send(result1);
});

//usersPost:

app.post('/users', async (req, res) => {
  try {
    const result2 = await usersModel.create(req.body);
    res.send(result2);
  }
  catch (err2) {
    if (err2.code === 11000)
      res.send('This user already exist');
    else
      res.send('Unknown error');
  }
});

//usersGet:

app.get('/users', async (req, res) => {
  const { name } = req.query
  let match = {}
  if (name !== undefined) {
    match.name = new RegExp(name, 'i')
  }
  const result2 = await usersModel.find(match);
  console.log(match, name)
  res.send(result2);
});

app.patch('/users/:userId', async (req, res) => {
  const result2 = await usersModel.updateOne({ _id: req.params.userId }, { $set: req.query});
  res.send(result2);
});

//ordersPost:

app.post('/orders', async (req, res) => {
  const result3 = await ordersModel.create(req.body);
  res.send(result3);
});

//ordersGet:

app.get('/orders', async (req, res) => {
  const result3 = await ordersModel.find();
  res.send(result3);
});

app.get('/orders/:userId', async (req, res) => {
  const result3 = await ordersModel.find({ userId: req.params.userId });
  res.send(result3);
});

//start:

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
    start();
});

const start = async () => {
  await mongoose.connect('mongodb+srv://maxim:Tt2528593@cluster0.lfth6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  //await mongoose.connect('mongodb://127.0.0.1/database');
  console.log('mongodb is connected');
  const cars = await carsModel.find();
  const users = await usersModel.find();
  const orders = await ordersModel.find();
};
