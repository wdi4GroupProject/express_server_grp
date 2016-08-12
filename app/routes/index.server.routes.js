module.exports = function(app){
  var staticpagesController = require('../controllers/staticpages.server.controller');
  var usersController = require('../controllers/users.server.controller');
  app.get('/', staticpagesController.renderHome);
  app.get('/about', staticpagesController.renderAbout);
  app.get('/contact', staticpagesController.renderContact);
  app.get('/users', usersController.index);
};
