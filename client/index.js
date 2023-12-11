// const { default: axios } = require("axios") sometimes axios puts this in here, delete it

const form = document.querySelector("#task-form")
const task = document.querySelector("#task-input")
const category = document.querySelector("#task-category")
const container = document.querySelector("#task-container")

const getAllTasks = () => {
    axios
        .get('http://localhost:3000/api/tasks')
        .then((res) => {
            container.innerHTML = ""
            console.log(res.data)
            res.data.forEach(createTask)
        })
        .catch((err) => {
            console.error(err)
        })
}

const deleteTask = (taskObj) => {
    console.log(taskObj)
    axios
        .delete(`http://localhost:3000/api/tasks/${taskObj.id}`)
        .then((res) => {
            container.innerHTML = ""
            console.log(res.data)
            res.data.forEach(createTask)
        })
        .catch((err) => {
            console.error(err)
        })
}

const createTask = (task) => {
    let h4 = document.createElement('h4')
    h4.textContent = `${task.name} (${task.category})`
    h4.addEventListener('click', () => deleteTask(task))
    container.appendChild(h4)
}

const handleSubmit = (event) => {
    event.preventDefault() //always 1st line of code when handling a form submission
    const body = {
        name: task.value,
        category: category.value 

    }
    axios
        .post('http://localhost:3000/api/tasks', body)
        .then((res) => {
            container.innerHTML = ""
            console.log(res.data)
            res.data.forEach(createTask)
        })
        .catch((err) => {
            console.error(err)
        })
}

form.addEventListener('submit', handleSubmit)

getAllTasks()