// My main app JS

var   express   = require('./config/express'),
      mongoose  = require('./config/mongoose');

var db = mongoose();
var app = express();
// the or is for the Heroku
app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
  console.log('Server running at localhost:' + app.get('port'));
});

module.exports = app;
