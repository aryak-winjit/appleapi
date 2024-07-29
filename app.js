// require('dotenv').config();
require('dotenv').config();
const fs = require('fs');

var express = require('express');
var app = express();
var env_data_owner = process.env.OWNER;


app.get('/', function (req, res) {
  res.send('Apple API! v0.5');
});
app.get('/health', function (req, res) {
  res.send('OK');
});
app.get('/apple', function (req, res) {
  res.send('/apple/ ' + process.env.VERSION + " | DB_USER: " + process.env.DB_USER + " | DB_PASS: " + process.env.DB_PASS + " | owner: " + process.env.OWNER);
});

app.get('/banana', function (req, res) {
  res.send('/apple/banana ' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DB_PASS);
});

app.get('/v2apple', function (req, res) {
  res.send('/apple/v2apple ' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DB_PASS);
});


app.get('/100', (req, res) => { 
  console.log('/apple/100')
  res.status(100).send('100'); 
});

app.get('/200', (req, res) => { 
  console.log('/apple/200')
  res.status(200).send('200');
});
app.get('/201', (req, res) => {
  console.log('/apple/201')
  res.status(201).send('201');
});

app.get('/301', (req, res) => {
  console.log('/apple/301')
  res.status(301).send('301');
});
app.get('/302', (req, res) => {
  console.log('/apple/302')
  res.status(302).send('302');
});

app.get('/400', (req, res) => {
  console.error('/apple/400')
  res.status(400).send('400');
});
app.get('/401', (req, res) => {
  console.error('/apple/401')
  res.status(401).send('401');
});
app.get('/403', (req, res) => {
  console.error('/apple/403')
  res.status(403).send('403');
});
app.get('/404', (req, res) => {
  console.error('/apple/404')
  res.status(404).send('404');
});

app.get('/500', (req, res) => {
  console.error('/apple/500')
  res.status(500).send('500');
});
app.get('/502', (req, res) => {
  console.error('/apple/502')
  res.status(502).send('502');
});
app.get('/503', (req, res) => {
  console.error('/apple/503')
  res.status(503).send('503');
});




fs.readFile('./secret/secret.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


// *********************
// *** High CPU ********
// *********************
// Define a route that performs a CPU-intensive operation
app.get('/cpu', (req, res) => {
  // Get the duration parameter from the query string
  const duration = parseInt(req.query.t) || 10; // Default duration is 10 seconds

  // Calculate the end time for the CPU-intensive operation
  const endTime = Date.now() + duration * 1000;

  // Perform CPU-intensive operation until reaching 80% CPU utilization
  while (Date.now() < endTime) {
      // Simulate a CPU-intensive operation
      let result = 0;
      for (let i = 0; i < 100000000; i++) {
          result += Math.random() * Math.random();
      }
  }

  // Respond with a message
  res.send(`High CPU utilization simulated for ${duration} seconds!`);
});


// *********************
// *** High RAM ********
// *********************
// Define a route that simulates high RAM utilization
app.get('/ram', (req, res) => {
  // Get the duration parameter from the query string
  const duration = parseInt(req.query.t) || 10; // Default duration is 10 seconds

  // Calculate the end time for the operation
  const endTime = Date.now() + duration * 1000;

  // Allocate memory until reaching the desired utilization
  const buffer = [];
  let totalMemory = 0;
  while (Date.now() < endTime) {
      buffer.push(new Array(1024 * 1024).join('x')); // Allocate 1MB
      totalMemory += 1024; // Approximate each string's size as 1KB
      if (totalMemory >= 500 * 1024) { // 500MB
          break;
      }
  }

  // Respond with a message
  res.send(`High RAM utilization simulated for ${duration} seconds!`);
});




app.listen(6003, function () {
  console.log('appleapi listening on port 6003!!' + process.env.VERSION + " " + process.env.DB_USER + " " + process.env.DB_PASS);
});
