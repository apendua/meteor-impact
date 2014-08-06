Router.map(function () {

  this.route('home', {
    path: '/',
    action: function () {
      this.redirect('/blog');
    }
  });

});
