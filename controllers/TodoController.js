const Todo = require('../models/Todo');

class TodoController {
    
    // [GET]
    index(req, res, next) {
        Todo.find({})
            .then(todos => {
                res.render('index', { todos });
            })
            .catch(next);
    }

    // [POST] /add/todo
    add(req, res, next) {
        const {todo} = req.body;
        const newTodo = new Todo({todo});

        // save
        newTodo.save()
        .then(() => {
            res.redirect("/");
        })
        .catch(next);
    }


    // [DELETE] /todo/:id
    delete(req, res, next) {
        Todo.deleteOne({_id: req.params.id})
        .then(() => {
            res.redirect("/");
        })
        .catch(next);
    }
}

module.exports = new TodoController;