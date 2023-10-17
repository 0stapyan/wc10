// here we create one main centralized class 'Logger', that is responsible for logging processing
// and only this class can manage the loggers.


class Logger {
    constructor() {
      if (Logger.instance) {
        return Logger.instance; 
      }
  
      this.logs = [];
      Logger.instance = this; 
    }
  
    log(message) {
      const logEntry = { timestamp: new Date(), message };
      this.logs.push(logEntry);
      console.log(logEntry);
    }
  
    getLogs() {
      return this.logs;
    }
  }
  
const logger1 = new Logger(); 
logger1.log("This is a log message from logger1.");
    
const logger2 = new Logger(); 
logger2.log("This is another log message from logger2.");
    
console.log(logger1 === logger2); 
    
console.log(logger1.getLogs()); 
  
  