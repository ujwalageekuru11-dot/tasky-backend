import {
    getAllTasks,
    createTask,
    deleteTaskById,
    updateTaskById
} from '../models/taskModel.js'
export const getTasks = async (req, res) => {
    const tasks = await getAllTasks()
    res.json(tasks)
}
export const addTask = async (req, res) => {
    const newTask = {
        id: Date.now(),
        title: req.body.title,
        deadline: req.body.deadline
    }
    await createTask(newTask)
    res.send('Task added successfully')
}
export const deleteTask = async (req, res) => {
    const id = Number(req.params.id)
    await deleteTaskById(id)
    res.send('Task deleted successfully')
}
export const updateTask = async (req, res) => {
    const id = Number(req.params.id)
    const updatedData = {
        title: req.body.title,
        deadline: req.body.deadline
    }
    await updateTaskById(id, updatedData)
    res.send('Task updated successfully')
}