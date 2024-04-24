require('dotenv').config()

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Isha!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login</h1>')
})

app.get('/yt', (req,res) => {
  res.send("youtube is started")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})