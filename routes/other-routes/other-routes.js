const express = require('express');
const router = express.Router();

// Basic routes
router.get('/', (req, res) => {
    res.json({
        nombre: 'Balti'
    });
});

router.get('/route1', (req, res) => {
    res.send('<h1>Hello world!</h1>');
});

//Esto no se usa!

router.get('/route2', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index2.html'));
});

router.get('/route3', (req, res) => {
    res.sendFile(path.resolve(__dirname,'public', 'index.html'));
});

module.exports = router;