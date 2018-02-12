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
    res.send('Shakalakaboom boom')
})
server.post('/payload',(req,res) => {
    console.log()
    res.json(req.body)
})

server.get('/user', (req,res) => {
    res.send('Shakalakaboom boom')
})



server.listen(port, err => {
    if(err) console.log(err);
    console.log(`Server listening to ${port}`)
})

