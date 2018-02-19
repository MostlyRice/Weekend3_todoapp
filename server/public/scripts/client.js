console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing getTaskMaster on page load
  getTaskMaster();
  emptyInputs();
  // add task button click
  $( '#addButton' ).on( 'click', function(){
    event.preventDefault();
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // using a test object
    let newTask = {
      task:$('#taskIn').val(),
      notes: $('#notesIn').val(),
      duedate: $('#dueDatein').val(),
      status: $('#statusIn').val(),
    };//end newTasks
    // call saveTask with the new obejct
    saveTask( newTask );
  });//end addButton on click
  $('#listTasks').on('click', '.deleteButton', function(){
    console.log('delete button task');
    let deletetask = $(this).data('id');
    endTasks(deletetask);
  });//end deleteButton litener
  $('#listTasks').on('click', '.completeButton', function(){
    console.log('FINISH HIM');
    let finishedTask = $(this).data('id');
    completeTasks(finishedTask);
  });//endTasks
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
    viewTasks(response);
    emptyInputs();
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
    getTaskMaster();
  })// end done
  .fail (function(){
    console.log( 'WOMP, cant postem');
  }) //end fail
}//end saveTask
function viewTasks(tasks){
  $('#listTasks').empty();
  for(let task of tasks){
    if (task.status === 'Uncomplete')
    $('#listTasks').append(`<tr><td> ${task.task}</td><td> ${task.notes}</td>
      <td> ${task.duedate.substring(0, 10)}</td><td> ${task.status}</td>
      <td><button class="completeButton" data-id=${task.id}>COMPLETED</button></td>
      <td><button class="deleteButton" data-id=${task.id}>Delete</button> </td></tr>`)
      else {
        $('#listTasks').append(`<tr class="taskComplete"><td> ${task.task}</td><td> ${task.notes}</td>
          <td class="taskComplete"> ${task.duedate.substring(0, 10)}</td> <td> ${task.status} </td>
          <td><button class="deleteButton" data-id=${task.id}>Delete</button> </td></tr>`)
        }
      }
    }
    function endTasks(id){
      $.ajax ({
        type : 'DELETE',
        url :`/tasks/delete/${id}`,
      })
      .done (function( response ){
        console.log( 'Delete Task', response );
        getTaskMaster();
      })// end done
      .fail (function(){
        console.log( 'Task not deleted');
      }); //end fail
    };

    function completeTasks(id){
      $.ajax ({
        type: 'PUT',
        url: `/tasks/complete/${id}`
      })
      .done (function( response ){
        console.log( 'Complete', response );
        getTaskMaster();
      })// end done
      .fail (function(){
        console.log( 'Uncomplete');
      });
    };
    function emptyInputs(){
        $('.task').val(''),
        $('.notes').val('')
        $('.duedate').val(''),
        $('.status').val('')
    }
