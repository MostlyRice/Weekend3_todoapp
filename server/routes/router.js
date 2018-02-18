const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

console.log('in router');

router.get('/', function(request, response){
  const sqlText = 'SELECT * FROM taskmaster';
  pool.query(sqlText)
  // query was successful
  .then(function(result) {
    console.log('Get result:', result);
    response.send(result.rows);
  })
  // bad things could happen...
  .catch(function(error){
    console.log('Error on Get:', error);
    response.sendStatus(500);
  })
});
