const express = require('express');
const fs = require('fs');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Homepage');
})

router.get('/books', (req, res) => {
    fs.readFile("./json/books.json", function(err, data) { 
        if (err) {
            console.log(err); 
            res.send('Could not find any books');
        } else {
            const books = JSON.parse(data);    
            console.log(books); 
            res.send(books); 
        }
    });   
});

module.exports = router;
