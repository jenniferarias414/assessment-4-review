let tasks = []
let globalID = 1

module.exports = {
    createTask: (req, res) => {
        req.body.id = globalID
        tasks.push(req.body)
        globalID++
        res.status(200).send(tasks)
    },
    deleteTask: (req, res) => {
        const newArray = tasks.filter((task) => task.id !== +req.params.id)
        tasks = newArray
        res.status(200).send(tasks)
    },
    getTasks: (req, res) => {
        res.status(200).send(tasks)
    }
}