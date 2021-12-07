const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create a table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS todos
     (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      todoName VARCHAR(255),
      text VARCHAR(255),  
      done bool default 0 ,
      createdAt INT NOT NULL DEFAULT 0
    );`)      
    .error(err => {
      console.log(err);
    });
};