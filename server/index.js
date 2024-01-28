const express = require('express')
const path = require('path')
const server = express()
const port = 3000

server.use(express.static('server/public'))

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, `./index.html`))
})
