/*
  TODO: Merge with subscription channels to take advantage of the waitOn param.
*/

_.defaults(settings, {
  articlePath: '/article',
});

settings.routes = settings.routes || {};

_.each([ 'home', 'list', 'dashboard', 'new', 'edit', 'article' ], function (routeName) {
  settings.routes[routeName] = settings.routes[routeName] || {};
});

// integration with impact
Blog.Impact.addToPanels("content", {
  title: 'Blog',
  name: 'm:blog',
  url: '/content' + settings.path,
  icon: 'th-list',
});

Blog.router(function () {

  /*
    TODO: instead, create a separate file for managing home path and redirect it to a given path.
          - do we rally need it? (apenuda)
  */

  if(settings.home) {
    this.route('home', {
      path: '/',
      template: 'list',
      layoutTemplate: settings.routes.home.layoutTemplate,
    });
  }

  this.route('list', {
    path: '/list',
    template: 'list',
    layoutTemplate: settings.routes.list.layoutTemplate,
  });

  this.route('dashboard', {
    path: '/dashboard',
    template: 'dashboard',
    layoutTemplate: settings.routes.dashboard.layoutTemplate,
    data: {impact: {
      //bulbs: Panels.Content.bulbs,
      bulb: 'm:blog',
    }},
  });

  this.route('new', {
    path: '/edit',
    action: function() {
      var _id = Blog.Articles.insert({});
      _.defer(function() {
        Blog.go('edit', {_id: _id});
      });
    },
    // template: 'edit',
    // layoutTemplate: settings.routes.new.layoutTemplate,
    // data: function() { return {
    //   create: true,
    // };},
  });

  this.route('edit', {
    path: '/edit/:_id',
    template: 'edit',
    layoutTemplate: settings.routes.edit.layoutTemplate,
    data: function() {
      return {
        article: Blog.Articles.findOne({_id: this.params._id}),
      };
    },
  });

  this.route('article', {
    path: settings.articlePath + '/:seo/:_id',
    template: 'article',
    layoutTemplate: settings.routes.article.layoutTemplate,
    yieldTemplates: {
      'articleToEdit': {to: 'top'},
    },
    data: function() {
      return {
        article: Blog.Articles.findOne(this.params._id),
      };
    },
  });

});

