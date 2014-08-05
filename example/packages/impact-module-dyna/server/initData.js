//////////////////////////////////
/**/Meteor.startup(function(){/**/
//////////////////////////////////

/* TODO: why is the count checked twice? Decide on the pattern and leave just one method. */
if(Modules.Dyna.Boards.findOne({})) return;

console.log("INITIALIZING MODULE: DYNA");

Modules.Dyna.Boards.insert({
  root: true,
});

//////////////////////////////////
/*************************/});/**/
//////////////////////////////////
