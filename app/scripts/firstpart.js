





var ToDo  = function (taskName) {
          
       this.task = taskName || "";
       this.status = "pending";
            this.wash = function () {
            this.status = "complete";
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
 