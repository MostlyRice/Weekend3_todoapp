const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const bodyParser = require('body-parser');
console.log('in router');

router.get('/', function(request, response){
  const sqlText = 'SELECT * FROM tasks';
  pool.query(sqlText)
  // query was successful
  .then(function(result) {
    console.log('Get result:', result);
    response.send(result.rows);
  })
  // bad things could happen...
  .catch(function(response){
    console.log('Error on Get:', error);
    response.sendStatus(500);
  })
})

router.post('/add', (request, response) =>{
const newTask = request.body;
console.log('added new task', newTask);
const sqlText = `INSERT INTO tasks(task, notes, duedate, status)
VALUES( $1,$2,$3,$4 )`;
pool.query(sqlText,[newTask.task, newTask.notes, newTask.duedate, newTask.status])
.then((result)=> {
  console.log('NEW TASK HERE, GET YOUR NEW TASK!', result);
  response.sendStatus(200);
})
.catch((error)=> {
  console.log('WOMP, FAILURE');
  response.sendStatus(500);
})
})

module.exports = router;
