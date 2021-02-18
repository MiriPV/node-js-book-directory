const express = require('express');
const books = require('./routes/bookroutes');
const app = express();
const port = 3000;

app.use('/', books);

app.listen(3000);