const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('running');
})

//Init middleware
// app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Members api routes
app.use('/api/members', require('./routes/api/members'));







//Other-routes routes
app.use('/other-routes/other-routes', require('./routes/other-routes/other-routes'));

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')));