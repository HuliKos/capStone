const express = require('express')
const cors = require('cors')
const app = express()
const{getToDoList, deleteToDo} = require('./controller.js')

app.use(cors())
app.use(express.json())


app.get('/api/todos', getToDoList)
app.delete('/api/todos/:id', deleteToDo)




app.listen(5050, () => console.log(`server jammin on port 5050`))