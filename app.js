require('dotenv').config();
var express = require('express');
var app = express();
var env_data_owner = process.env.OWNER;
app.get('/', function (req, res) {
  res.send('Banana API!');
});
app.get('/apple', function (req, res) {
  res.send('/apple/ ' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DB_PASS);
});
app.listen(6003, function () {
  console.log('appleapi listening on port 6003!' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DB_PASS);
});