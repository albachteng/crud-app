const ToDo = require ('../models/toDoModel');

const controller = {};

// saves one or more ToDo items, to be run after each ToDo is made in the application 
controller.save = (req, res, next) => {
    ToDo.create(req.body)
        .then((queryResponse) => {
            res.locals.lastSaved = queryResponse; // the saved doc
            return next();
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'express caught error at save'})
        })
};

// retrieves ALL ToDo items, to be run on page load? 
controller.retrieve = (req, res, next) => {
    ToDo.find(req.body) // returns all that match req.body params
        .then((queryResponse) => {
            console.log(queryResponse);
            res.locals.toDos = queryResponse; // an array
            return next(); 
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'express caught error at retrieve'})
        })
};

// delete a single toDo item, to be run when clicking the trash icon
controller.delete = (req, res, next) => {
    ToDo.findOneAndDelete(req.body)
        .then((queryResponse) => {
            res.locals.deleted = queryResponse; // the deleted doc
            return next();
        })
        .catch((err) => {
            console.log(err); 
            return next({log: 'express caught error at delete'})
        })
};

// updates a single ToDo, to be run onChange when text area for a todo is manipulated? 
controller.update = (req, res, next) => {
    const searchParams = req.body.search;
    const updateParams = req.body.update;
    ToDo.findOneAndUpdate(searchParams, updateParams)
        .then((queryResponse) => {
            res.locals.updated = queryResponse; // the updated doc
            return next(); 
        })
        .catch((err) => {
            console.log(err); 
            return next({log: 'express caught error at update'});
        })
}

module.exports = controller;