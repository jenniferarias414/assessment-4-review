const express = require('express')
const cors = require('cors')
const {createTask, deleteTask, getTasks} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/tasks', getTasks)
app.post('/api/tasks', createTask)
app.delete('/api/tasks/:id', deleteTask)

app.listen(3000, () => console.log("jammin on 3000"))