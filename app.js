var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Apple API');
});
app.listen(6003, function () {
  console.log('Example app listening on port 6003!');
});