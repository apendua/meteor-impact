

Dyna.router(function() {

  this.route('home', {
    path: '/',
    template: 'board',
    data: function() {
      return {
        board: Dyna.Boards.findOne({root: true}),
      };
    },
  });

  this.route('board', {
    path: '/:_id',
    template: 'board',
    data: function() {
      return {
        board: Dyna.Boards.findOne(this.params._id),
      };
    },
  })

});
