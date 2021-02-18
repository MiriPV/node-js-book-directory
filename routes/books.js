const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Homepage');
})

router.get('/books', (req, res) => {
    res.send('Sending some books');
});

module.exports = router;
