import fs from 'fs/promises'
const db = './tasks.json'

const readTasks = async () => {
    const data = await fs.readFile(db, 'utf-8')
    return JSON.parse(data)
}
const saveTasks = async (tasks) => {
    await fs.writeFile(db, JSON.stringify(tasks, null, 4))
}
export const getAllTasks = async () => {
    return await readTasks()
}
export const createTask = async (task) => {
    const tasks = await readTasks()
    tasks.push(task)
    await saveTasks(tasks)
}
export const deleteTaskById = async (id) => {
    let tasks = await readTasks()
    tasks = tasks.filter((task) => task.id !== id)
    await saveTasks(tasks)
}
export const updateTaskById = async (id, updatedData) => {
    let tasks = await readTasks()
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, ...updatedData }
        }
        return task
    })
    await saveTasks(tasks)
}