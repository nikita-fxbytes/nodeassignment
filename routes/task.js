const express = require('express');
const router = express.Router();
const taskCountroller = require('../controllers/taskController');
const {createTaskValidator, validate, deleteAndEditTaskValidator} = require('../validators/taskValidator');

//Route 1: Get task GET "api/task" Login required
router.get('/task', taskCountroller.getTask);

//Route 2: Create task POST "api/task" Login required
router.post('/task', createTaskValidator, validate, taskCountroller.createTask);

//Route 3: Update task PUT "api/task/:id". Login required
router.put('/task/:id', createTaskValidator, validate, taskCountroller.updateTask);

//Route 4: Delete task DELETE "api/task/:id"
router.get('/task/:id', deleteAndEditTaskValidator, validate, taskCountroller.editTask);

//Route 5: Delete task DELETE "api/task/:id"
router.delete('/task/:id', deleteAndEditTaskValidator, validate, taskCountroller.deleteTask);

module.exports = router;