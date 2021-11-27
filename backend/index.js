const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('cars')
})


app.get('/:carBrand', (req, res) => {
  res.send('this is car brand')
})

app.get('/:carBrand/:carModel', (req, res) => {
  res.send('this is car model')
})

app.get('/:carBrand/:carModel/:carId', (req, res) => {
  res.send('this is car id' + req.params.carId)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
