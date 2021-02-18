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
            res.send('Found an error!');
            return
        }
    const books = JSON.parse(data); 
    console.log(books); 
    res.send(books);
    });
});

router.get('/books/new', (req, res) => {
    fs.readFile("./json/books.json", function(err, data) { 
        if (err) {
            console.log(err);
            res.send('Found an error!');
            return
        }
        const books = JSON.parse(data); 
        let book = {
        title: "Catching fire",
        author: "Suzanne Collins",
        genres: ["Adventure", "Science fiction"] 
        }
        books.push(book);
        fs.writeFile("./json/books.json", JSON.stringify(books), err => { 
            if (err) {
            console.log(err);
            res.send(err);
            return;
            }  
            console.log("Added book to json file succesfully!");
            res.send(books);
        });
    });
})

module.exports = router;
