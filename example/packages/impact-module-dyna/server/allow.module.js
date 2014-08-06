//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

var users = function(userId) {return !!userId;};
var nobody = function() {return false;};

Dyna.Boards.allow({
  insert: users,
  update: users,
  remove: nobody,
});

Dyna.Threads.allow({
  insert: users,
  update: users,
  remove: nobody,
});

Dyna.Posts.allow({
  insert: users,
  update: users,
  remove: nobody,
});

//////////////////////////////////
/*************************/});/**/
//////////////////////////////////

