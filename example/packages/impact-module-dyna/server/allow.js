//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

var users = function(userId) {return !!userId;};
var nobody = function() {return false;};

Modules.Dyna.Boards.allow({
  insert: users,
  update: users,
  remove: nobody,
});

Modules.Dyna.Threads.allow({
  insert: users,
  update: users,
  remove: nobody,
});

Modules.Dyna.Posts.allow({
  insert: users,
  update: users,
  remove: nobody,
});

//////////////////////////////////
/*************************/});/**/
//////////////////////////////////

