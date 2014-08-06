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
  ], both);


  api.use('impact', both);


  api.add_files([
    'both/model.module.js',
  ], both);

  api.add_files([
    'client/vendor/masonry.js',

    'client/dynamo/dynamo_layout.css',
    'client/dynamo/dynamo_thread.css',
    'client/dynamo/dynamo_top.css',


    'client/views/board.module.html',
    'client/views/board.module.js',
    'client/views/board_post.module.html',
    'client/views/board_post.module.js',
    'client/views/board_thread.module.html',
    'client/views/board_thread.module.js',
    'client/views/board_subboard.module.html',

    'client/config.module.js',
    'client/subscribe.module.js',
  ], client);

  api.add_files([
    'server/initData.module.js',
    'server/allow.module.js',
    'server/publish.module.js',
    'server/observe.module.js',
    'server/fake.module.js',
    
  ], server);
});
