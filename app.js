const express = require('express');
var books = require('./routes/books');
const app = express();
const port = 3000;

app.use('/', books);

app.listen(3000);