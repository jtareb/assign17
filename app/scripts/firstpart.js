





var ToDo  = function (taskName) {
          
       this.task = taskName || "";
       this.status = "pending";


        this.exterior = "dirty";
        this.wash = function () {
        this.exterior = 'clean';
        }
      
        this.engine = 'fair';
        this.tuneup = function () {
        this.engine = 'good';
      };
        this.tires = 'low';
        this.addAir = function () {
        this.tires = 'good';
      };
    }
 