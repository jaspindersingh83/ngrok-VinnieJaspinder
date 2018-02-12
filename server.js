const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const port = process.env.PORT || 3030

const server = express()


//Middleware 
server.use(bodyParser.json());
server.use(cors());

//routes
server.get('/',(req,res) => {
    res.send('Magic is happening')
})
server.post('/payload',(req,res) => {
    console.log(req.body);
    res.json(req.body)
})


server.listen(port, err => {
    if(err) console.log(err);
    console.log(`Server listening to ${port}`)
})

