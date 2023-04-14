const {body, check,validationResult} = require('express-validator');
const message = require('../helpers/messages');
const Task = require('../models/Task')
//Create task
exports.createTaskValidator = [
    body('name')
    .notEmpty().withMessage(message.name.required)
    .isLength({min:3}).withMessage(message.name.length),

    body('description')
    .notEmpty().withMessage(message.description.required)
]
//End
// Delete task
exports.deleteAndEditTaskValidator = [
    check('id').custom((value, { req }) => {
      return Task.findById(value).exec().then((task) => {
        if (!task) {
          throw new Error('ID not found');
        }
        // Attach task to request object for later use
        req.task = task;
        return true;
      });
    }),
  ];
// End
//check validator
exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            message: errors.array(),
            status: false
        });
    }
    next();
};
//End