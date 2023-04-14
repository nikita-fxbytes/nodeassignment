module.exports = {
    name:{
        required: 'Name is required',
        length:"Name must be at least 3 characters"
    },
    description:{
        required: 'Description is required',
    },
    task: {
        getTask: "Task fetch successfully!",
        createTask: "Task added successfully!",
        updateTask: "Task updated successfully!",
        deleteTask: "Task has been deleted!"
    },
    auth:{
        serverError: "Internal server error",
    }
   
    
}