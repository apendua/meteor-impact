
/*
  users
  parentId
  title
*/
Modules.Dyna.Boards = new Meteor.Collection('dyna_boards');



/*
  boardId
  createdAt
  title
*/
Modules.Dyna.Threads = new Meteor.Collection('dyna_threads');

/*
  threadId
  userId
  createdAt
  content
*/
Modules.Dyna.Posts = new Meteor.Collection('dyna_posts');

