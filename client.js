const express = require('express')

const app = express()

//defining the root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//specifying the listening port
app.listen(8081, ()=>{
    console.log('Listening on port 8081')
})
