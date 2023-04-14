const Task = require('../models/Task');
const contant = require('../helpers/constants');
const message = require('../helpers/messages');

//Get All task
exports.getTask = async(req, res)=>{
    try {
        const { limit = 10, offSet = 1 } = req.query; // set default limit to 10 and page to 1
        // const skip = (offSet - 1) * limit; // calculate the number of documents to skip based on the page and limit
        const tasks = await Task.find().skip(offSet).limit(parseInt(limit));
        const totalResults = await Task.countDocuments();
        res.json({
            status: true,
            data: {
                tasks,
                totalResults,
                currentPage: parseInt(offSet),
                totalPages: Math.ceil(totalResults / limit)
              },
            message: message.task.getTask
        })
        
    } catch (error) {
        res.status(contant.SERVER_ERROR).send(message.auth.serverError); 
    }
}
//end
//Create task
exports.createTask = async(req, res)=>{
    try {
        const {name, description} = req.body;
        const saveTask = new Task({
            name, description
        });
        const task = await saveTask.save();
        res.json({
            status: true,
            task: task,
            message: message.task.createTask
        })
    } catch (error) {
        res.status(contant.SERVER_ERROR).send(message.auth.serverError);
    }
}
//End
//Update task
exports.updateTask = async(req, res) => {
    try {
        const {name, description} = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, {$set:{
            name, 
            description
        } 
        }, {new: true});
        res.json({
            status: true,
            task: task,
            message: message.task.updateTask
        });
    } catch (error) {
        res.status(contant.SERVER_ERROR).send(message.auth.serverError); 
    }
}
// End
//Delete task
exports.editTask = async(req, res) =>{
    try {
        //Task Edit
       const task =  await Task.findById(req.params.id);
        res.json({
            status: true,
            task: task,
            message: message.task.getTask
        });
        //End
        
    } catch (error) {
        res.status(contant.SERVER_ERROR).send(message.auth.serverError);   
    }
}
// End
//Delete task
exports.deleteTask = async(req, res) =>{
    try {
        //Task delete
        await Task.findByIdAndDelete(req.params.id);
        res.json({
            status: true,
            message: message.task.deleteTask
        });
        //End
        
    } catch (error) {
        res.status(contant.SERVER_ERROR).send(message.auth.serverError);   
    }
}
// End