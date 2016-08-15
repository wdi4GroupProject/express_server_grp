module.exports = function(app){
  var membersController = require('../controllers/member.server.controller');
  // new method of routing vs structure of get edit
  app.route('/members')
    .get(membersController.index)
    .post(membersController.create);

  app.route('/members/:id')
      .get(membersController.show)
      .put(membersController.update)
      .delete(membersController.destroy);

  // unneccessary routes from an API
  // app.get('/members/new', membersController.new);
  // app.get('/members/:id/edit', membersController.edit);

};
