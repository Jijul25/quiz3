const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello dunia')
})

app.get('/bye', (req, res) => {
    res.send('Bye bye dunia!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
