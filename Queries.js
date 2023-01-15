const connection = require("./db/connection");

class Queries {
  constructor(connection) {
    this.connection = connection;
  }

  viewDeparments() {
    return this.connection
      .promise()
      .query("SELECT department.id, department.name FROM department");
  }
}

module.exports = new Queries(connection);
