
UI.registerHelper('admin', Template.__create__('admin', function(options) {
  var view = this;
  if (Meteor.user() && Meteor.user().admin) {
    return view.templateContentBlock;
  }
  return view.templateElseContentBlock;
}));

UI.registerHelper('user', Template.__create__('user', function(options) {
  var view = this;
  if (Meteor.userId()) {
    return view.templateContentBlock;
  }
  return view.templateElseContentBlock;
}));
