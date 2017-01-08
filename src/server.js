var express = require('express');
var body_parser = require('body-parser');
var app = express();

// config
var port = 3000;

// Setting Routes path
app.use('/api', require('./routes/index')(express));

// Server activation
var server = app.listen(port, function () {
  console.log('Server is active.', port);
});

module.exports = server;
