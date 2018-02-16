// Generic server.js file. Replace lines of code as needed. Below is simply
// a generic template from a previous project.

// Express code.
let express = require('express');
let app = express();

// Tells express where our static content is located.
app.use(express.static('server/public'));

// Can use any number from 1000 - 99999
// but don't choose 5432 which is the default for the database.
const port = 5000;

// Start our server.
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
})
