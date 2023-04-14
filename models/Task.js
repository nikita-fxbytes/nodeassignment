const mongoose = require('mongoose') ;
const { Schema } = mongoose;
const TaskSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type : String,
        require: true
    }
},{
    timestamps: true,
});

const Task = mongoose.model('task', TaskSchema);
module.exports = Task;
