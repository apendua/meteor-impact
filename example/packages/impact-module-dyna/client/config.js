


Modules.Dyna.load = function(params) {


  Router.map(function() {

    this.route('dyna_home', {
      path: '/dyna',
      template: 'dyna_board',
      data: function() {
        return {
          board: Modules.Dyna.Boards.findOne({root: true}),
        };
      },
    });

    this.route('dyna_board', {
      path: '/dyna/:_id',
      template: 'dyna_board',
      data: function() {
        return {
          board: Modules.Dyna.Boards.findOne(this.params._id),
        };
      },
    })

  });

};


