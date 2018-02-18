console.log( 'js' );
$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing getTaskMaster on page load
  getTaskMaster();
  // add task button click
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // using a test object
    let newTask = {
      task:$('#taskIn').val(),
      notes: $('#notesIn').val(),
      duedate: $('#dueDatein').val(),
      status: $('#statusIn').val(),
    };
    // call saveKoala with the new obejct
    saveTask( newTask );
  }); //end addButton on click
}); // end doc ready

function getTaskMaster(){
  console.log( 'in getTaskMaster' );
  // ajax call to server to get tasks
  $.ajax({
    type: 'GET',
    url: '/tasks',
  })
  .done (function( response ){
    console.log( 'got some tasks: ', response );
    showTasks(response);
  })// end done
  .fail (function( data ){
    console.log( 'WOMP, cant gettem');
  })// display on DOM with buttons that allow edit of each
}; // end getTaskMaster
function saveTask( newTask ){
  console.log( 'in newTask', newTask );
  // ajax call to server to get koalas
  $.ajax({
    type: 'POST',
    url: '/tasks/add',
    data: newTask,
  })
    .done (function( response ){
      console.log( 'posted newTask: ', response );
      getKoalas();
    })// end done
    .fail (function(){
      console.log( 'WOMP, cant postem');
    }) //end fail
}//end saveTask
function viewTasks(tasks){
  $('#listTasks').empty();
  for(let tasks of tasks){
    $('#listTasks').append(`<div> ${task.task}, ${task.notes}, ${task.duedate}, ${task.status}</div> `)
  }
}
