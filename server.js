const express = require('express');
const app = express();
const port = process.env.PORT || 4400;
const mongoose = require('mongoose');
const usersRoute = require('./routes/users');
const homeRoute = require('./routes/home');
const issuesRoute = require('./routes/knownIssues');
require('dotenv').config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    ()=> console.log('connected to db')
);

app.use('/', homeRoute);
app.use('/users', usersRoute);
app.use('/known-issues', issuesRoute);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});

