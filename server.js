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
server.post('/tyrion',(req,res) => {
    res.json(req.body)
})



server.listen(port, err => {
    if(err) console.log(err);
    console.log(`Server listening to ${port}`)
})

