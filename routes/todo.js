const router = require('express').Router();
const todoController = require('../controllers/TodoController');

// routes
router.post("/add/todo", todoController.add);
router.delete("/todo/:id", todoController.delete);

module.exports = router;
