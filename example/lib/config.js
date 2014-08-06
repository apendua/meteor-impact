
/* TODO: untangle theme: add layout notes to this config object as well. */

MyBlog = Module('blog').load('blog', {
  name: 'blog',
  path: '/blog',
  articlePath: '/a',
  home: true,
  routes: {
    'home': {
      layoutTemplate: 'panelsLayout'
    },
    'list': {
      layoutTemplate: 'panelsLayout'
    },
    'dashboard': {
      layoutTemplate: 'adminLayout'
    },
    'new': {},
    'edit': {
      layoutTemplate: 'zenLayout'
    },
    'article': {
      layoutTemplate: 'panelsLayout'
    },
  },
});

/*

Modules.Dyna.load({

});
*/

