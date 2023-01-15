const mysql = require("mysql2");

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password123",
    database: "employees",
  },
  console.log("Connected to the emploees database")
);

module.exports = connection;
