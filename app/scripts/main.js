

var ToDo = [ 'name', 'color', 'status', 'engine', 'tires'];




var  = function (options) {
	 
	 beforeEach(function() {
	 	todo = new ToDO;
	 });
     

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
};
