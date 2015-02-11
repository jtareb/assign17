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

  it('should have a default name', function () {
    expect(todo.name).to.equal('Ford Escape');
    });

	it('should have a default color', function () {
     expect(todo.color).to.equal('grey');
    });

	//*it('should have a status that is a string', function () {
   //  expect(todo.status).to.have.property('status');
   // });


	it('should be dirty by default', function () {
    expect(todo.status).to.equal('dirty');
    });


	it('should be clean after I perform the task', function () {
     expect(todo.status).to.equal('dirty');
     todo.wash();
      expect(todo.status).to.equal('clean');
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



	




