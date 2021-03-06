const mongoose = require('mongoose'); 
require('dotenv').config();

const uri = process.env.MONGO_URI;
console.log(uri);
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'todo-thang',
}).then(console.log('connected to MongoDB'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    toDo: String,
    date: {type: Date, default: new Date()},
    completed: {type: Boolean, default: false},
});

const ToDo = mongoose.model('toDo', toDoSchema); 

module.exports = ToDo;