const express = require('express');
const app = express();
const routes = require('./routes');

app.get('/', (req,res) => {
   res.status(404)
       .send({
       error: 'Page not found',
       name: 'Todo App v1.0'
   });
});

//Get /users
app.get('/users', (req,res) => {
   res.send([
       {
           name: 'Rana Ali',
           age: 22
       },
       {
           name: 'Bilal Ali',
           age: 25
       }
   ]);
});

app.use('/tests', routes);

app.listen(5000);

module.exports.app = app;