const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Her kommer det sql data istedenfor denne teksten')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Kevin's app listening on port ${port}`)
})

app.use('/hei', express.static('public'))

