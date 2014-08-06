App = {};
Modules = {};
Widgets = {};
Media = {};
Panels = {
  Content: {
    moduleBulbs: [],
    widgetBulbs: [],
    mediaBulbs: [],
  },
  Users: {
    theBulbs: [],
  },
  Profile: {
    theBulbs: [],
  },
};


Panels.Content.bulbs = [
  [
    {title: 'Content', name: 'home', url: '/content', icon: 'home'},
  ],
  Panels.Content.moduleBulbs,
  Panels.Content.widgetBulbs,
  Panels.Content.mediaBulbs,
];

Panels.Users.bulbs = [
  [
    {title: 'Users', name: 'home', url: '/users', icon: 'home'},
  ],
  Panels.Users.theBulbs,
];

Panels.Profile.bulbs = [
  [
    {title: 'Profile', name: 'home', url: '/profile', icon: 'home'},
  ],
  Panels.Profile.theBulbs,
];

//----------------------------------- INTEGRATION WITH MODULES API ---------------------------------------

function capFirst(string) {
  return string.replace(/./, function (c) {
    return c.toUpperCase();
  });
}

Module.registerPlugin("impact", [ "$module", "$config" ], function ($module, $config) {
  var settings = $config.impact || {};

  if (settings) {
    settings = { type: "module" };
    console.warn("Module `" + $config.name + "` is using impact plugin but it has not defined any impact settings.");
  }

  settings.type = settings.type || "module";

  $module.addToRecipies(function (instance) {
    instance.Impact = {};
  });

  var factories = {
    module: function (instance, settings) {
      instance.Impact.addToPanels = function (type, options) {
        type = capFirst(type);
        if (Panels[type] === undefined) {
          throw new Error("Panels type `" + type + "` is not supported.");
        }
        Panels[type].moduleBulbs.push(options);
      }
    },
    widget: function (instance, settings) {
      instance.Impact.addToPanels = function (options) {
        Panels.Content.widgetBulbs.push(options);
      }
    },
  }

  if (!factories[settings.type]) {
    console.warn("Imapct type `" + settins.type + "` is not supported.");
  } else {
    $module.addToRecipies(factories[settings.type]);
  }

});

