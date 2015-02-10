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


	



	it('should be an instance of ToDo', function() {
		expect(todo).to.be.an.instanceof(ToDo);
	});

	it('should have a default priority', function () {
     expect(todo.rank).to.equal('brown');
    });

	it('should have a status that is a string', function () {
     expect(todo).to.have.property('status');
    });


	it('should be open by default', function () {
    expect(todo.status).to.equal('open');
    });



	it('should be closed after I perform the task', function () {
     expect(todo.status).to.equal('open');
     cat.pet();
      expect(todo.status).to.equal('closed');
    });

  });


});



	




