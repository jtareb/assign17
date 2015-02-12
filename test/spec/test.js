/* global describe, it */

(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {

      });
    });
  });
})();
//*to-do list


var todo;


describe('ToDo object', function() {

	describe('Creating a new todo list', function () {

   beforeEach(function(){
     todo = new ToDo();
    });


	
var taskname


	it('should be an instance of ToDo', function() {
		expect(todo).to.be.an.instanceof(ToDo);
	});

  it('should have a default task', function () {
    expect(todo.task).to.equal("");
    });

	it('should have a default status', function () {
     expect(todo.status).to.equal('pending');
    });


	it('should be complete after I perform the task', function () {
     expect(todo.status).to.equal('pending');
     todo.wash();
      expect(todo.status).to.equal('complete');
    });


  it('should run better after I perform the task', function () {
    expect(todo.engine).to.equal('fair')
    todo.tuneup();
    expect(todo.engine).to.equal('good');
    });
  
  it('should ride better after I perform the task', function () {
    expect(todo.tires).to.equal('low');
    todo.addAir();
    expect(todo.tires).to.equal('good');
    }); 

  });


});


//*describe toggling todos incomplete/complete

//describe ('Toggling Todos Imcomplete/complete' function () {
  //it ('should be able to toggle', function() {
  //expect(todo.status).to.equal('incmplete');
  //todo.toggleStatus();
  //expect (todo.status).to.equal)'complete');
  //todo.toggleStatus();
  //expect('todo.toggleStatus').to.equal('incomplete');




  
	




