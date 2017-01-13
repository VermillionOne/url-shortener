const express = require('express');
const bodyParser = require('body-parser');
const utility = require('../lib/utility');
const app = express();

// config
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

// Setting Routes path
app.use('/', require('./routes/index')(express));

// Server activation
exports.server = app.listen(port, () => {
  utility.debug('Server is active.', port, 'SUCCESS');
});

module.exports = app;
