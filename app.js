require('dotenv').config();
const fs = require('fs');

var express = require('express');
var app = express();
var env_data_owner = process.env.OWNER;


app.get('/', function (req, res) {
  res.send('Banana API!');
});
app.get('/apple', function (req, res) {
  res.send('/apple/ ' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DBPASS);
});

app.get('/banana', function (req, res) {
  res.send('/apple/banana ' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DBPASS);
});
app.get('/v2apple', function (req, res) {
  res.send('/apple/v2apple ' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DBPASS);
});




fs.readFile('./secret/secret.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


app.listen(6003, function () {
  console.log('appleapi listening on port 6003!!!!!' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DBPASS);
});
