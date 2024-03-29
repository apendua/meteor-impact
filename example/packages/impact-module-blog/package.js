Package.describe({
  summary: "Impact Blog"
});

Package.on_use(function (api, where) {
  
  var client = 'client';
  var server = 'server';
  var both = [client, server];

  api.use([
    'accounts-base',
    'deps',
    'fake',
    'handlebars',
    'iron-router',
    'less',
    'moment',
    'templating',
    'timestamp',
    'underscore',
    'unimark',
    'modules',
    'impact',
  ], both);

  api.use('modules', both);

  api.add_files([
    'module.json', // module configuration

    'both/model.module.js',
  ], both, { module: 'blog' });

  api.add_files([
    'client/dashboard/dashboard.module.html',
    'client/dashboard/dashboard.module.js',
    'client/dashboard/edit.module.html',
    'client/dashboard/edit.module.js',
  ], both, { module: 'blog', layer: 'dashboard' });

  api.add_files([
    'client/views/article.module.html',
    'client/views/article.module.js',
    'client/views/articleToEdit.module.html',
    'client/views/list.module.html',
    'client/views/list.module.js',

    'client/config.module.js',
    'client/helpers.module.js',
    'client/subscribe.module.js',
  ], client, { module: 'blog' });

  api.add_files([
    'server/allow.module.js',
    'server/fake.module.js',
    'server/publish.module.js',
  ], server, { module: 'blog' });

});
