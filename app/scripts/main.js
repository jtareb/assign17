(function () {

  'use strict';




//main collection//
list.allTodos = [];




//variables//

var doWhat
    Occurrence
    tdlist = $('#todoList'),
    layout = $('#addTodo'),
    taskTemplate = $('#todoTemp').html(),
    taskTemplateFunc = _.template(todoTemplate);

      


//main constructor//

   list.ToDo  = function (options) {
     

 	  options = options || {};
  	
    this.name = options.name || 'Ford Escape';
		this.color = options.color || 'grey';
		
        this.status = 'dirty';
  			this.wash = function () {
   			this.status = 'clean';
   		};
   		this.engine = 'fair';
   			this.tuneup = function () {
   			this.engine = 'good';
   		};
  		this.tires = 'low';
  			this.addAir = function () {
  			this.tires = 'good';
  		};
        this.toggleStatus = function () {
        if (this.status === 'incomplete') {
        this.status = 'complete';
      } else {
        this.status = 'incomplete';
      }
    }
  }
 


//add function//
    list.addTodo = function (task) {
    list.allTodos.push(task);
    tdlist.append(taskTemplateFunc(task));
  };

//add #addtodo//
  layout.on('submit', function (event) {
    event.preventDefault();


//grab text/
  doWhat = $(this).find('#text').val();

//create a new todo//
  Occurrence = new app.ToDo(taskname);

//run the function addTodo//
list.addTodo(occurrence);

//clear the form//
this.reset();

});

//create click event

tdlist.on('click', 'li', function (event) {
      event.preventDefault();

      var thisTask = event target;
      var thisTaskId = Number(thisTask.id);

      var thisOccurrence = _.findWhere(app.allTodos, {
        id: thisTaskID});

      thisOccurrence.toggleStatus();

      $(thisTask).removeClass().addClass(thisOccurrence.status);

      });




}()):




