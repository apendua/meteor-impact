//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

/*
  TODO: public boards visible for guests
  TODO: pagination
  TODO: notifications
*/

Meteor.publish("dyna_boards", function() {
  // var user = Meteor.users.findOne(this.userId);
  // if(!!user) return [];
  return Modules.Dyna.Boards.find({});
});

Meteor.publish("dyna_threads", function() {
  // var user = Meteor.users.findOne(this.userId);
  // if(!!user) return [];
  return Modules.Dyna.Threads.find({});
});

Meteor.publish("dyna_posts", function() {
  // var user = Meteor.users.findOne(this.userId);
  // if(!!user) return [];
  return Modules.Dyna.Posts.find({});
});


//////////////////////////////////
/*************************/});/**/
//////////////////////////////////


