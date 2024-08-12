const { Router } = require('express')
const { getTaskController, getTaskControllerById } = require('./controllers/get-task-controllers')

const route = Router();
let todo = []
console.log(todo)

route.get('/todo', getTaskController)
route.get('/:id/todo', getTaskControllerById)

route.delete('/:id/todo', (request, response) => {
  const { id } = request.params
  todo = todo.filter((todoVal) => todoVal.id !== id)

  return response.status(201).send({ message: `task ${id} deleted`})
})


route.post('/todo', (request, response) => {
  const { body } = request

  const task = {
    id: body.id,
    description: body.description
  }

  todo.push(task)
  console.log(todo)
  return response.status(200).send({ message: 'ok!'})
})

module.exports = route

