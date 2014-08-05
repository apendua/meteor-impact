Package.describe({
  summary: "Impact (alpha)"
});

Package.on_use(function (api, where) {
  
  var client = 'client';
  var server = 'server';
  var both = [client, server];

  api.use([
    'accounts-base',
    'crater',
    'deps',
    'fake',
    'handlebars',
    'iron-router',
    'less',
    'moment',
    'spark',
    'templating',
    'timestamp',
    'underscore',
    'unimark',
  ], both);


  api.use('impact', both);


  api.add_files([
    'both/index.js',
    'both/model.js',
  ], both);

  api.add_files([
    'client/vendor/masonry.js',

    'client/dynamo/dynamo_layout.css',
    'client/dynamo/dynamo_thread.css',
    'client/dynamo/dynamo_top.css',


    'client/views/board.html',
    'client/views/board.js',
    'client/views/board_post.html',
    'client/views/board_post.js',
    'client/views/board_thread.html',
    'client/views/board_thread.js',
    'client/views/board_subboard.html',

    'client/config.js',
    'client/subscribe.js',
  ], client);

  api.add_files([
    'server/initData.js',
    'server/allow.js',
    'server/publish.js',
    'server/observe.js',
    'server/fake.js',
    
  ], server);
});
