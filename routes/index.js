const todoController = require('../controllers/TodoController');

const router = require('express').Router();

// routes
router.get("/", todoController.index);


module.exports = router;
