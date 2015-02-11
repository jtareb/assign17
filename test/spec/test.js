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


var cartodo;

describe('CarToDo object', function() {

	describe('Creating a new todo list', function () {

   beforeEach(function(){
     cartodo = new CarToDo();
    });


	



	it('should be an instance of CarToDo', function() {
		expect(cartodo).to.be.an.instanceof(CarToDo);
	});

	it('should have a default color', function () {
     expect(cartodo.color).to.equal('grey');
    });

	it('should have a status that is a string', function () {
     expect(cartodo).to.have.property('status');
    });


	it('should be dirty by default', function () {
    expect(cartodo.status).to.equal('dirty');
    });



	it('should be clean after I perform the task', function () {
     expect(cartodo.status).to.equal('dirty');
     cartodo.wash();
      expect(cartodo.status).to.equal('clean');
    });


  it('should run better after I perform the task', function () {
    expect(cartodo.engine).to.equal('fair')
    cartodo.tuneup();
    expect(cartodo.engine).to.equal('good');
    });
  
  it('should ride better after I perform the task', function () {
    expect(cartodo.tires).to.equal('low');
    cartodo.addAir();
    expect(cartodo.tires).to.equal('good');
    }); 

  });


});



	




