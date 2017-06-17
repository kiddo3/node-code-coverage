const express = require('express');

var router = express.Router();


router.get('/other', function(req, res) {
    res.send({
           name: 'Rana Ali',
           age: 22
       });  
});

module.exports = router; 
