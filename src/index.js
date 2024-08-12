const express = require('express')
const routers = require('./route')

const app = express()
app.use(express.json())
app.use(routers)
 

app.listen(3000, () => {
  console.log('server is up!🚀')
})
