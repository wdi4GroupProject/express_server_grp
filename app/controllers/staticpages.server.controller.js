module.exports = {
  renderAbout: function(req,res){
    res.render('static_pages/about', {
      title: 'About pagieeeeeeeee'
    });
  },

  renderContact: function(req,res){
    res.render('static_pages/contact', {
      title: 'Contact pagieeeeeeeeee'
    });
  },

  renderHome: function(req,res){
    res.render('static_pages/index', {
      title: 'Home pagieeeeeeeeee'
    });
  },

};
