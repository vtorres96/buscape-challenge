const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv/config')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

const env = process.env

mongoose.connect(`mongodb+srv://vtorres96:03V01t96m.@cluster0-bfkrt.mongodb.net/buscape-challenge?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io
    
    next()
})

app.use(cors())

app.use(require('./routes'))

server.listen(3333, () => {
    console.log('Servidor rodando na porta: 3333')
})