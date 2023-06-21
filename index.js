const express = require('express');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
require('dotenv').config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

const endpoints = {
  development: 'https://dev-hp.com/api/get-servers',
  staging: 'https://staging-hp.com/api/get-servers',
};

console.log(process.env.DB_PASSWORD)