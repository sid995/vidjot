const express = require('express')

const app = new express()

const PORT = 5000

// Middleware
app.use((req, res, next) => {
  // console.log(Date.now())
  req.name = 'Sid'
  next()
})

// Index Route
app.get('/', (req, res) => {
  res.status(200).send(req.name)
})

// About Route
app.get('/about', (req, res) => {
  res.send('about')
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
