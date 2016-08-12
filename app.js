var express = require('./config/express');
var app = express();
// the or is for the Heroku
app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'));
console.log('Server running at localhost:' + app.get('port'));

module.exports = app;
