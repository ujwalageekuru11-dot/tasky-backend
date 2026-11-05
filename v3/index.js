import express from 'express'
import{
    getTasks,
    addTask,
    deleteTask,
    updateTask
} from './controllers/taskController.js'
const app=express()
app.use(express.json())
app.get('/api/tasks',getTasks)
app.post('/api/tasks',addTask)
app.delete('/api/tasks/:id',deleteTask)
app.put('/api/tasks/:id',updateTask)
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})