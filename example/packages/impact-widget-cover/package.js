Package.describe({
  summary: "Impact (alpha)"
});

Package.on_use(function (api, where) {
  var client = 'client';
  var server = 'server';
  var both = [client, server];

  api.use([
    'accounts-base',
    'crater-modals',
    'deps',
    'fake',
    'handlebars',
    'iron-router',
    'less',
    'moment',
    'blaze',
    'templating',
    'timestamp',
    'underscore',
    'unimark',
    'modules',
    'impact',
  ], both);

  api.use('impact', both);

  api.add_files([
    'module.json',
  ], both);

  api.add_files([
    'client/dashboard.module.html',
    'client/dashboard.module.js',
    'client/routes.module.js',
  ], client, { module: 'cover' });

  api.add_files([
    'server/initData.js',
  ], server, { module: 'cover' });
});
