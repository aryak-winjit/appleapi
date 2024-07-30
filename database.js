require('dotenv').config();
const mysql = require('mysql2');

// Set up the connection details
const connection = mysql.createConnection({
//   host: 'database-1.cxzaxthourei.us-east-1.rds.amazonaws.com', 
//   post: '3306', // Replace with your RDS endpoint
//   user: 'new_reader',    // Replace with your MySQL user
//   password: 'Winjit@123',  // Replace with your MySQL password
//   database: 'sample'   // Replace with your database name
  host: process.env.DB_HOST, 
  post: process.env.DB_PORT, // Replace with your RDS endpoint
  user: process.env.DB_USER,    // Replace with your MySQL user
  password: process.env.DB_PASS,  // Replace with your MySQL password
  database: process.env.DB_NAME   // Replace with your database name
});

// Connect to the database(s)
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  
  // Close the connection
  connection.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err);
      return;
    }
    console.log('Connection closed');
  });
});
