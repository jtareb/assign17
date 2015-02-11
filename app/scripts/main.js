(function () {

  'use strict';




//main collection//
var allTodos = [];




//variables//

var name,
    tdList = $('#todoList'),
    layout = $('#addTodo'),
    taskTemplate = $('#todoTemp').html(),
    taskTemplateFunc = _.template(taskTemplate);

      


//main constructor//

   var ToDo  = function (options) {
     

 	  options = options || {};
  	
    //this.name = options.name || 'Ford Escape';
		//this.color = options.color || 'grey';
		  this.task = name || "";
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
  var addTodo = function (task) {
    allTodos.push(task);
    tdlist.append(taskTemplateFunc(task));
        


  };




//add #addtodo//
  layout.on('submit', function (event) {
    event.preventDefault();


//grab text/
  name = $(this).find('#text').val();

//create a new todo//
  Occurrence = new ToDo(taskname);

//run the function addTodo//
list.addTodo(occurrence);

//clear the form//
this.reset();

});

//create click event

  tdList.on('click', 'li', function (event) {
      event.preventDefault();

      var thisTask = even.target;
      var thisTaskId = Number(thisTask.id);

      var thisOccurrence = _.findWhere(app.allTodos, {
        id: thisTaskID});

      thisOccurrence.toggleStatus();

      $(thisTask).removeClass().addClass(thisOccurrence.status);

      });




}());




