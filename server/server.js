require('dotenv').config()
const {SERVER_PORT} = process.env
const express = require('express')
const cors = require('cors')
const app = express()
const{getToDoList, postToDoList} = require('./controller.js')
const{seed} = require('./seed.js')
const{getPastJournal} = require('./controller_seed.js')


app.use(cors())
app.use(express.json())

// GET POST Function - AXIOS
app.get('/api/todos', getToDoList)
app.post('/api/todos',postToDoList)

// bit.io Function
app.post('/seed', seed)
app.post('/journal', getPastJournal)


app.listen(5050, () => console.log(`server jammin on port ${SERVER_PORT}`))