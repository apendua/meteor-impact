//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

if(!process.env.FAKE) return;

/* TODO: why is the count checked twice? Decide on the pattern and leave just one method. */
if(Dyna.Boards.find({}).count() > 3) return;


var root = Dyna.Boards.findOne({root: true});

if(!root) {
  console.log("CANNOT FAKE DYNA: NOT INITIALIZED YET");
  return;
}

if(Meteor.users.find().count() < 2) {
  console.log("CANNOT FAKE DYNA: NOT ENOUGH USERS");
  return;
}

console.log("FAKING DYNA");

var boards = [];
var threads = [];
var users = Meteor.users.find({}).fetch();
boards.push(root._id);

_.times(4, function() {
  boards.push(
    Dyna.Boards.insert({
      parentId: root._id,
      title: Fake.word(),
    })
  );
});

_.times(10, function() {
  boards.push(
    Dyna.Boards.insert({
      parentId: _.sample(boards),
      title: Fake.word(),
    })
  );
});

_.times(60, function() {
  threads.push(
    Dyna.Threads.insert({
      boardId: _.sample(boards),
      title: Fake.sentence(3),
    })
  );
});

_.each(threads, function(tid) {
  _.times(Math.floor(1 + Random.fraction() * 5), function() {

    Dyna.Posts.insert({
      threadId: tid,
      userId: _.sample(users)._id,
      content: Fake.paragraph(),
    });

  });
});


//////////////////////////////////
/*************************/});/**/
//////////////////////////////////

