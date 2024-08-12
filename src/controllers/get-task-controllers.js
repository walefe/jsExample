function getTaskController(request,response,todo) {
    console.log(todo)
    
    return response.status(200).send({ data: { todo }})
    
}
function getTaskControllerById(request,response) {
    
    const { id } = request.params 
    const task = todo.find(item => item.id === id) 
  
    console.log('task using find',task)
  
    return response.send()
    
}

module.exports = {
    getTaskController,
    getTaskControllerById
}