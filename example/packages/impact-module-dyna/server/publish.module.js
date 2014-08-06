//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

/*
  TODO: public boards visible for guests
  TODO: pagination
  TODO: notifications
*/

Dyna.publish("boards", function() {
  // var user = Meteor.users.findOne(this.userId);
  // if(!!user) return [];
  return Dyna.Boards.find({});
});

Dyna.publish("threads", function() {
  // var user = Meteor.users.findOne(this.userId);
  // if(!!user) return [];
  return Dyna.Threads.find({});
});

Dyna.publish("posts", function() {
  // var user = Meteor.users.findOne(this.userId);
  // if(!!user) return [];
  return Dyna.Posts.find({});
});


//////////////////////////////////
/*************************/});/**/
//////////////////////////////////


