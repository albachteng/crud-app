const express = require('express'); 
const path = require('path'); 
const mongoose = require('mongoose'); 
const router = require('./routers/api');

const app = express(); 

app.use(express.json()); 

app.get('/api', router);
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../index.html')));

app.use((req, res) => res.status(404).send('Sorry! Couldn\'t find it!'));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'unknown middleware error', 
        status: 500, 
        message: {err: 'unknown server error'}
    };
    const errorObj = {...defaultErr, ...err};
    console.log(errorObj); 
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('listening on port 3000')); 