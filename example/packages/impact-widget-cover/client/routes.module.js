
Router.map(function () {

  Panels.Content.widgetBulbs.push({
    title: 'Cover',
    name: 'w:cover',
    url: '/content/cover',
    icon: 'desktop',
  });

  this.route('dashboard', {
    path: '/content/cover',
    template: 'dashboard',
    layoutTemplate: 'adminLayout',
    data: { impact: {
      bulbs: Panels.Content.bulbs,
      bulb: 'w:cover',
    }},
    // before: function() {Session.set('bulb', 'cover');},
    // unload: function() {Session.set('bulb', undefined);},
  });

  /* 
    TODO: give this a nice centered layout.
    TODO: expand and style login buttons.
  */
  // this.route('login', {
  //   path: '/login',
  //   template: 'login',
  //   // layoutTemplate: 'adminLayout',
  //   // before: function() {Session.set('bulb', 'home');},
  //   // unload: function() {Session.set('bulb', undefined);},
  // });



});



