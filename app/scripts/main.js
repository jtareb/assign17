





var CarToDo = function (options) {
 	options = options || {};
  		this.name = 'Ford Escape';
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
