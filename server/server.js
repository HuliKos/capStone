const express = require('express')
const cors = require('cors')
const app = express()
const{getToDoList, postToDoList} = require('./controller.js')

app.use(cors())
app.use(express.json())


app.get('/api/todos', getToDoList)
app.post('/api/todos',postToDoList)


app.listen(5050, () => console.log(`server jammin on port 5050`))