const express = require('express'); 

const controller = require('../controllers/toDoController');
const router = express.Router();

router.get('/', 
    controller.retrieve,
    (req, res) => {
        res.status(200).json(res.locals.toDos);
    }
);

router.post('/', 
    controller.save,
    (req, res) => {
        res.status(200).json(res.locals.lastSaved);
    }
);

router.put('/', 
    controller.update,
    (req, res) => {
        res.status(200).json(res.locals.updated);
    }
);

router.delete('/', 
    controller.delete,
    (req, res) => {
        res.status(200).json(res.locals.deleted);
    }
); 

module.exports = router;