var Member = require('mongoose').model('Member');

module.exports = {
  index: function(req, res, next){
    Member.find({}, function(err, members){
      if(err) return next(err);
      res.json(members);
    });
    // res.send('list all my members');
  },
  show: function(req, res){
    res.send('show members by id');
  },
  create: function(req, res){
    res.send('create new member');
  },
  update: function(req, res){
    res.send('update member detail, query by id');
  },
  destroy: function(req, res){
    res.send('destroy member, query by id');
  },

};
