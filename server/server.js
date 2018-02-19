// Express code.
const express = require('express');
const app = express();
// Tells express where our static content is located.
app.use(express.static('server/public'));
// Setup body parser to handle POST body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Can use any number from 1000 - 99999
// but don't choose 5432 which is the default for the database.
const port = 5000;
// send taskmaster
const taskRouter = require('./routes/router');
app.use('/tasks',taskRouter);
// Start our server.
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
})
