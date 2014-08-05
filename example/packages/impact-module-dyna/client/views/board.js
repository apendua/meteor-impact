


Template.dyna_board.rendered = function() {

  this.data.ancestors = ['a', 'b'];

  // if(false)
  new Masonry(this.find('.dynamo_box'), {
    itemSelector: '.dynamo_item',
    columnWidth: this.find('.dynamo_column_template'),
  });
};


var getAncestors = function(board) {
  if(!board) return [];
  if(board.root) return [];

  var parent = Modules.Dyna.Boards.findOne(board.parentId);

  var ancestors = getAncestors(parent);
  if(parent && !parent.root) ancestors.push(parent);
  return ancestors;
}

Template.dyna_board.ancestors = function() {
  return getAncestors(this.board);
};

//   // var ancestors = [];
//   // var current = this.board;
//   // while(current) {
//   //   if(current.root) return;
//   //   var parent = Modules.Dyna.Boards.findOne(current.parentId);
//   //   if(parent) ancestors.splice(0, 0, parent);
//   //   current = parent;
//   // }

//   // console.log("ancestors", ancestors);

//   return this.a;
// };

Template.dyna_board.threads = function() {
  if(!this.board) return [];
  return Modules.Dyna.Threads.find({boardId: this.board._id});
};

Template.dyna_board.subboards = function() {
  if(!this.board) return [];
  return Modules.Dyna.Boards.find({parentId: this.board._id});
};


Template.dyna_board.events({

});



