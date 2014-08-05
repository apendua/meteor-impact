Template.dyna_board_thread.posts = function() {
  if(!this) return [];
  return Modules.Dyna.Posts.find({threadId: this._id});
};



Template.dyna_board_thread.events({

  'keyup .dyna_board_thread_response': function(e, t) {
    if(e.keyCode === 13) {
      if(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    };
  },

});

