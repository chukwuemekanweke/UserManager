require('dotenv').config()

var app = require('./app');
var port = process.env.PORT;
var db_url = process.env.db_url;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
  console.log('This project should just respect itself and work');
});