//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

/* TODO: why is the count checked twice? Decide on the pattern and leave just one method. */
if (Dyna.Boards.findOne({})) return;

console.log("INITIALIZING MODULE: DYNA");

Dyna.Boards.insert({
  root: true,
});

//////////////////////////////////
/*************************/});/**/
//////////////////////////////////
