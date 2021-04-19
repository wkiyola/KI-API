const express = require('express');
const app = express();
const port = process.env.PORT || 4400;

const data = require('./data.json');
const users = data.results;

app.get('/', (req, res)=>{
    res.json('welcome to the api');
});

app.get('/users', (req, res)=>{
    res.json(users);
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});

